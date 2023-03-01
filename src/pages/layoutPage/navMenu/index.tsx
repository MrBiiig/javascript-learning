import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "element-react";

const NavMenu = (props) => {
  console.log(props);
  return (
    <div>
      <Button
        onClick={() => {
          props.history.push("/dragFieldsDemo");
        }}
      >
        dragFieldsDemo
      </Button>
      <Button
        onClick={() => {
          props.history.push("/dragFieldsDemoClazz");
        }}
      >
        dragFieldsDemoClazz
      </Button>
      <Button
        onClick={() => {
          props.history.push("/recordAudioDemo");
        }}
      >
        recordAudioDemo
      </Button>
    </div>
  );
};

export default withRouter(NavMenu);
