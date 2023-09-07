import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  background: ${theme.colors.background};
  max-width: 70rem;
  margin: 0 auto;

  margin-bottom: 2rem;
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

  @media (max-width: 1024px) {
    max-width: 50rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-end;

  gap: 6.375rem;
  margin-top: 1rem;

  > img {
    width: 492px;
    height: 293px;
  }

  > div {
    h1 {
      font-family: "Baloo 2";
      font-style: normal;
      font-weight: 800;
      font-size: 2rem;
      line-height: 130%;
      color: ${theme.colors.yellow_dark};
    }

    h2 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 130%;
      color: ${theme.colors.base_subtitle};
      margin-bottom: 2.5rem;
    }
  }

  @media (max-width: 1024px) {
    > img {
      width: 246px;
      height: 147px;
    }

    > div {
      h1 {
        font-size: 1.5rem;
      }

      h2 {
        font-size: 1rem;
      }
    }
  }
`;

export const DeliveryContainer = styled.div`
  display: block;
`;

export const LinearGradient = styled.div`
  padding: 1px;
  background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);

  border-radius: 6px 36px;
`;

export const DeliveryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 2.5rem;
  width: 32.875rem;
  height: 16.875rem;
  background: ${theme.colors.background};

  border-radius: 6px 36px;
  > div {
    display: flex;
    align-items: center;
    gap: 0 0.75rem;

    h1 {
      display: block;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: ${theme.colors.base_text};
    }
  }

  @media (max-width: 1024px) {
    width: auto;
    height: 15rem;

    > div {
      h1 {
        font-size: 0.875rem;
      }
    }
  }
`;
