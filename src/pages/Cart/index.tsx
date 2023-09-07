import { useForm } from "react-hook-form";
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

import { Header } from "../../components/Header";
import { CartCard } from "../../components/CartCard";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { formatPrice } from "../../util/format";

interface Form {
  cep: number;
  rua: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  payment: string[];
}

export function Cart() {
  const [payment, setPayment] = useState<string[]>([""]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalValueItems, setTotalValueItens] = useState("");
  const [valueWithShipping, setValueWithShipping] = useState("");
  const { cartProducts } = useContext(CartContext);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<Form>();

  function confirmPurchase(data: Form) {
    console.log(data);

    navigate("delivery", {
      state: { ...data, payment },
    });
  }

  useEffect(() => {
    if (cartProducts.length > 0) {
      const totalValue = cartProducts
        .filter((product) => product.amount >= 1)
        .map((product) => {
          if (product.amount > 0) return product.amount * product.price;
          else return 0;
        })
        .reduce((total, currentValue) => total + currentValue, 0);

      setTotalItems(totalValue);
      setTotalValueItens(formatPrice(totalValue));
      setValueWithShipping(formatPrice(totalValue + 3.5));
    }
  }, [cartProducts]);

  return (
    <Container>
      <Header />
      <Content onSubmit={handleSubmit(confirmPurchase)}>
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
              <footer>
                <input
                  type="number"
                  style={{ width: 200 }}
                  placeholder="CEP"
                  {...register("cep")}
                />
                <input type="text" placeholder="Rua" {...register("rua")} />
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
                  <input
                    type="text"
                    style={{ width: 60 }}
                    placeholder="UF"
                    {...register("uf")}
                  />
                </div>
              </footer>
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
            <PaymentButtons
              type="multiple"
              value={payment}
              onValueChange={setPayment}
            >
              <Button
                value="CARTÃO DE
                CRÉDITO"
              >
                <CreditCard size={16} color={theme.colors.purple} /> CARTÃO DE
                CRÉDITO
              </Button>
              <Button value="CARTÃO DE DÉBITO">
                <Bank size={16} color={theme.colors.purple} /> CARTÃO DE DÉBITO
              </Button>
              <Button value="DINHEIRO">
                <Money size={16} color={theme.colors.purple} /> DINHEIRO
              </Button>
            </PaymentButtons>
          </PaymentContainer>
        </FormContainer>

        <CoffesContainer>
          <h1>Cafés selecionados</h1>
          <CoffesContent>
            {cartProducts.map((product) => (
              <CartCard key={product.id} data={product} />
            ))}

            <div>
              <h1>Total de itens</h1>
              <h2>{totalValueItems}</h2>
            </div>
            <div>
              <h1>Entrega</h1>
              <h2>R$ 3,50</h2>
            </div>
            <Total>
              <h1>Total</h1>
              <h2>{valueWithShipping}</h2>
            </Total>

            <button type="submit">CONFIRMAR PEDIDO</button>
          </CoffesContent>
        </CoffesContainer>
      </Content>
      <NavLink to="/">Retornar para pagina principal</NavLink>
    </Container>
  );
}
