import styled from 'styled-components';
import { converterToRem } from 'utils/converterToRem';

export const Nav = styled.nav`
  height: ${converterToRem(70)}rem;
  background-color: var(--red);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;

  h2 {
    font-size: ${converterToRem(40)}rem;
  }
  a {
    text-decoration: none;
    color: var(--shape);
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  img {
    width: ${converterToRem(40)}rem;
    height: ${converterToRem(40)}rem;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${converterToRem(25)}rem;
    width: ${converterToRem(25)}rem;
    background: var(--shape);
    border-radius: 50%;
    font-size: ${converterToRem(14)}rem;
    font-weight: 700;
    color: black;
    margin: ${converterToRem(5)}rem;
  }
`;
