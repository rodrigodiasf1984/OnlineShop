import styled from 'styled-components';
import { converterToRem } from '../../utils/converterToRem';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: ${converterToRem(20)}rem;
  text-align: center;
  border-bottom: 1px solid var(--gray-200);

  h1 {
    padding-top: ${converterToRem(10)}rem;
    font-weight: bold;
  }
`;

export const ProductList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  align-content: center;
  padding: 20px;

  @media (min-width: 414px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 809px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px var(--gray-200) solid;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 8px #00000029;
  border-radius: 1rem;

  .favorite {
    width: ${converterToRem(20)}rem;
    height: ${converterToRem(20)}rem;
    align-self: flex-end;
    z-index: 99;
    margin-right: ${converterToRem(10)}rem;
    margin-top: ${converterToRem(10)}rem;
  }

  img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
  p {
    font-size: ${converterToRem(16)}rem;
    font-weight: bold;
  }
  span {
    color: var(--gray-500);
  }

  @media (min-width: 809px) {
    img {
      width: 100%;
    }
  }
`;
