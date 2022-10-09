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
  addItemCart: (id: number) => void;
  removeItemCart: (id: number) => void;
  removeOneItemCart: (id: number) => void;
  loadCoffes: () => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<Products[]>([]);
  const [cartProducts, setCartProducts] = useState<CartProducts[]>([]);
  const [total, setTotal] = useState(0);

  function loadCoffes() {
    const dataFormatted = coffes.map((product: Products) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
      amount: 0,
    }));
    setProducts(dataFormatted);
  }

  function addItemCart(id: number) {
    const addItem = products.map((item) =>
      id === item.id
        ? {
            ...products,
            amount: item.amount + 1,
          }
        : { ...products }
    );

    setCartProducts(addItem);
  }

  function removeItemCart(id: number) {
    const removeItem = products.map((item) =>
      id === item.id
        ? {
            ...products,
            amount: item.amount - 1,
          }
        : { ...products }
    );

    setProducts(removeItem);
  }

  function removeOneItemCart(id: number) {
    const removeItem = cartProducts.filter((item) => id !== item.id);
    console.log(removeItem);

    setCartProducts([...cartProducts, removeItem]);
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
