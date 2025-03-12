export interface ItemListInterface {
  name: string;
  plaintext: string;
  image: {
    full: string;
    sprite: string;
  };
}

export interface ItemDetailInterface extends ItemListInterface {
  gold: {
    base: number; // 제작 비용
    total: number; // 완성 비용
    sell: number; // 판매 비용
    purchasable: boolean; // 상점 구매 여부
  };
}
