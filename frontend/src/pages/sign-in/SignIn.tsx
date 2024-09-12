import React from 'react';
import { Container } from './styles';

export const SignIn: React.FC = () => {
  return (
    <Container>
      <h1>Faça seu login</h1>
      <input type="text" placeholder="email" />
      <input type="password" placeholder="senha" />
      <button>login</button>
    </Container>
  );
};
