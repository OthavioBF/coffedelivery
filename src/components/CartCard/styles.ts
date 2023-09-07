import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  padding: 8px 4px;

  width: 368px;
  height: 104px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${theme.colors.base_button};

  img {
    width: 4rem;
    height: 4rem;
  }
  > div {
    display: block;
    margin-right: 50px;
    margin-left: 20px;
    h1 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: ${theme.colors.base_subtitle};
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  height: 2rem;
  gap: 8px;
  margin-top: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 4.5rem;
    height: 2rem;
    background: ${theme.colors.base_button};
    border-radius: 6px;

    button {
      border: none;
      background: ${theme.colors.base_button};
      cursor: pointer;

      &:hover svg {
        color: ${theme.colors.purple_dark};
      }
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 21px;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    width: 5.688rem;
    height: 2rem;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 160%;
    color: ${theme.colors.base_text};

    background: ${theme.colors.base_button};
    border-radius: 6px;
    border: none;
    cursor: pointer;

    &:hover {
      background: ${theme.colors.base_hover};
    }
  }
`;

export const PriceContainer = styled.div``;
