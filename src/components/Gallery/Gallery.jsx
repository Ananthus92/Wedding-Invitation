import { useState } from "react";

import GalleryHeader from "./GalleryHeader";
import GalleryGrid from "./GalleryGrid";
import Lightbox from "./Lightbox";

import galleryData from "./galleryData";

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Open selected image
  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  // Previous image
  const showPrevious = () => {
    setSelectedIndex((prev) =>
      prev === 0
        ? galleryData.length - 1
        : prev - 1
    );
  };

  // Next image
  const showNext = () => {
    setSelectedIndex((prev) =>
      prev === galleryData.length - 1
        ? 0
        : prev + 1
    );
  };

  return (
    <section className=" py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <GalleryHeader />

        <GalleryGrid
          photos={galleryData}
          onImageClick={openLightbox}
        />

        <Lightbox
          photos={galleryData}
          selectedIndex={selectedIndex}
          onClose={closeLightbox}
          onPrevious={showPrevious}
          onNext={showNext}
        />

      </div>
    </section>
  );
}

export default Gallery;