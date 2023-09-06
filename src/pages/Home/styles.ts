import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  background: ${theme.colors.background};

  max-width: 70rem;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 50rem;
  }
`;

export const PresentationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 34rem;

  @media (max-width: 1024px) {
    height: 18rem;
  }
`;

export const PresentationContent = styled.div`
  display: flex;
  gap: 3.5rem;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }

  @media (max-width: 1024px) {
    img {
      width: 22rem;
      height: 16rem;
    }
  }
`;

export const PresentationText = styled.div`
  display: block;
  width: 36.75rem;
  h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${theme.colors.base_title};
  }

  h2 {
    font-family: ${theme.font_family.roboto};
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${theme.colors.base_subtitle};

    margin-top: 1rem;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.125rem;
    }
    width: 24rem;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 22.5px 40px;
  margin-top: 4.125rem;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 1024px) {
    p {
      font-size: 0.6rem;
    }
  }
`;

export const CoffesContainer = styled.div`
  width: 70rem;
  height: auto;
  padding-top: 32px;

  > h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: ${theme.colors.base_subtitle};
    margin-bottom: 3.375rem;
  }
`;

export const CoffesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem 2rem;
  margin-bottom: 9.813rem;
`;
