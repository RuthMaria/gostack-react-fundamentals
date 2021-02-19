import styled, { css } from 'styled-components';
import { shade } from 'polished'; // usado para escurecer uma cor

interface FormPropos {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

// recebe uma propriedade do componente
export const Form = styled.form<FormPropos>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1; // ocupa todo o espaço disponível
    height: 70px;
    border-radius: 5px 0 0 5px;
    padding: 0 24px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}
    // o '&' referencia o próprio elemento, equivale ao input::placeholder
    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background-color: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    // equivale ao button:hover
    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  color: #c53030;
  display: block;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #ffffff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    // equivalente ao 'a + a', aplicado a partir do segundo 'a'
    & + a {
      margin-top: 16px;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    // os icones sempre são em svg
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
