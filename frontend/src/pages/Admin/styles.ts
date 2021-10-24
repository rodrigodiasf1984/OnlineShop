import styled from 'styled-components';
import { converterToRem } from '../../utils/converterToRem';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: ${converterToRem(100)}rem;

  @media (min-width: 768px) {
    padding-top: ${converterToRem(50)}rem;
  }
  @media (min-width: 1024px) {
    padding-top: ${converterToRem(80)}rem;
  }

  @media (min-width: 1280px) {
    padding-top: 0;
    margin-bottom: ${converterToRem(100)}rem;
  }

  .body {
    background: var(--gray-600);
    width: 95%;
    padding: ${converterToRem(20)}rem;
    padding-bottom: ${converterToRem(20)}rem;
    align-self: center;
    border-radius: ${converterToRem(16)}rem;
    max-width: ${converterToRem(600)}rem;
  }

  form {
    max-width: ${converterToRem(500)}rem;
    margin: 0 auto;
  }

  h1 {
    font-weight: 100;
    color: var(--gray-600);
    text-align: center;
    padding-bottom: ${converterToRem(10)}rem;
  }

  p {
    color: var(--shape);
  }

  p::before {
    display: inline;
    content: '⚠ ';
  }

  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid white;
    padding: ${converterToRem(10)}rem ${converterToRem(15)}rem;
    font-size: ${converterToRem(16)}rem;
  }

  label {
    text-align: left;
    display: block;
    margin-bottom: 4px;
    margin-top: ${converterToRem(10)}rem;
    color: white;
    font-size: ${converterToRem(16)}rem;
    font-weight: 200;
  }

  button {
    display: block;
    width: 100%;
    background: var(--red);
    border: none;
    margin-bottom: ${converterToRem(20)}rem;
    margin-top: ${converterToRem(30)}rem;
    text-transform: uppercase;
    padding: ${converterToRem(20)}rem;
    border-radius: 4px;
    color: var(--shape);
    padding: ${converterToRem(20)}rem;
    font-size: ${converterToRem(16)}rem;
    font-weight: 100;
    letter-spacing: ${converterToRem(10)}rem;
    transition: background 0.2s;
  }

  button:hover {
    opacity: 0.8;
  }
`;
