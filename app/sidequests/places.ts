export type Place = {
  id: string;
  name: string;
  shortLabel: string;
  lat: number;
  lng: number;
  description: string;
  /** Drop image files in /public/sidequests and list their paths here. */
  images?: string[];
  /** If false, shown in the chip list but not as a globe pin. */
  onGlobe?: boolean;
};

/** Edit this list to add places, move pins, or rewrite descriptions. */
export const places: Place[] = [
  {
    id: "alpharetta",
    name: "Alpharetta, Georgia",
    shortLabel: "atlanta",
    lat: 34.0754,
    lng: -84.2941,
    description:
      "I was born and raised in Alpharetta, Georgia. Since most people don't know what it is I like to tell people that when Amazon was switching their delivery trucks to Rivian EVS, they chose a bunch of major cities like Phoeniz, New York, Houston and Alpharetta. Not Atlanta, but Alpharetta. For now, that's the only relevance Alpharetta has",
    images: ["/sidequests/photo-1.jpg", "/sidequests/photo-3.jpg"],
  },
  {
    id: "sf",
    name: "San Francisco",
    shortLabel: "san francisco",
    lat: 37.7749,
    lng: -122.4194,
    description:
      "I moved to San Francisco for the first time at 17 to work at General Translation. I'm eternally grateful Archie took a risk hiring me. I learned so much about startups, engineering, and especially myself. I got to wear so many hats and I'm so grateful I was entrusted with being able to contribute so much.",
    images: ["/sidequests/sf-1.jpg"],
  },
  {
    id: "chicago",
    name: "Chicago",
    shortLabel: "chicago",
    lat: 41.8781,
    lng: -87.6298,
    description:
      "Where I currently go to school — Northwestern. Deep in the startup scene here, building things and meeting people.",
    images: ["/sidequests/photo-2.jpg"],
  },
  {
    id: "italy",
    name: "Florence, Italy",
    shortLabel: "florence",
    lat: 41.9028,
    lng: 12.4964,
    description:
      "Outside of visiting the Tuscany countryside and the most beautiful places in the world, I also escaped the noise in the startup space to see if my real values didn't align. Through that I realized I'm truly passionate about tech in the startup world. I realized I'm really fascinated by social and knowledge networks and the engineering aspect of that!\n\nI also believe that one of the best ways you can grow is by doing things by yourself. I went on many solo day trips throughout Italy and I gained more trust for myself to figure things out when things are foreign (literally) and don't work out the way I planned (4 of my trains got delayed so I ended up in a 20 person bus down a really steep mountain). I miss the Italian espresso :(",
    images: [
      "/sidequests/italy-2.png",
      "/sidequests/italy-3.png",
      "/sidequests/italy-4.png",
    ],
  },
];

/** Chronological journey used to draw arcs between pins. */
export const journeyPath = ["alpharetta", "sf", "chicago", "italy"] as const;

export const globePlaces = places.filter((p) => p.onGlobe !== false);
