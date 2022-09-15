import React, { useState } from 'react';
import { ImageBackground } from 'react-native';

import styled from 'styled-components/native';

import backgroundImage from '@/assets/images/background.png';
import Logo from '@/assets/images/logo.svg';

import Input from '@/screens/Login/Input';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    console.log(email, password);
  }

  return (
    <StyledBackground source={backgroundImage}>
      <StyledContentLogo>
        <Logo />
      </StyledContentLogo>
      <StyledView>
        <Input
          title='Email'
          marginBottom={16}
          keyboardType='email-address'
          placeholder='Digite o seu email'
          value={email}
          onChangeText={setEmail}
        />
        <Input
          title='Password'
          showButton
          secureTextEntry
          placeholder='Digite a sua senha'
          value={password}
          onChangeText={setPassword}
          onSubmit={handleSignIn}
        />
      </StyledView>
    </StyledBackground>
  );
};

const StyledBackground = styled(ImageBackground)`
  padding: 0px 15px;
  flex: 1;
  justify-content: center;
`;

const StyledContentLogo = styled.View`
  margin-bottom: 50px;
  width: 100%;
`;

const StyledView = styled.View`
  align-self: stretch;
`;

export default Login;
