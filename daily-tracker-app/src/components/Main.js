import React from 'react';
import ReactDOM from 'react-dom';
import {TopBar} from "./TopBar";

export class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pythonText:""
    };
  }

  // componentDidMount() {
  //   console.log("componentDidMount");
  //   fetch("http://localhost:5000/")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         console.log("result",result.check);
  //         this.setState({
  //           pythonText: result.check
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //     )
  // }

  render() {
    // const {pythonText} = this.state;
    // console.log("pythonText",pythonText)
    return (
      <TopBar/>
    );
  }
}