import { Container, ButtonsContainer, PriceContainer } from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";
import { theme } from "../../styles/theme";

interface CartCardProps {
  id: number;
  image: string;
  title: string;
  amount: string;
  price: string;
}

export function CartCard({ id, image, title, amount, price }: CartCardProps) {
  return (
    <Container>
      <img src={image} />
      <div>
        <h1>{title}</h1>
        <ButtonsContainer>
          <div>
            <button type="button">
              <Minus size={14} weight="bold" color={theme.colors.purple} />
            </button>

            <input type="number" readOnly value={amount} />

            <button type="button">
              <Plus size={14} weight="bold" color={theme.colors.purple} />
            </button>
          </div>

          <button>
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
