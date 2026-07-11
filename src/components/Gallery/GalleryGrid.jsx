import GalleryItem from "./GalleryItem";

function GalleryGrid({
  photos,
  onImageClick,
}) {
  return (
    <>
      {/* ================= Desktop Layout ================= */}

      <div className="hidden lg:grid grid-cols-3 gap-6">

        {/* Left */}

        <div className="space-y-6">

          <div className="h-[520px]">
            <GalleryItem
              photo={photos[0]}
              index={0}
              onClick={onImageClick}
            />
          </div>

          <div className="h-[240px]">
            <GalleryItem
              photo={photos[3]}
              index={3}
              onClick={onImageClick}
            />
          </div>

        </div>

        {/* Middle */}

        <div className="space-y-6">

          <div className="h-[240px]">
            <GalleryItem
              photo={photos[1]}
              index={1}
              onClick={onImageClick}
            />
          </div>

          <div className="h-[520px]">
            <GalleryItem
              photo={photos[4]}
              index={4}
              onClick={onImageClick}
            />
          </div>

        </div>

        {/* Right */}

        <div className="space-y-6">

          <div className="h-[520px]">
            <GalleryItem
              photo={photos[2]}
              index={2}
              onClick={onImageClick}
            />
          </div>

          <div className="h-[240px]">
            <GalleryItem
              photo={photos[5]}
              index={5}
              onClick={onImageClick}
            />
          </div>

        </div>

      </div>

      {/* ================= Mobile Premium Layout ================= */}

      <div className="lg:hidden space-y-5">

        {/* Hero Photo */}

        <div className="h-[280px]">
          <GalleryItem
            photo={photos[0]}
            index={0}
            onClick={onImageClick}
          />
        </div>

        {/* Row 1 */}

        <div className="grid grid-cols-2 gap-4">

          <div className="h-[180px]">
            <GalleryItem
              photo={photos[1]}
              index={1}
              onClick={onImageClick}
            />
          </div>

          <div className="h-[180px]">
            <GalleryItem
              photo={photos[2]}
              index={2}
              onClick={onImageClick}
            />
          </div>

        </div>

        {/* Row 2 */}

        <div className="grid grid-cols-2 gap-4">

          <div className="h-[180px]">
            <GalleryItem
              photo={photos[3]}
              index={3}
              onClick={onImageClick}
            />
          </div>

          <div className="h-[180px]">
            <GalleryItem
              photo={photos[4]}
              index={4}
              onClick={onImageClick}
            />
          </div>

        </div>

        {/* Closing Photo */}

        <div className="h-[250px]">
          <GalleryItem
            photo={photos[5]}
            index={5}
            onClick={onImageClick}
          />
        </div>

      </div>

    </>
  );
}

export default GalleryGrid;