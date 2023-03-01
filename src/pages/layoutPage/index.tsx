import React from "react";

import { HashRouter as Router, Route } from "react-router-dom";
import CacheRoute, { CacheSwitch } from "react-router-cache-route";

/* 跳转各页面 */
import DragFieldsDemo from "@/pages/demoPages/dragFieldsDemo";
import DragFieldsDemoClazz from "@/pages/demoPages/dragFieldsDemo/indexClazz";
import RecordAudioDemo from "@/pages/demoPages/recordAudioDemo";
/* 页面结构组件 */
import NavMenu from "./navMenu";

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
        <Route render={() => <div>404 未找到页面</div>} />
      </CacheSwitch>
    </Router>
  );
};

export default LayoutPage;
