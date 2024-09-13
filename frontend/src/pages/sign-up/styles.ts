import { shade } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  img {
    width: 100px;
  }
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: ${({ theme }) => theme.text};
      margin-top: 24px;
      display: block;
      text-decoration: none;

      transition: color 0.2s;

      &:hover {
        ${({ theme }) => css`
          color: ${shade(0.2, theme.content)};
        `}
      }
    }
  }
`;
