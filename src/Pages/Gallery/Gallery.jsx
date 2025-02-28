import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // To detect if on Gallery page
import img1 from "../../assets/images/a.jpg";
import img2 from "../../assets/images/2ad9fbce9e56445eaed82a82014f8694.jpg";
import img3 from "../../assets/images/2c13b4ce86de4afa8dbcbf485598d890.jpg";
import img4 from "../../assets/images/2ebed1125e64440e8ee5090cbd4e9da4.jpg";
import img5 from "../../assets/images/4af16d153eb84bb9ad060d4bd0100629.jpg";
import img6 from "../../assets/images/5a75c2571e84441aad18025e5f9363fd.jpg";
import img7 from "../../assets/images/7acea3f8b73e4a4796a8796ee7d96805.jpg";
import img8 from "../../assets/images/8c2c561f7e9a4d2791110d4d4cbe0709.jpg";
import img9 from "../../assets/images/8c51969c1f0c4305a22c7bb9c5167e38.jpg";
import img10 from "../../assets/images/8f66f0433f0c4aa7bd3ead483b20994e.jpg";
import img11 from "../../assets/images/9e21796e583a464b997781b874cf9c28.jpg";
import img12 from "../../assets/images/18bbd54fe1bb4e24b10771681386f2a7.jpg";
import img13 from "../../assets/images/47ca48bdc2e54ceea93986639b8fed64.jpg";
import img14 from "../../assets/images/58b5649e02c941a49b7f757d7f427d53.jpg";
import img15 from "../../assets/images/b3ffde3b83af416c9f50b2d2906e64f1.jpg";
import img16 from "../../assets/images/b464361d1f874f609ca3ae936aa2c3ad.jpg";
import img17 from "../../assets/images/c67751cfc81d4ff08ae5955e8097b9ed.jpg";
import img18 from "../../assets/images/f3395f987b954cf8900e6dc3037b4de8.jpg";
import img19 from "../../assets/images/IMG-20250219-WA0002.jpg";
import img20 from "../../assets/images/IMG-20250219-WA0004.jpg";

const Gallery = ({ limit }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const location = useLocation(); // Detects if we are on the full gallery page

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
  ];

  // If `limit` is passed (on home page), show only that many images
  const displayImages = limit ? images.slice(0, limit) : images;

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Gallery</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayImages.map((src, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openLightbox(src)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Show "See More" only on Home Page */}
        {limit && (
          <div className="text-center mt-6">
            <a
              href="/gallery"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              See More
            </a>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-0 -mt-12 text-white text-2xl"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-h-screen max-w-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
