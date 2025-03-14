export interface ItemData {
  [key: string]: Item;
}
export interface Item {
  name: string;
  description: string;
  plaintext: string;
  image: Image;
  gold: Gold;
  maps: { [key: string]: boolean };
  stats: { [key: string]: number };
  inStore?: boolean;
  effect?: string;
}

export interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Gold {
  base: number;
  total: number;
  sell: number;
  purchasable: boolean;
}
