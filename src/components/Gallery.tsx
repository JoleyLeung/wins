import React, { useState, useEffect } from "react";
import "../styles/Gallery.css";
import "../App.css";
import galleryImages from "../../public/gallery_images/Gallery.json";

/*
type Image = {
  picname: string;
  pic: string;
};
const Gallery: React.FC = () => {
  // State to hold the images with the correct type
  const [images, setImages] = useState<Image[]>([]);

  // useEffect to set the images when the component mounts
  useEffect(() => {
    setImages(galleryImages);
  }, []); */
function Gallery() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <span className="bigheader">Gallery</span>
      </div>
      <div className="gallery-container">
        {galleryImages.map((image, index) => (
          <div key={image.picname} className="image-container">
            <img src={`/gallery_images/${image.pic}`} alt={image.picname} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
