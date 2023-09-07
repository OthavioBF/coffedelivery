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
import { useNavigate } from "react-router-dom";

export function Header() {
  const { cartProducts } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <img src={logo} />
        <ButtonsContent>
          <LocationButton>
            <MapPin size={24} weight="fill" /> Porto Alegre, RS
          </LocationButton>
          <CartButton onClick={() => navigate("/cart")}>
            <ShoppingCart
              size={22}
              color={theme.colors.yellow_dark}
              weight="fill"
            />
            {cartProducts.length > 0 && (
              <TotalCart>{cartProducts.length}</TotalCart>
            )}
          </CartButton>
        </ButtonsContent>
      </Content>
    </Container>
  );
}
