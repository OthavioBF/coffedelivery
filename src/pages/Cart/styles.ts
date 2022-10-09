import styled from "styled-components";
import { theme } from "../../styles/theme";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export const Container = styled.div`
  background: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    background: ${theme.colors.purple};

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${theme.colors.white};

    text-decoration: none;
    border-radius: 6px;
    margin-top: 3rem;
    padding: 0 10px;
  }
`;

export const Content = styled.form`
  display: flex;
  margin-top: 2.5rem;
  gap: 2rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const RequestContainer = styled.div`
  width: 40rem;
  height: auto;
  background: ${theme.colors.background};

  h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    color: ${theme.colors.base_subtitle};
  }
`;

export const AdressContainer = styled.div`
  padding: 2.5rem;
  background: ${theme.colors.base_card};
  margin-top: 1rem;
  border-radius: 6px;

  footer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    input {
      background: ${theme.colors.base_input};
      height: 2.625rem;
      border: 1px solid ${theme.colors.base_button};
      border-radius: 4px;
      transition: all ease-in-out 0.2s;
      outline: none;
      padding: 0.75rem;

      &:focus {
        border: 1px solid ${theme.colors.yellow_dark};
      }

      &::placeholder {
        color: ${theme.colors.base_label};
      }
    }

    div {
      display: flex;
      gap: 0 0.75rem;
    }
  }
`;

export const AdressTitle = styled.header`
  display: flex;
  gap: 0.75rem;

  div {
    width: 100%;
    h1 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: ${theme.colors.base_subtitle};
    }

    h2 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;
      color: ${theme.colors.base_text};
    }
  }
`;

export const PaymentContainer = styled.div`
  background: ${theme.colors.base_card};
  padding: 2.5rem;
  border-radius: 6px;
`;

export const PaymentTitle = styled.div`
  display: flex;
  gap: 0.8rem;

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${theme.colors.base_subtitle};
  }
  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${theme.colors.base_text};
  }
`;

export const PaymentButtons = styled(ToggleGroup.Root)`
  display: flex;
  gap: 0 0.75rem;
  margin-top: 2rem;
`;

export const Button = styled(ToggleGroup.Item)`
  display: flex;
  align-items: center;
  gap: 0 0.75rem;
  width: 178.67px;
  padding: 1rem;
  border: 1px solid ${theme.colors.base_button};
  border-radius: 6px;
  background: ${theme.colors.base_button};
  cursor: pointer;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;

  &:hover {
    background: ${theme.colors.base_hover};
  }

  &:focus {
    border: 1px solid ${theme.colors.purple};
    background: ${theme.colors.purple_light};
  }
`;

export const CoffesContainer = styled.div`
  h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    color: ${theme.colors.base_subtitle};
  }
`;

export const CoffesContent = styled.div`
  width: 28rem;
  height: auto;
  padding: 2.5rem;
  margin-top: 1rem;
  background: ${theme.colors.base_card};
  border-radius: 6px 44px;

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 0.75rem;
    h1 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;
    }
    h2 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
    }
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    width: 368px;
    height: 46px;

    color: ${theme.colors.white};
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;

    background: ${theme.colors.yellow};
    border-radius: 6px;
    border: none;
    cursor: pointer;

    &:hover {
      background: ${theme.colors.yellow_dark};
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.75rem;
  margin-bottom: 2rem;
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    color: ${theme.colors.base_subtitle};
  }

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    color: ${theme.colors.base_subtitle};
  }
`;
