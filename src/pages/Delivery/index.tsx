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
import { NavLink, useLocation } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

interface LocationParams {
  rua: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  payment: string;
}

export function Delivery() {
  const location = useLocation();

  const state = location.state as LocationParams;
  const { rua, numero, bairro, cidade, uf, payment } = state;

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
                  {`Entrega em ${rua}, ${numero} ${bairro} - ${cidade}, ${uf}`}
                </h1>
              </div>
              <div>
                <img src={clock} alt="" />
                <h1>
                  Previsão de entrega <br />
                  <span>20 min - 30 min</span>
                </h1>
              </div>
              <div>
                <img src={dolla} alt="" />
                <h1>
                  Pagamento na entrega <br />
                  <span>{payment}</span>
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
