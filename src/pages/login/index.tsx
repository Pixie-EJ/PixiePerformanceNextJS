import PixieButton from '@components/PixieButton';
import PixieInput from '@components/PixieInput';
import { useRouter } from 'next/router';
import React from 'react';
import { Container, Form, Header, LinkText } from './styles';
import { Envelope, Lock } from 'phosphor-react';

export default function Login() {
  const route = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    route.push("home");
  }

  return (
    <Container>
      <Header>
          <img src='./Logo Principal.png'/>
          <h2>Bem vindo(a) a Pixie!</h2>
          <p>Faça login e comece a usar</p>
      </Header>

      <Form>
        <PixieInput 
          label='Endereço de e-mail'
          placeholder='Digite seu e-mail'
          icon={<Envelope size={22} />}
        />

        <PixieInput 
          label='Senha'
          placeholder='*******'
          icon={<Lock size={22} />}
        />

        <PixieButton onClick={(e) => handleClick(e)} buttonType='light'>Entrar na plataforma</PixieButton>
      </Form>
      
      <LinkText href="">Esqueceu sua senha?</LinkText>
      <LinkText href="">Não possui conta ? Crie uma agora!</LinkText>
    </Container>
  );
}