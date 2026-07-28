/**
 * Gallery photos for /sidequests.
 * Order is visual only — not grouped by city.
 */
export type GalleryPhoto = {
  src: string;
  /** 4:3 landscape or 3:4 portrait */
  orientation: "landscape" | "portrait";
};

export const galleryPhotos: GalleryPhoto[] = [

  {
    src: "/sidequests/gallery-fog-lake.jpg",
    orientation: "landscape",
  },
  {
    src: "/sidequests/gallery-italy-7-coast.jpg",
    orientation: "portrait",
  },
  
  {
    src: "/sidequests/gallery-italy-2.jpg",
    orientation: "portrait",
  },
  
  {
    src: "/sidequests/gallery-01-arch.jpg",
    orientation: "portrait",
  },
  {
    src: "/sidequests/gallery-04-garden.jpg",
    orientation: "landscape",
  },
  {
    src: "/sidequests/gallery-italy-5-wall.jpg",
    orientation: "portrait",
  },

  // 2
  
  
  // 3
  {
    src: "/sidequests/gallery-nyc-pier.jpg",
    orientation: "portrait",
  },
  {
    src: "/sidequests/gallery-atlanta-skyline.jpg",
    orientation: "portrait",
  },
  {
    src: "/sidequests/gallery-ski-mountains.jpg",
    orientation: "landscape",
  },

  
  // 4
  {
    src: "/sidequests/gallery-07-fountains.jpg",
    orientation: "landscape",
  },
  {
    src: "/sidequests/gallery-italy-8-vista.jpg",
    orientation: "portrait",
  },
  {
    src: "/sidequests/gallery-snow-night.jpg",
    orientation: "portrait",
  },

  // 5
  {
    src: "/sidequests/gallery-italy-4.jpg",
    orientation: "portrait",
  },
  {
    src: "/sidequests/gallery-beach-dusk.jpg",
    orientation: "portrait",
  },
  {
    src: "/sidequests/gallery-dusk-inlet.jpg",
    orientation: "landscape",
  },
];
