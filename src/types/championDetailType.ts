export interface ChampionDetailInterface {
  id: string;
  name: string;
  title: string;
  image: {
    full: string;
    sprite: string;
  };
  info: string;
  blurb: string;
  tags: string[];
}
