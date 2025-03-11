export interface Champion {
  id: string;
  key: string;
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
export interface DataInterface {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: Champion; // 여러 챔피언을 포함하는 객체
  };
}
