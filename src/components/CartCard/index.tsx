import { Container, ButtonsContainer, PriceContainer } from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";
import { theme } from "../../styles/theme";
import { useContext } from "react";
import { CartContext, CartProducts } from "../../context/CartContext";

interface Cart {
  data: CartProducts;
}

export function CartCard({ data }: Cart) {
  const { removeOneItemCart, addItemCart, removeItemCart } =
    useContext(CartContext);

  return (
    <Container>
      <img src={data.image} />
      <div>
        <h1>{data.title}</h1>
        <ButtonsContainer>
          <div>
            <button
              type="button"
              onClick={() => removeItemCart(data.id)}
              disabled={data.amount === 0}
            >
              <Minus size={14} weight="bold" color={theme.colors.purple} />
            </button>

            <div>{data.amount}</div>

            <button type="button" onClick={() => addItemCart(data)}>
              <Plus size={14} weight="bold" color={theme.colors.purple} />
            </button>
          </div>

          <button onClick={() => removeOneItemCart(data.id)}>
            <Trash size={16} color={theme.colors.purple} /> REMOVER
          </button>
        </ButtonsContainer>
      </div>

      <PriceContainer>
        <span>{data.priceFormatted}</span>
      </PriceContainer>
    </Container>
  );
}
