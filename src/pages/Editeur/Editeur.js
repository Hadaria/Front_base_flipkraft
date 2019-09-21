import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

export class Editeur extends React.Component {
  constructor(props) {
    super(props);

    this.unityContent = new UnityContent(
      "../../../public/editor/static/unity_files/BuildDelivery.json",
      "../../../public/editor/static/unity_files/UnityLoader.js"
    );
  }

  render() {
      return (
          <div>
            <h1> je suis l'Editeur </h1>
            <Unity unityContent={this.unityContent}/>
        </div>
      );
  }
}