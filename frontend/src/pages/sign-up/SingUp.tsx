import React from 'react';
import { Container, Content } from './styles';
import { Input, Button } from '../../shared/components';
import { useForm } from 'react-hook-form';
import { phoneFormat } from '../../shared/utils';
import logo from '../../assets/logo.svg';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FiEdit, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const signUpForm = z.object({
  name: z.string({ message: 'Nome é obrigatório' }),
  email: z
    .string({ message: 'Email válido é obrigatório' })
    .email('Formato de email inválido'),
  whatsapp: z.string({ message: 'Whatsapp é obrigatório' }),
});

export type SignUpForm = z.infer<typeof signUpForm>;

export const SignUp: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpForm),
  });
  async function onSubmit(data: SignUpForm) {
    try {
      console.log(data);
    } catch (e) {
      console.error(e);
      alert('Houve um erro ao cadastrar, tente novamente');
    }
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="Pets" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Faça seu Cadastro</h1>
          <Input
            label="Nome"
            name="name"
            placeholder="Digite aqui seu nome"
            icon={FiEdit}
            control={control}
          />
          <Input
            label="E-mail"
            icon={FiMail}
            placeholder="Digite seu email"
            name="email"
            control={control}
          />
          <Input
            label="Whatsapp"
            icon={FaWhatsapp}
            placeholder="Digite aqui seu whatsapp"
            name="whatsapp"
            mask={phoneFormat}
            control={control}
            maxLength={15}
          />
          <Button disabled={isSubmitting} type="submit">
            Cadastrar
          </Button>
        </form>
      </Content>
    </Container>
  );
};
