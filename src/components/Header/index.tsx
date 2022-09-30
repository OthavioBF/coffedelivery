import {
  Container,
  Content,
  ButtonsContent,
  LocationButton,
  CartButton,
} from "./styles";
import { ShoppingCart, MapPin } from "phosphor-react";
import logo from "../../assets/LogoCoffe.svg";
import { theme } from "../../styles/theme";

export function Header() {
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
          </CartButton>
        </ButtonsContent>
      </Content>
    </Container>
  );
}
