import { useForm, SubmitHandler } from "react-hook-form";
import {
  Container,
  Content,
  FormContainer,
  RequestContainer,
  AdressContainer,
  AdressTitle,
  PaymentContainer,
  PaymentTitle,
  PaymentButtons,
  CoffesContainer,
  CoffesContent,
  Total,
  Button,
} from "./styles";
import {
  CurrencyDollar,
  MapPinLine,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";
import { theme } from "../../styles/theme";
import image from "../../assets/CardCoffeImages/image.png";

import { Header } from "../../components/Header";
import { CartCard } from "../../components/CartCard";

interface Form {
  cep: number;
  rua: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

export function Cart() {
  const { register, handleSubmit } = useForm<Form>();
  const onSubmit: SubmitHandler<Form> = (data) => console.log(data);
  return (
    <Container>
      <Header />
      <Content>
        <FormContainer>
          <RequestContainer>
            <h1>Complete seu pedido</h1>
            <AdressContainer>
              <AdressTitle>
                <MapPinLine size={20} color={theme.colors.yellow_dark} />
                <div>
                  <h1>Endereço de Entrega</h1>{" "}
                  <h2>Informe o endereço onde deseja receber seu pedido</h2>
                </div>
              </AdressTitle>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="number"
                  style={{ width: 200 }}
                  placeholder="CEP"
                  {...register("cep")}
                />
                <input type="text" placeholder="Rua" />
                Rua{" "}
                <div>
                  <input
                    type="number"
                    style={{ width: 200 }}
                    placeholder="Numero"
                    {...register("numero")}
                  />
                  <input
                    type="text"
                    style={{ width: 348 }}
                    placeholder="Complemento"
                    {...register("complemento")}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    style={{ width: 200 }}
                    placeholder="Bairro"
                    {...register("bairro")}
                  />
                  <input
                    type="text"
                    style={{ width: 276 }}
                    placeholder="Cidade"
                    {...register("cidade")}
                  />
                  <input type="text" style={{ width: 60 }} placeholder="UF" />
                </div>
              </form>
            </AdressContainer>
          </RequestContainer>

          <PaymentContainer>
            <PaymentTitle>
              <CurrencyDollar size={22} color={theme.colors.purple} />
              <div>
                <h1>Pagamento</h1>
                <h2>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </h2>
              </div>
            </PaymentTitle>
            <PaymentButtons type="multiple">
              <Button value="0">
                <CreditCard size={16} color={theme.colors.purple} /> CARTÃO DE
                CRÉDITO
              </Button>
              <Button value="1">
                <Bank size={16} color={theme.colors.purple} /> CARTÃO DE DÉBITO
              </Button>
              <Button value="2">
                <Money size={16} color={theme.colors.purple} /> DINHEIRO
              </Button>
            </PaymentButtons>
          </PaymentContainer>
        </FormContainer>

        <CoffesContainer>
          <h1>Cafés selecionados</h1>
          <CoffesContent>
            <CartCard
              id={1}
              image={image}
              amount="2"
              title="Expresso Tradicional"
              price="9,90"
            />
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
          </CoffesContent>
        </CoffesContainer>
      </Content>
    </Container>
  );
}
