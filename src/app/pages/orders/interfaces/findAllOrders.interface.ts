export interface FindAllOrdersInterface {
  cart_id: number;
  user_id: number;
  items: Item[];
}

interface Item {
  product_id: number;
  quantity: number;
}
