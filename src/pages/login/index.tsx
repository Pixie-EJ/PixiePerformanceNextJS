import PixieInput from '@components/PixieInput';
import { useRouter } from 'next/router';
import React from 'react';
import { Button, Container, Form, Header } from './styles';
// import Logo from './Logo Principal.png'

// TODO dar uma olhada melhor em como refatorar esse cara aq

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
          {/* <label htmlFor="email">Endereço de e-mail</label>
          <input id="email" type="email" placeholder={'Digite seu e-mail'}/> */}
          <PixieInput 
            title='E-mail'
            placeholder='lalalal padilha'
          />
          {/* <label htmlFor="password">Senha</label>
          <input id="password" type="password" placeholder={'**********'}/> */}
          <PixieInput 
            title='Senha'
            placeholder='lalalal padilha'
          />
          <Button onClick={handleClick}> Entrar na plataforma</Button>
          <a href="">Esqueceu sua senha?</a>
          <a href="">Não possui conta ? Crie uma agora!</a>
        </Form>
      </div>

    </Container>
  );
}