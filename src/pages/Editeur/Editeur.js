import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import NavBar from "../../components/NavBar";
import {HashRouter as Router, NavLink} from "react-router-dom";


export class Editeur extends React.Component {
  constructor(props) {
    super(props);

    this.unityContent = new UnityContent(
      "/editor/static/unity_files/BuildDelivery.json",
      "/editor/static/unity_files/UnityLoader.js"
    );
  }

  render() {
      return (
          <div style={{backgroundColor: 'black'}}>
            <NavBar />
            <Unity unityContent={this.unityContent}/>
        </div>
      );
  }
}