import { Header } from "../../components/Header";
import {
  Container,
  Content,
  DeliveryContainer,
  DeliveryContent,
  LinearGradient,
} from "./styles";
import bike from "../../assets/Illustration.png";
import local from "../../assets/local.svg";
import clock from "../../assets/clock.svg";
import dolla from "../../assets/dolla.svg";
import { NavLink } from "react-router-dom";

export function Delivery() {
  return (
    <Container>
      <Header />
      <Content>
        <DeliveryContainer>
          <div>
            <h1>Uhu! Pedido confirmado</h1>
            <h2>Agora é só aguardar que logo o café chegará até você</h2>
          </div>
          <LinearGradient>
            <DeliveryContent>
              <div>
                <img src={local} alt="" />
                <h1>
                  Entrega em Rua João Daniel Martinelli, 102Farrapos - Porto
                  Alegre, RS
                </h1>
              </div>
              <div>
                <img src={clock} alt="" />
                <h1>
                  Previsão de entrega <span>20 min - 30 min</span>
                </h1>
              </div>
              <div>
                <img src={dolla} alt="" />
                <h1>
                  Pagamento na entrega <span>Cartão de Crédito</span>
                </h1>
              </div>
            </DeliveryContent>
          </LinearGradient>
        </DeliveryContainer>

        <img src={bike} />
      </Content>

      <NavLink to="/">Retornar para pagina principal</NavLink>
    </Container>
  );
}
