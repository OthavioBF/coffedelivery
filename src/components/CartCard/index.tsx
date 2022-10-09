import { Container, ButtonsContainer, PriceContainer } from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";
import { theme } from "../../styles/theme";
import { useContext } from "react";
import { CartContext, CartProducts } from "../../context/CartContext";

export function CartCard({ id, image, title, amount, price }: CartProducts) {
  const { removeOneItemCart, addItemCart, removeItemCart } =
    useContext(CartContext);

  function addItem(id: number) {
    addItemCart(id);
  }

  function removeOneItem(id: number) {
    removeOneItemCart(id);
  }

  function removeItem(id: number) {
    removeItemCart(id);
  }

  return (
    <Container>
      <img src={image} />
      <div>
        <h1>{title}</h1>
        <ButtonsContainer>
          <div>
            <button type="button" onClick={() => removeItem(id)}>
              <Minus size={14} weight="bold" color={theme.colors.purple} />
            </button>

            <input type="number" readOnly value={amount} />

            <button type="button" onClick={() => addItem(id)}>
              <Plus size={14} weight="bold" color={theme.colors.purple} />
            </button>
          </div>

          <button onClick={() => removeOneItem(id)}>
            <Trash size={16} color={theme.colors.purple} /> REMOVER
          </button>
        </ButtonsContainer>
      </div>

      <PriceContainer>
        <span>{price}</span>
      </PriceContainer>
    </Container>
  );
}
