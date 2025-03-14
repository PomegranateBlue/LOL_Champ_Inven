export interface ChampionData {
  [key: string]: Champion;
}

export interface Champion {
  version: Version;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: Info;
  image: Image;
  tags: Tag[];
}

export interface ChampionDetail {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
  };
  blurb: string;
  passive: {
    name: string;
    description: string;
    image: {
      full: string;
    };
  };
}

export interface Info {
  attack: string;
  defense: string;
  magic: number;
  difficulty: number;
}

export interface Image {
  full: string;
  sprite: string;
  group: string;
}

export enum Tag {
  Assassin = "Assassin",
  Fighter = "Fighter",
  Mage = "Mage",
  Marksman = "Marksman",
  Support = "Support",
  Tank = "Tank",
}

export enum Version {
  The1551 = "15.5.1",
}
export interface Gold {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
}
