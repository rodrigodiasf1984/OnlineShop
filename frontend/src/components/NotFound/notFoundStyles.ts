import styled from 'styled-components';
import { converterToRem } from 'utils/converterToRem';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--gray);
  min-height: 80vh;

  h2 {
    font-size: ${converterToRem(55)}rem;
  }

  p {
    font-size: ${converterToRem(20)}rem;
  }
`;
