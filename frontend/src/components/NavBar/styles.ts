import styled from 'styled-components';
import { converterToRem } from '../../utils/converterToRem';

export const Nav = styled.nav`
  width: 100%;
  height: ${converterToRem(55)}rem;
  border-bottom: 2px solid var(--gray-200);
  padding: 0 ${converterToRem(20)}rem;
  display: flex;
  justify-content: space-between;

  .icons {
    padding: ${converterToRem(15)}rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      &:nth-child(1) {
        margin-left: ${converterToRem(75)}rem;
      }
      width: ${converterToRem(100)}rem;
      border-left: 1px solid var(--gray-200);
      &:nth-child(2) {
        border-right: 1px solid var(--gray-200);
      }
    }
  }
  img {
    height: ${converterToRem(40)}rem;
    width: ${converterToRem(40)}rem;
  }
`;
