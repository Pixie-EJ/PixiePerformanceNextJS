import { useRouter } from 'next/router';
import React from 'react';
import { Button, Container, Form, Header } from './styles';
// import Logo from './Logo Principal.png'


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
      <div>
        <Form>
          <label htmlFor="email">Endereço de e-mail</label>
          <input id="email" type="email" placeholder={'Digite seu e-mail'}/>
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" placeholder={'**********'}/>
          <Button onClick={handleClick}> Entrar na plataforma</Button>
          <a href="">Esqueceu sua senha?</a>
          <a href="">Não possui conta ? Crie uma agora!</a>
        </Form>
      </div>

    </Container>
  );
}