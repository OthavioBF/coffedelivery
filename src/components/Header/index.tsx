import { useContext } from "react";
import {
  Container,
  Content,
  ButtonsContent,
  LocationButton,
  CartButton,
  TotalCart,
} from "./styles";
import { ShoppingCart, MapPin } from "phosphor-react";
import { theme } from "../../styles/theme";
import logo from "../../assets/LogoCoffe.svg";
import { CartContext } from "../../context/CartContext";

export function Header() {
  const { total } = useContext(CartContext);
  return (
    <Container>
      <Content>
        <img src={logo} />
        <ButtonsContent>
          <LocationButton>
            <MapPin size={24} weight="fill" /> Porto Alegre, RS
          </LocationButton>
          <CartButton>
            <ShoppingCart
              size={22}
              color={theme.colors.yellow_dark}
              weight="fill"
            />
            {total > 0 && <TotalCart>{total}</TotalCart>}
          </CartButton>
        </ButtonsContent>
      </Content>
    </Container>
  );
}
