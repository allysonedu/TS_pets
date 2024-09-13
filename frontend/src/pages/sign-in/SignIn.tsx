import React from 'react';
import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';
import { Input, Button } from '../../shared/components';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const signInForm = z.object({
  email: z
    .string({ message: 'E-mail é obrigatório' })
    .email('Digite um email válido'),
  password: z
    .string({ message: 'Senha é obrigatória' })
    .min(6, 'Mínimo de 6 caracteres'),
});

export type SignInForm = z.infer<typeof signInForm>;
export const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
  });
  const onSubmit = (data: SignInForm) => {
    console.log('Sign In:', data);
  };

  return (
    <Container>
      <Content>
        <img src={logo} alt="" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="email"
            label="Email"
            control={control}
            type="text"
            icon={FiMail}
            placeholder="Seu email"
          />
          <Input
            name="password"
            label="senha"
            control={control}
            type="password"
            icon={FiLock}
            placeholder="Sua senha"
          />
          <Button type="submit">Entrar</Button>
        </form>

        <a onClick={() => navigate('/sign-up')}>
          <FiLogIn />
          Cadastre-se
        </a>
      </Content>
    </Container>
  );
};
