import { createContext, useEffect, useState } from "react";
import { coffes } from "../coffes";

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

interface CartContextProviderProps {
  children: React.ReactNode;
}

interface CartContextProps {
  products: Products[];
  total: number;
  addItemCart: (id: number) => void;
  removeItemCart: (id: number) => void;
  removeOneItemCart: (id: number) => void;
  loadCoffes: () => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<Products[]>([]);
  const [total, setTotal] = useState(0);

  function loadCoffes() {
    setProducts(coffes);
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

    setProducts(addItem);
  }

  function removeItemCart(id: number) {
    const addItem = products.map((item) =>
      id === item.id
        ? {
            ...products,
            amount: item.amount - 1,
          }
        : { ...products }
    );

    setProducts(addItem);
  }

  function removeOneItemCart(id: number) {
    const removeItem = products.filter((item) => id !== item.id);
    console.log(removeItem);

    // setProducts([...products, removeItem]);
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
        addItemCart,
        removeItemCart,
        total,
        removeOneItemCart,
        loadCoffes,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
