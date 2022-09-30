import React, { useEffect } from 'react';
import { ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components/native';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useReduxSelector } from '@/hooks/useReduxSelector';
import { useDispatch } from 'react-redux';

import backgroundImage from '@/assets/images/background.png';
import Header from '@/assets/images/header.svg';

import Input from '@/screens/Login/Input';

import { getToken, getUser, getTokenSuccess } from '@/store/slices/userSlice';
import { AppNavigationProp } from '@/routes/stacks/AppStack';

type AuthDataProps = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().email('Email Inválido').required('O campo e-mail é obrigatório'),
  password: yup.string().required('A senha é obrigatória')
});

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<AuthDataProps>({
    resolver: yupResolver(schema)
  });

  const dispatch = useDispatch();
  const { user } = useReduxSelector(state => state);

  const navigation = useNavigation<AppNavigationProp>();

  function handleSignIn(data: AuthDataProps) {
    dispatch(getToken({ email: data.email, password: data.password }));
  }

  useEffect(() => {
    console.log(user.loginError);
    if (user.loginError) {
      Alert.alert(user.loginError);
    }
  }, [user.loginError]);

  return (
    <StyledBackground source={backgroundImage}>
      <StyledContentLogo>
        <Header height={40} />
      </StyledContentLogo>
      <StyledView>
        <Controller
          control={control}
          name='email'
          render={({ field: { value, onChange } }) => (
            <Input
              title='Email'
              marginBottom={16}
              keyboardType='email-address'
              placeholder='Digite o seu email'
              value={value}
              onChangeText={onChange}
              textError={errors?.email?.message as string}
            />
          )}
        />
        <Controller
          control={control}
          name='password'
          render={({ field: { value, onChange } }) => (
            <Input
              title='Password'
              showButton
              secureTextEntry
              placeholder='Digite a sua senha'
              value={value}
              onChangeText={onChange}
              onSubmit={handleSubmit(handleSignIn)}
              textError={errors?.password?.message as string}
            />
          )}
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
  margin-bottom: 48px;
`;

const StyledView = styled.View`
  align-self: stretch;
`;

export default Login;
