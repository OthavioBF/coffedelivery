import { Container, PriceCartContainer, Icon } from "./styles";
import { useNavigate } from "react-router-dom";
import { ShoppingCartSimple, Plus, Minus } from "phosphor-react";
import { theme } from "../../styles/theme";
import { CartContext, Products } from "../../context/CartContext";
import { useContext } from "react";

interface Card {
  data: Products;
}

export function Card({ data }: Card) {
  const { addItemCart, removeItemCart } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <Container>
      <img src={data.image} />
      <div>
        {data.type.map((item) => (
          <p key={`${data.id}-${data.type}`}>{item}</p>
        ))}
      </div>

      <h1>{data.title}</h1>
      <h2>{data.subtitle}</h2>

      <PriceCartContainer>
        <span>{data.priceFormatted}</span>

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

        <Icon onClick={() => navigate("/cart")} type="button">
          <ShoppingCartSimple
            size={22}
            weight="fill"
            color={theme.colors.background}
          />
        </Icon>
      </PriceCartContainer>
    </Container>
  );
}
