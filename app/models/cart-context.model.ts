import { CartItem } from "./cart-item.model";
import { Product } from "./product.model";

export interface CartContextType {
  isOpen: boolean;
  cartItems: CartItem[];
  setOpen: (value: boolean) => void;
  addCartItem: (product: Product) => void;
  deleteCartItem: (product: Product) => void
}
