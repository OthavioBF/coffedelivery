import { createContext, useEffect, useState } from "react";
import { coffes } from "../coffes";
import { formatPrice } from "../util/format";

export interface Products {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  price: number;
  priceFormatted?: string;
  type: string[];
  amount: number;
}

export interface CartProducts {
  id: number;
  title: string;
  image: string;
  price: number;
  priceFormatted?: string;
  amount: number;
}

interface CartContextProviderProps {
  children: React.ReactNode;
}

interface CartContextProps {
  products: Products[];
  cartProducts: CartProducts[];
  total: number;
  addItemCart: (product: CartProducts) => void;
  removeItemCart: (id: number) => void;
  removeOneItemCart: (id: number) => void;
  loadCoffes: () => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartProducts, setCartProducts] = useState<CartProducts[]>([]);
  const [products, setProducts] = useState<Products[]>([]);
  const [total, setTotal] = useState(0);

  function loadCoffes() {
    const dataFormatted = coffes.map((product: Products) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
      amount: 0,
    }));
    setProducts(dataFormatted);
  }

  function addItemCart(product: CartProducts) {
    const cartProductsIndex = cartProducts.findIndex(
      (p) => p.id === product.id
    );
    const productsIndex = products.findIndex((p) => p.id === product.id);

    products[productsIndex].amount += 1;

    if (cartProductsIndex === -1) {
      setCartProducts((state) => [...state, { ...product, amount: 1 }]);
    } else {
      const products = [...cartProducts];

      products[cartProductsIndex].amount += 1;

      setCartProducts(products);
    }
  }

  function removeItemCart(id: number) {
    const newCartProducts = [...cartProducts];
    const newProducts = [...products];

    const itemIndex = products.findIndex((p) => p.id === id);
    const productsIndex = products.findIndex((p) => p.id === id);

    newProducts[productsIndex].amount -= 1;

    newCartProducts[itemIndex].amount -= 1;

    setCartProducts(newCartProducts);
    setProducts(newProducts);
  }

  function removeOneItemCart(id: number) {
    const removeItem = cartProducts.filter((item) => id !== item.id);

    setCartProducts(removeItem);
  }

  useEffect(() => {
    loadCoffes();
  }, []);

  useEffect(() => {
    const response = coffes.reduce((acc, item) => {
      if (item.amount >= 1) {
        return (acc += 1);
      }

      return acc;
    }, 0);

    setTotal(response);
  }, [coffes]);

  return (
    <CartContext.Provider
      value={{
        products,
        cartProducts,
        total,
        addItemCart,
        removeItemCart,
        removeOneItemCart,
        loadCoffes,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
