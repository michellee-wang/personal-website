export type Place = {
  id: string;
  name: string;
  shortLabel: string;
  lat: number;
  lng: number;
  description: string;
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
      "My hometown of Alpharetta, Georgia!\n\nIt's 45 minutes from the center of Atlanta, so in high school I used to sneak into Georgia Tech Create-X startup events. \n\n Also, since most people don't know what Alpharetta is, I like to tell people that when Amazon was switching their delivery trucks to Rivian EVs, they chose a bunch of major cities like Phoenix, New York, Houston, and Alpharetta. Not Atlanta — Alpharetta. For now, that's the only relevance Alpharetta has.\n\nWhat is there to do in Atlanta? Idk either! There's a lack of historical sites because William Tecumseh Sherman burned the whole city down during the Civil War.",
  },
  {
    id: "sf",
    name: "San Francisco",
    shortLabel: "san francisco",
    lat: 37.7749,
    lng: -122.4194,
    description:
      "I moved to San Francisco for the first time at 17 to work at General Translation. I'm eternally grateful Archie took the risk hiring me. I learned so much about startups, engineering, and especially myself. I got to wear so many hats and I met some of the best friends here.\n\nOne of the things I loved most about San Francisco is I was never the smartest in the room. The people I've met here have accomplished things I've thought were not possible and because of that, I genuinely think anything is possible (especially if you have audacity).",
  },
  {
    id: "chicago",
    name: "Chicago",
    shortLabel: "chicago",
    lat: 41.8781,
    lng: -87.6298,
    description:
      "Where I currently go to school — Northwestern. Go cats! \n\n I've never been so cold in my life (I'm from the south). I remember one time I was rushing to get to my midterm and I slipped on black ice and although I was in pain it made me a lot less nervous because I had the well being of glutes to worry about more. \n\n I'm on the quarter system so I'm here from late Sep to mid June. ",
  },
  {
    id: "italy",
    name: "Florence, Italy",
    shortLabel: "florence",
    lat: 41.9028,
    lng: 12.4964,
    description:
      "Outside of visiting the Tuscany countryside and the most beautiful places in the world, I also escaped the noise in the startup space to see if my real values didn't align. Through that I realized I'm truly passionate about tech in the startup world. I realized I'm really fascinated by social and knowledge networks and the engineering aspect of that! I learned so much about art history and the renaissance while visiting museums which is something I didn't think I was interested in as someone who spent most of her life deeply passionate about tech.\n\nI also believe that one of the best ways you can grow is by doing things by yourself. I went on many solo day trips throughout Italy and I gained more trust for myself to figure things out when things are foreign (literally) and don't work out the way I planned (4 of my trains got delayed so I ended up in a 20 person bus down a really steep mountain).\n\nI gave olives another chance (no.) and I'm now pretty well versed in niche fragrances and espresso!",
  },
];

/** Chronological journey used to draw arcs between pins. */
export const journeyPath = ["alpharetta", "sf", "chicago", "italy"] as const;

export const globePlaces = places.filter((p) => p.onGlobe !== false);
