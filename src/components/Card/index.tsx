import { Container, PriceCartContainer, Icon } from "./styles";
import { useNavigate } from "react-router-dom";
import { ShoppingCartSimple, Plus, Minus } from "phosphor-react";
import { theme } from "../../styles/theme";
import { Products } from "../../context/CartContext";

export function Card({
  id,
  image,
  title,
  subtitle,
  type,
  price,
  priceFormatted,
  amount,
}: Products) {
  const navigate = useNavigate();

  return (
    <Container>
      <img src={image} />
      <div>
        {type.map((item) => (
          <p key={`${id}-${type}`}>{item}</p>
        ))}
      </div>

      <h1>{title}</h1>
      <h2>{subtitle}</h2>

      <PriceCartContainer>
        <span>{priceFormatted}</span>

        <div>
          <button type="button">
            <Minus size={14} weight="bold" color={theme.colors.purple} />
          </button>

          <input type="number" readOnly value={amount} />

          <button type="button">
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
