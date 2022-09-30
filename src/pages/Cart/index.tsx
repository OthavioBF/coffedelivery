import { Header } from "../../components/Header";
import {
  Container,
  Content,
  RequestContainer,
  AdressContainer,
  AdressTitle,
  PaymentContainer,
  PaymentTitle,
  PaymentButtons,
  CoffesContainer,
  Total,
} from "./styles";
import {
  CurrencyDollar,
  MapPinLine,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { theme } from "../../styles/theme";
import image from "../../assets/CardCoffeImages/image.png";

import { CartCard } from "../../components/CartCard";

export function Cart() {
  return (
    <Container>
      <Header />
      <Content>
        <RequestContainer>
          <h1>Complete seu pedido</h1>
          <AdressContainer>
            <AdressTitle>
              <MapPinLine />
              <h1>Endereço de Entrega</h1>{" "}
              <h2>Informe o endereço onde deseja receber seu pedido</h2>
              <form>
                <input type="text" />
                <input type="text" />
                <div>
                  <input type="text" />
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                </div>
              </form>
            </AdressTitle>
          </AdressContainer>
          <PaymentContainer>
            <PaymentTitle>
              <CurrencyDollar />
              <div>
                <h1>Pagamento</h1>
                <h2>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar8
                </h2>
              </div>
            </PaymentTitle>
            <PaymentButtons>
              <ToggleGroup.Item value="0">
                <CreditCard size={16} color={theme.colors.purple} /> CARTÃO DE
                CRÉDITO
              </ToggleGroup.Item>
              <ToggleGroup.Item value="1">
                <Bank size={16} color={theme.colors.purple} /> CARTÃO DE DÉBITO
              </ToggleGroup.Item>
              <ToggleGroup.Item value="2">
                <Money size={16} color={theme.colors.purple} /> DINHEIRO
              </ToggleGroup.Item>
            </PaymentButtons>
          </PaymentContainer>
        </RequestContainer>

        <CoffesContainer>
          <h1>Cafés selecionados</h1>
          <CoffesContainer>
            <CartCard
              id={1}
              image={image}
              amount="2"
              title="Expresso Tradicional"
              price="9,90"
            />

            <div>
              <h1>Total de itens</h1>
              <h2>R$ 29,70</h2>
            </div>
            <div>
              <h1>Total de itens</h1>
              <h2>R$ 29,70</h2>
            </div>
            <Total>
              <h1>Total</h1>
              <h2>R$ 29,70</h2>
            </Total>

            <button type="button">CONFIRMAR PEDIDO</button>
          </CoffesContainer>
        </CoffesContainer>
      </Content>
    </Container>
  );
}
