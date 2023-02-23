import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.less";
import ListItem from "~/components/listItem/index.jsx";
console.log("123");
class App extends React.Component {
  render() {
    return (
      <div>
        <ListItem></ListItem>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
