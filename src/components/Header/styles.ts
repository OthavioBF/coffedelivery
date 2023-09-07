import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.header`
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 70rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonsContent = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const LocationButton = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 7.5px;
  width: 100%;
  height: 2.375rem;
  padding: 8px;
  border: none;
  border-radius: 6px;
  outline: none;
  background: ${theme.colors.purple_light};
  color: ${theme.colors.purple};
  font-family: ${theme.font_family.roboto};
  font-weight: regular;
  font-size: 0.875rem;
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 38px;
  height: 38px;
  background: #f1e9c9;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

export const TotalCart = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  background: ${theme.colors.yellow_dark};
  position: absolute;
  top: -8px;
  right: -8.35px;
  border-radius: 100%;
  color: ${theme.colors.white};
  font-size: 12px;
  font-weight: 700;
`;
