export type Series = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  rating: number;
  creator: string;
  network: string;
  releaseDate: string;
  seasons: number;
  episodes: number;
  genres: string[];
  cast: string[];
  storyline: string;
  setting: string;
  language: string;
  imdbLink: string;
  ongoing: boolean;
};

export const series: Series[] = [
  {
    id: "1",
    slug: "breaking-bad",
    title: "Breaking Bad",
    category: "crime-drama",
    description:
      "Breaking Bad follows Walter White, a high school chemistry teacher turned methamphetamine producer, as he descends into the criminal underworld alongside his former student, Jesse Pinkman.",
    image:
      "https://c4.wallpaperflare.com/wallpaper/582/58/501/breaking-bad-walter-white-jesse-pinkman-wallpaper-preview.jpg",
    rating: 9.5,
    creator: "Vince Gilligan",
    network: "Netflix",
    releaseDate: "January 20, 2008",
    seasons: 5,
    episodes: 62,
    genres: ["Crime", "Drama", "Thriller"],
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn", "Giancarlo Esposito"],
    storyline:
      "A struggling teacher diagnosed with cancer turns to drug manufacturing to secure his family's future, leading to power struggles and moral corruption.",
    setting: "Albuquerque, New Mexico",
    language: "English",
    imdbLink: "https://www.imdb.com/title/tt0903747/",
    ongoing: false,
  },
  {
    id: "2",
    slug: "money-heist",
    title: "Money Heist",
    category: "heist-thriller",
    description:
      "A criminal mastermind known as 'The Professor' recruits eight people with unique skills to carry out an ambitious plan to rob Spain’s Royal Mint.",
    image:
      "https://wallpapers.com/images/featured/money-heist-poster-i0hmaz980kt99l31.jpg",
    rating: 8.2,
    creator: "Álex Pina",
    network: "Netflix",
    releaseDate: "May 2, 2017",
    seasons: 5,
    episodes: 41,
    genres: ["Crime", "Thriller", "Drama"],
    cast: ["Álvaro Morte", "Úrsula Corberó", "Pedro Alonso", "Itziar Ituño"],
    storyline:
      "A group of robbers, led by The Professor, attempt to carry out the perfect heist while dealing with personal conflicts and police pressure.",
    setting: "Madrid, Spain",
    language: "Spanish",
    imdbLink: "https://www.imdb.com/title/tt6468322/",
    ongoing: false,
  },
  {
    id: "3",
    slug: "all-of-us-are-dead",
    title: "All of Us Are Dead",
    category: "zombie-horror",
    description:
      "A group of trapped high school students must fight their way out when a zombie virus outbreak begins in their school.",
    image:
      "https://slidechef.net/wp-content/uploads/2022/05/All-of-us-are-dead.jpg",
    rating: 7.5,
    creator: "Chun Sung-il",
    network: "Netflix",
    releaseDate: "January 28, 2022",
    seasons: 1,
    episodes: 12,
    genres: ["Horror", "Thriller", "Drama"],
    cast: ["Park Ji-hu", "Yoon Chan-young", "Cho Yi-hyun", "Lomon"],
    storyline:
      "After a failed science experiment triggers a zombie outbreak, students trapped in a school must struggle to survive until rescue arrives.",
    setting: "Hyosan High School, South Korea",
    language: "Korean",
    imdbLink: "https://www.imdb.com/title/tt14169960/",
    ongoing: true,
  },
  {
    id: "4",
    slug: "peaky-blinders",
    title: "Peaky Blinders",
    category: "historical-crime",
    description:
      "Set in post-World War I Birmingham, Peaky Blinders follows the rise of the Shelby crime family as they expand their influence across Britain.",
    image:
      "https://c4.wallpaperflare.com/wallpaper/281/173/77/cillian-murphy-peaky-blinders-thomas-shelby-arthur-shelby-wallpaper-preview.jpg",
    rating: 8.8,
    creator: "Steven Knight",
    network: "BBC / Netflix",
    releaseDate: "September 12, 2013",
    seasons: 6,
    episodes: 36,
    genres: ["Crime", "Drama", "Historical"],
    cast: ["Cillian Murphy", "Paul Anderson", "Helen McCrory", "Tom Hardy"],
    storyline:
      "Thomas Shelby and his brothers return from war and build their gang into a powerful organization, facing rivals, politicians, and personal struggles.",
    setting: "Birmingham, England (1919–1930s)",
    language: "English",
    imdbLink: "https://www.imdb.com/title/tt2442560/",
    ongoing: false,
  },
  {
    id: "5",
    slug: "succession",
    title: "Succession",
    category: "drama",
    description:
      "Succession revolves around the Roy family, owners of a global media empire, as they fight for control amid internal rivalries and external challenges.",
    image:
      "https://w0.peakpx.com/wallpaper/1001/927/HD-wallpaper-tv-show-succession-brian-cox-sarah-snook.jpg",
    rating: 8.9,
    creator: "Jesse Armstrong",
    network: "HBO",
    releaseDate: "June 3, 2018",
    seasons: 4,
    episodes: 39,
    genres: ["Drama", "Satire"],
    cast: ["Brian Cox", "Jeremy Strong", "Sarah Snook", "Kieran Culkin"],
    storyline:
      "The Roy children vie for power as their aging father considers succession, exposing dysfunction, greed, and betrayal within the family.",
    setting: "New York City, USA",
    language: "English",
    imdbLink: "https://www.imdb.com/title/tt7660850/",
    ongoing: false,
  },
];

export const categories = [
  { slug: "crime-drama", name: "Crime Drama" },
  { slug: "heist-thriller", name: "Heist Thriller" },
  { slug: "zombie-horror", name: "Zombie Horror" },
  { slug: "historical-crime", name: "Historical Crime" },
  { slug: "drama", name: "Drama" },
];
