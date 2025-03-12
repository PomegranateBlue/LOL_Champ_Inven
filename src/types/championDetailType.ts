import { ChampionList } from "./apiType";

export interface ChampionDetailInterface extends ChampionList {
  lore: string;
  enemytips: string[];
}
