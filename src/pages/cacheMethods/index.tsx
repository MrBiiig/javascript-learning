import React from "react";
import { Input, Button, Popover } from "element-react";

import "./styles/index.less";

const CacheMethods = () => {
  /* 强缓存 */
  /**
   * 在浏览器中，强缓存分为Expires（http1.0规范）、cache-control（http1.1规范）两种。
   *
   * Expires
   * Expires是http1.0的规范，用于表示资源的过期时间的请求头字段，值是一个绝对时间，是由服务器端返回的。
   * 在浏览器第一个请求资源时，服务器端的响应头会附上Expires这个响应字段，当浏览器在下一次请求这个资源时会根据上次的expires字段是否使用缓存资源（当请求时间小于服务端返回的到期时间，直接使用缓存数据）
   * ！！！expires是根据本地时间来判断的，假设客户端和服务器时间不同，会导致缓存命中误差！！！
   *
   * Cache-control
   * Expires有个缺点，当客户端本地时间和服务器时间不一致时会产生误差，浏览器会直接向服务器请求新的资源，为了解决这个问题，在http1.1规范中，提出了cache-control字段，且这个字段优先级高于上面提到的Expires，值是相对时间。
   * 在cache-control中有常见的几个响应属性值：
   *  max-age	3600	例如值为3600，表示（当前时间+3600秒）内不与服务器请求新的数据资源
   *  s-maxage		和max-age一样，但这个是设定代理服务器的缓存时间
   *  private		内容只缓存到私有缓存中(仅客户端可以缓存，代理服务器不可缓存)
   *  public		所有内容都将被缓存(客户端和代理服务器都可缓存)
   *  no-store		不缓存任何数据
   *  no-cache		储存在本地缓存区中，只是在与原始服务器进行新鲜度再验证之前，缓存不能将其提供给客户端使用
   */

  /* 协商缓存 */
  /**
   * 上面提到的强缓存都是由本地浏览器在确定是否使用缓存，当浏览器没有命中强缓存时就会向服务器发送请求，验证协商缓存是否命中，如果缓存命中则返回304状态码，否则返回新的资源数据。
   * 协商缓存（也叫对比缓存）是由服务器来确定资源是否可用，这将涉及到两组字段成对出现的，在浏览器第一次发出请求时会带上字段（Last-Modified或者Etag），则后续请求则会带上对于的请求字段（if-modified-since或者if-none-Match），若响应头没有Last-Modified或者Etag，则请求头也不会有对应的字段
   * 
   *  Last-modified表示本地文件最后修改时间，由服务器返回
      if-modified-since是浏览器在请求数据时返回的，值是上次浏览器返回的Last-modified
      ETag是一个文件的唯一标识符，当资源发生变化时这个ETag就会发生变化。弥补了上面last-modified可能出现文件内容没有变化但是last-modified发生了变化出现重新向服务器请求资源情况。这个值也是又服务器返回的
      if-none-match是浏览器请求数据时带上的字段，值是上次服务器返回的ETag

   */

  /* 强缓存和协商缓存都是在缓存存在的情况下才可能命中的，没有缓存一定是要请求新资源的 */
  /* 强缓存只由浏览器主导，协商缓存由服务器主导 */
  /* 强缓存失效了才去走协商缓存的逻辑----
  一个理解就是：强缓存是浏览器单方面决定不能用缓存了，但它还要去问问服务器是不是确定不用缓存了，等服务器最终拍板决定了用（返回304，不会返回资源）或不用（返回200，以及新资源） */

  /* 几点关键点！！！！ */
  /* Expires和Cache-control如果同时存在时，cache-control会覆盖expires，expires无效，无论是否过期，。即 Cache-control > expires */
  /* 强缓存和协商缓存如果同时存在时，会去先对比强缓存是否还再有效期，如果强缓存还在有效期内则直接使用强缓存，否则协商缓存生效，即强缓存 > 协商缓存 */
  /* 协商缓存Etag和last-modified同时存在时，会先比较Etag，last-modified无效，即Etag > last-modified */

  if ("存在缓存（浏览器判断）") {
    //先判断和执行【强缓存】（由浏览器主导）
    if ("强缓存失效（浏览器判断）") {
      //浏览器向服务器的请求中加入if-none-match（上次最新请求中服务器返回的etag）或if-modified-since（上次最新请求中服务器返回的last-modified）
      //判断和执行【协商缓存】（由服务器主导）
      if ("客户端传来的有etag标识符（服务器判断）") {
        //判断用etag
        if (
          "客户端传来的if-none-match标识符与当前服务器上有对应文件的标识一致（服务器判断）"
        ) {
          //【协商缓存】命中
          //返回状态码304 not modified（不返回资源内容）
        } else {
          //重新换取新资源并返回200状态码
        }
      } else {
        //判断用last-modified
        if (
          "客户端传来的if-modified-since标识的时间与当前服务器上有对应文件的上次修改时间一致（服务器判断）"
        ) {
          //【协商缓存】命中
          //返回状态码304 not modified（不返回资源内容）
        } else {
          //重新换取新资源并返回200状态码
        }
      }
    } else {
      //【强缓存】命中
      //返回缓存的资源（状态码200）
    }
  } else {
    //不存在缓存
    //【向服务器请求新的资源（并记录服务器返回的last-modified）】
  }

  return (
    <div>
      <h1>缓存</h1>
      <p>
        <h2 style={{ margin: 0 }}>some points</h2>
        <br></br>
        <Popover
          placement="top-start"
          width="600"
          trigger="hover"
          content="Expires和Cache-control如果同时存在时，cache-control会覆盖expires，expires无效，无论是否过期，即Cache-control
        &gt; Expires"
        >
          <Button>Cache-control &gt; Expires</Button>
        </Popover>
        <Popover
          placement="top-start"
          width="600"
          trigger="hover"
          content="强缓存和协商缓存如果同时存在时，会去先对比强缓存是否还再有效期，如果强缓存还在有效期内则直接使用强缓存，否则协商缓存生效，即强缓存
          &gt; 协商缓存"
        >
          <Button>强缓存 &gt; 协商缓存</Button>
        </Popover>
        <Popover
          placement="top-start"
          width="600"
          trigger="hover"
          content="协商缓存Etag和last-modified同时存在时，会先比较Etag，last-modified无效，即Etag
          &gt; last-modified"
        >
          <Button>Etag &gt; last-modified</Button>
        </Popover>
        <Popover
          placement="top-start"
          width="600"
          trigger="hover"
          content={
            <ul>
              <li>
                强缓存和协商缓存都是在缓存存在的情况下才可能命中的，没有缓存一定是要请求新资源的
              </li>
              <li>强缓存只由浏览器主导，协商缓存由服务器主导</li>
              <li>强缓存失效了才去走协商缓存的逻辑</li>
              <li>
                一个理解就是：强缓存是浏览器单方面决定不能用缓存了，但它还要去问问服务器是不是确定不用缓存了，等服务器最终拍板决定了用（返回304，不会返回资源）或不用（返回200，以及新资源）
              </li>
            </ul>
          }
        >
          <Button>其他自己总结的点</Button>
        </Popover>
      </p>

      <p>
        <h4>强缓存</h4>
        在浏览器中，强缓存分为Expires（http1.0规范）、cache-control（http1.1规范）两种。
        <br></br>* * Expires *<br></br>
        Expires是http1.0的规范，用于表示资源的过期时间的请求头字段，值是一个绝对时间，是由服务器端返回的。
        在浏览器第一个请求资源时，服务器端的响应头会附上Expires这个响应字段，当浏览器在下一次请求这个资源时会根据上次的expires字段是否使用缓存资源（当请求时间小于服务端返回的到期时间，直接使用缓存数据）
        <br></br>
        ！！！expires是根据本地时间来判断的，假设客户端和服务器时间不同，会导致缓存命中误差！！！
        <br></br>* * Cache-control *<br></br>
        Expires有个缺点，当客户端本地时间和服务器时间不一致时会产生误差，浏览器会直接向服务器请求新的资源，为了解决这个问题，在http1.1规范中，提出了cache-control字段，且这个字段优先级高于上面提到的Expires，值是相对时间。
        <br></br> 在cache-control中有常见的几个响应属性值： <br></br>* max-age
        3600 例如值为3600，表示（当前时间+3600秒）内不与服务器请求新的数据资源{" "}
        <br></br>* s-maxage 和max-age一样，但这个是设定代理服务器的缓存时间{" "}
        <br></br>* private
        内容只缓存到私有缓存中(仅客户端可以缓存，代理服务器不可缓存) <br></br>*
        public 所有内容都将被缓存(客户端和代理服务器都可缓存) <br></br>*
        no-store 不缓存任何数据
        <br></br>* no-cache
        储存在本地缓存区中，只是在与原始服务器进行新鲜度再验证之前，缓存不能将其提供给客户端使用
      </p>
      <p>
        <h4>协商缓存</h4>
        上面提到的强缓存都是由本地浏览器在确定是否使用缓存，当浏览器没有命中强缓存时就会向服务器发送请求，验证协商缓存是否命中，如果缓存命中则返回304状态码，否则返回新的资源数据。
        <br></br>
        协商缓存（也叫对比缓存）是由服务器来确定资源是否可用，这将涉及到两组字段成对出现的，在浏览器第一次发出请求时会带上字段（Last-Modified或者Etag），则后续请求则会带上对于的请求字段（if-modified-since或者if-none-Match），若响应头没有Last-Modified或者Etag，则请求头也不会有对应的字段
        * * Last-modified表示本地文件最后修改时间，由服务器返回
        if-modified-since是浏览器在请求数据时返回的，值是上次浏览器返回的Last-modified
        ETag是一个文件的唯一标识符，当资源发生变化时这个ETag就会发生变化。
        <br></br>
        弥补了上面last-modified可能出现文件内容没有变化但是last-modified发生了变化出现重新向服务器请求资源情况。这个值也是又服务器返回的
        if-none-match是浏览器请求数据时带上的字段，值是上次服务器返回的ETag
      </p>
    </div>
  );
};

export default CacheMethods;
