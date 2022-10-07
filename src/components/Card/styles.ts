import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  height: 310px;
  padding: 0 20px;

  background: ${theme.colors.base_card};
  border-radius: 6px 36px;

  img {
    margin-top: -20px;
  }

  > div {
    display: flex;
    gap: 4px;

    p {
      margin-top: 0.75rem;
      padding: 4px 8px;

      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 0.625rem;
      line-height: 130%;

      background: ${theme.colors.yellow_light};
      color: ${theme.colors.yellow_dark};
      border-radius: 100px;
    }
  }

  h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    color: ${theme.colors.base_subtitle};
    margin-top: 1rem;
    margin-bottom: 8px;
  }

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${theme.colors.base_label};
    text-align: center;
  }
`;

export const PriceCartContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.375rem;
  margin-top: 33px;

  span {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 130%;
    color: ${theme.colors.base_text};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 4.5rem;
    height: 2.375rem;
    background: ${theme.colors.base_button};
    border-radius: 6px;
    margin-right: 0.5rem;
    margin-left: 1.438rem;

    button {
      border: none;
      background: ${theme.colors.base_button};
      cursor: pointer;

      &:hover svg {
        color: ${theme.colors.purple_dark};
      }
    }

    input {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 21px;
      border: none;
      color: ${theme.colors.base_title};
      /* background: ${theme.colors.base_button}; */
      outline: none;

      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
    }
  }
`;

export const Icon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background: ${theme.colors.purple_dark};
  border-radius: 6px;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.purple};
  }
`;
