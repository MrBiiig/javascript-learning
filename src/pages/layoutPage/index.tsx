import React from "react";

import { HashRouter as Router, Route } from "react-router-dom";
import CacheRoute, { CacheSwitch } from "react-router-cache-route";

/* 跳转各页面 */
import DragFieldsDemo from "@/pages/demoPages/dragFieldsDemo";
import DragFieldsDemoClazz from "@/pages/demoPages/dragFieldsDemo/indexClazz";
import RecordAudioDemo from "@/pages/demoPages/recordAudioDemo/index_play";
import RecordAudio2Demo from "@/pages/demoPages/recordAudioDemo/index_file";
import RotateSwitchDemo from "@/pages/demoPages/rotateSwitchDemo";
import NavMenu3D from "@/pages/demoPages/navMenu3D";
import Algorithms1 from "@/pages/algorithms/index1";
/* 404页面 */
import NotFound from "@/pages/notFound";

/* 页面结构组件 */
import NavMenu from "./navMenu";

/**
 * 整体网页组件，包含了路由导航部分（或封装为组件） 和 路由页面视图部分（或封装为组件）
 */
const LayoutPage = () => {
  return (
    <Router>
      <NavMenu></NavMenu>
      <CacheSwitch>
        <CacheRoute exact path="/dragFieldsDemo" component={DragFieldsDemo} />
        <CacheRoute
          exact
          path="/dragFieldsDemoClazz"
          component={DragFieldsDemoClazz}
        />
        <Route exact path="/recordAudioDemo" component={RecordAudioDemo} />
        <Route exact path="/recordAudio2Demo" component={RecordAudio2Demo} />
        <Route exact path="/rotateSwitchDemo" component={RotateSwitchDemo} />
        <Route exact path="/navMenu3D" component={NavMenu3D} />
        <Route exact path="/algorithms1" component={Algorithms1} />
        <Route render={NotFound} />
      </CacheSwitch>
    </Router>
  );
};

export default LayoutPage;
