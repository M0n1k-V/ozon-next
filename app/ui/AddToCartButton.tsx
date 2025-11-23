'use client'
import { Product } from "../models/product.model";
import { useCart } from "../providers/cartProvider";

export default function AddToCartButton({product}: {product: Product}) {
    const {addCartItem} = useCart()
    return (
        <button className="btn btn-primary" onClick={() => addCartItem(product)}>В корзину</button>
    )
}