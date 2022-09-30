import { Container, Type, PriceCartContainer, Icon } from "./styles";
import { useNavigate } from "react-router-dom";
import { ShoppingCartSimple, Plus, Minus } from "phosphor-react";
import { theme } from "../../styles/theme";

interface CardProps {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  type: string;
  price: string;
  amount: number;
}

export function Card({
  id,
  image,
  title,
  subtitle,
  type,
  price,
  amount,
}: CardProps) {
  const navigate = useNavigate();

  function removeItemCart(id: number) {}

  function addItemCart(id: number) {}

  return (
    <Container>
      <img src={image} />
      <Type>{type}</Type>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>

      <PriceCartContainer>
        <span>{price}</span>

        <div>
          <button type="button" onClick={() => removeItemCart(id)}>
            <Minus size={14} weight="bold" color={theme.colors.purple} />
          </button>

          <input type="number" readOnly value={amount} />

          <button type="button" onClick={() => addItemCart(id)}>
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
