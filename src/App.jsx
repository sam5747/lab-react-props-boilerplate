import './App.css';
import DataComponent from './components/DataComponent';
import React from 'react';

function App() {
  // code here
  const images = DataComponent();
  const photos = images.map(image => (
    <div key={image.id} className="image-item">
    <img key={image.id} src={image.img} alt={`Image ${image.id}`} />
    </div>
  ));

  return (
    <div className="gallery">
      <h1>Kalvium Gallery</h1>
      <div className="image-container">
        {photos}
      </div>
    </div>
  );
}

export default App;
