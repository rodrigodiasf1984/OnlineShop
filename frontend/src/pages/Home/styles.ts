import styled from 'styled-components';
import { converterToRem } from '../../utils/converterToRem';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .pagination {
    border-top: 1px solid var(--gray-200);
    border-bottom: 1px solid var(--gray-200);
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
    }
    li {
      padding: 0 10px;
    }
  }
`;

export const Selects = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 ${converterToRem(20)}rem;
  gap: 0.5rem;
  height: 100%;
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

export const ProductContent = styled.div`
  min-height: calc(100vh - 392px);
  @media (min-height: 1275px) {
    height: calc(100vh - 392px);
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px var(--gray-200) solid;
  min-width: ${converterToRem(100)}rem;
  width: 100%;
  text-align: center;
  box-shadow: 0px 8px 8px #00000029;
  border-radius: 1rem;

  .favorite {
    width: ${converterToRem(30)}rem;
    height: ${converterToRem(30)}rem;
    align-self: flex-end;
    margin-right: ${converterToRem(10)}rem;
    margin-top: ${converterToRem(10)}rem;
    background: var(--shape);
    border: 1px solid #eee;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    display: flex;

    img {
      width: ${converterToRem(20)}rem;
      height: ${converterToRem(20)}rem;
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
  p {
    font-size: ${converterToRem(16)}rem;
    font-weight: bold;
    word-wrap: break-word;
    padding: 0 4px;
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
