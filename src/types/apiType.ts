export interface ChampionList {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
    sprite: string;
  };
}

export interface ChampionDetail extends ChampionList {
  lore: string;
  enemytips: string[];
}
//API에서 통째로 불러올때 사용할 데이터의 인터페이스
export interface DataInterface {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: ChampionList;
  };
}
