import { Header } from "../../components/Header";
import { Card } from "../../components/Card";

import coffe from "../../assets/presentation/coffe.png";
import image from "../../assets/CardCoffeImages/image.png";
import cart from "../../assets/cart.svg";
import box from "../../assets/box.svg";
import clock from "../../assets/clock.svg";
import cup from "../../assets/cup.svg";

import {
  Container,
  PresentationContainer,
  PresentationContent,
  PresentationText,
  IconsContainer,
  Icons,
  CoffesContainer,
  CoffesContent,
} from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      <PresentationContainer>
        <PresentationContent>
          <PresentationText>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>

            <IconsContainer>
              <Icons>
                <img src={cart} />
                <p>Compra simples e segura</p>
              </Icons>
              <Icons>
                <img src={box} />
                <p>Embalagem mantém o café intacto</p>
              </Icons>
              <Icons>
                <img src={clock} />
                <p>Entrega rápida e rastreada</p>
              </Icons>
              <Icons>
                <img src={cup} />
                <p>O café chega fresquinho até você</p>
              </Icons>
            </IconsContainer>
          </PresentationText>
          <img src={coffe} />
        </PresentationContent>
      </PresentationContainer>

      <CoffesContainer>
        <h1>Nossos cafés</h1>

        <CoffesContent>
          <Card
            id={1}
            image={image}
            title="Expresso Tradicional"
            subtitle="O tradicional café feito com água quente e grãos moídos"
            type="TRADICIONAL"
            price="R$ 9,90"
            amount={1}
          />
        </CoffesContent>
      </CoffesContainer>
    </Container>
  );
}
