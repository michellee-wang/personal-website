import Image from "next/image";
import { galleryPhotos } from "./galleryPhotos";

export default function PhotoGallery() {
  if (galleryPhotos.length === 0) return null;

  return (
    <section className="mt-16 w-full min-w-0">

      <h3 className="mb-5 text-sm sm:text-base leading-snug font-medium tracking-tight text-black">
        <span className="box-decoration-clone bg-[#d4dcf3] px-1.5 py-[0.12em]">
          i really like photography, cooking, tennis and skiing
        </span>
      </h3>

      <div id="photos" className="photo-gallery-grid scroll-mt-8">
        {galleryPhotos.map((photo) => {
          const isLandscape = photo.orientation === "landscape";
          return (
            <div
              key={photo.src}
              className={`min-w-0 ${isLandscape ? "col-span-2" : "col-span-1"}`}
            >
              <div className="photo-tile">
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes={
                    isLandscape
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
