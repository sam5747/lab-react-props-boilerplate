import { Component } from "react";
import "./App.css"
import DataComponent from "./components/DataComponent";

export default class AppClass extends Component{
  // code here
  render() {
    const images = DataComponent();
    return (
      <div className="gallery">
        <h1>Kalvium Gallery</h1>
        <div className="image-container">
          {images.map(image => (
            <img key={image.id} src={image.img} alt={`Image ${image.id}`} />
          ))}
        </div>
      </div>
    );
  }
}
