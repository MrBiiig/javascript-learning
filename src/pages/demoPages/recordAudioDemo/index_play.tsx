import React from "react";

import { Button } from "element-react";
import { withRouter } from "react-router-dom";
import "./styles/index.less";
/* 
https://gitee.com/xiangyuecn/Recorder?_from=gitee_search#https://xiangyuecn.gitee.io/recorder/assets/%E5%B7%A5%E5%85%B7-%E4%BB%A3%E7%A0%81%E8%BF%90%E8%A1%8C%E5%92%8C%E9%9D%99%E6%80%81%E5%88%86%E5%8F%91Runtime.html?jsname=teach.realtime.asr.aliyun.short
*/
/* 核心代码 */
//必须引入的核心，换成require也是一样的。注意：recorder-core会自动往window下挂载名称为Recorder对象，全局可调用window.Recorder，也许可自行调整相关源码清除全局污染
import Recorder from "recorder-core";

/* pcm */
//引入相应格式支持文件；如果需要多个格式支持，把这些格式的编码引擎js文件放到后面统统引入进来即可
import "recorder-core/src/engine/pcm";

/* wav */
//引入相应格式支持文件；如果需要多个格式支持，把这些格式的编码引擎js文件放到后面统统引入进来即可
import "recorder-core/src/engine/wav";

/* mp3 */
//引入相应格式支持文件；如果需要多个格式支持，把这些格式的编码引擎js文件放到后面统统引入进来即可
import "recorder-core/src/engine/mp3";
import "recorder-core/src/engine/mp3-engine"; //如果此格式有额外的编码引擎（*-engine.js）的话，必须要加上
//以上三个也可以合并使用压缩好的recorder.xxx.min.js
//比如 import Recorder from 'recorder-core/recorder.mp3.min' //已包含recorder-core和mp3格式支持
//可选的插件支持项
import "recorder-core/src/extensions/waveview";

const RecordAudioDemo = (props) => {
  const [blob, setBlob] = React.useState(null);
  const [ignored, forceUpdate] = React.useReducer((x) => x + 1, 0);
  const recorder = React.useRef(null);
  const isUserAllowed = React.useRef(false);

  React.useEffect(() => {
    if (!recorder.current) {
      isUserAllowed.current = false;
      recorder.current = Recorder({
        //本配置参数请参考下面的文档，有详细介绍
        type: "mp3",
        sampleRate: 16000,
        bitRate: 16, //mp3格式，指定采样率hz、比特率kbps，其他参数使用默认配置；注意：是数字的参数必须提供数字，不要用字符串；需要使用的type类型，需提前把格式支持文件加载进来，比如使用wav格式需要提前加载wav.js编码引擎
        onProcess: function (
          buffers,
          powerLevel,
          bufferDuration,
          bufferSampleRate,
          newBufferIdx,
          asyncEnd
        ) {
          //录音实时回调，大约1秒调用12次本回调，buffers为开始到现在的所有录音pcm数据块(16位小端LE)
          //可实时绘制波形（extensions目录内的waveview.js、wavesurfer.view.js、frequency.histogram.view.js插件功能）
          //可利用extensions/sonic.js插件实时变速变调，此插件计算量巨大，onProcess需要返回true开启异步模式
          //可实时上传（发送）数据，配合Recorder.SampleData方法，将buffers中的新数据连续的转换成pcm上传，或使用mock方法将新数据连续的转码成其他格式上传，可以参考文档里面的：Demo片段列表 -> 实时转码并上传-通用版；基于本功能可以做到：实时转发数据、实时保存数据、实时语音识别（ASR）等
        },
      });
    }
    if (!isUserAllowed.current) {
      recorder.current.open(
        () => {
          isUserAllowed.current = true;
          forceUpdate();
          //打开麦克风授权获得相关资源
          //dialog&&dialog.Cancel(); 如果开启了弹框，此处需要取消
          //recorder.current.start() 此处可以立即开始录音，但不建议这样编写，因为open是一个延迟漫长的操作，通过两次用户操作来分别调用open和start是推荐的最佳流程
          // success && success();
        },
        (msg, isUserNotAllow) => {
          isUserAllowed.current = !isUserNotAllow;
          forceUpdate();
          //用户拒绝未授权或不支持
          //dialog&&dialog.Cancel(); 如果开启了弹框，此处需要取消
          console.log(
            (isUserNotAllow ? "UserNotAllow，" : "") + "无法录音:" + msg
          );
        }
      );
    }
    forceUpdate();

    //卸载组件前调用
    return () => {
      if (recorder.current) {
        recorder.current.close(); //释放录音资源，当然可以不释放，后面可以连续调用start；但不释放时系统或浏览器会一直提示在录音，最佳操作是录完就close掉
        recorder.current = null;
      }
    };
  }, []);

  const startRecording = () => {
    if (!recorder.current || !isUserAllowed.current) {
      alert("请刷新页面，允许浏览器录音的授权");
      return;
    }
    recorder.current.start();
  };

  const stopRecording = () => {
    if (!recorder.current || !isUserAllowed.current) {
      alert("请刷新页面，允许浏览器录音的授权");
      return;
    }
    recorder.current.stop(
      function (blob, duration) {
        console.log(
          blob,
          (window.URL || webkitURL).createObjectURL(blob),
          "时长:" + duration + "ms"
        );
        recorder.current.close(); //释放录音资源，当然可以不释放，后面可以连续调用start；但不释放时系统或浏览器会一直提示在录音，最佳操作是录完就close掉
        recorder.current = null;

        //已经拿到blob文件对象想干嘛就干嘛：立即播放、上传

        /*** 【立即播放例子】 ***/
        setBlob(blob);
        // var audio = document.createElement("audio");
        // audio.controls = true;
        // document.body.appendChild(audio);
        // //简单利用URL生成播放地址，注意不用了时需要revokeObjectURL，否则霸占内存
        // audio.src = (window.URL || webkitURL).createObjectURL(blob);
        // audio.play();
      },
      function (msg) {
        console.log("录音失败:" + msg);
        recorder.current.close(); //可以通过stop方法的第3个参数来自动调用close
        recorder.current = null;
      }
    );
  };

  return (
    <div>
      <Button disabled={!isUserAllowed.current} onClick={startRecording}>
        开始录音
      </Button>
      <Button onClick={stopRecording}>停止录音</Button>
      <AudioPlayer blob={blob}></AudioPlayer>
    </div>
  );
};

const AudioPlayer = (props) => {
  const [src, setSrc] = React.useState("");
  const audioDom = React.useRef(0);
  React.useEffect(() => {
    if (props.blob) {
      setSrc((window.URL || webkitURL).createObjectURL(props.blob));
    }
  }, [props.blob]);
  return src ? (
    <div>
      <audio
        ref={(el) => (audioDom.current = el)}
        controls={true}
        src={src}
      ></audio>
    </div>
  ) : (
    <React.Fragment></React.Fragment>
  );
};

export default withRouter(RecordAudioDemo);
