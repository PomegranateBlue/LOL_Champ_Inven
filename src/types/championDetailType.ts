import { ChampionList } from "./apiType";

export interface ChampionDetailInterface extends ChampionList {
  blurb: string;
  enemytips: string[];
}
