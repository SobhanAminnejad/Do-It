import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  LoginContainer,
  LoginBoxWrapper,
  LoginForm,
  ImageContainer,
  SubmitButton,
} from './Login.style';
import Input from '../../components/input/Input';

const Login = () => {
  const history = useHistory();
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  });
  const [registerInfo, setRegisterInfo] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [formType, setFormType] = useState('login');

  const handleLoginClick = () => {
    if (loginInfo.username && loginInfo.password) {
      history.push('/boards');
    }
  };

  return (
    <LoginContainer>
      <ImageContainer />

      <LoginBoxWrapper>
        <LoginForm>
          {/* <input type="text" data-testid="userName" /> */}
          {formType === 'login' ? (
            <>
              <Input
                data-testid="username"
                placeholder="username"
                type="text"
                value={loginInfo.username}
                onChange={(e) => setLoginInfo({ ...loginInfo, username: e })}
              />
              <Input
                data-testid="password"
                placeholder="password"
                type="password"
                value={loginInfo.password}
                onChange={(e) => setLoginInfo({ ...loginInfo, password: e })}
              />
              <SubmitButton
                type="primary"
                onClick={() => {
                  handleLoginClick();
                }}
                data-testid="loginButton"
              >
                login
              </SubmitButton>
              <SubmitButton
                onClick={() => {
                  setFormType('register');
                }}
                data-testid="loginButton"
              >
                Register
              </SubmitButton>
            </>
          ) : (
            <>
              <Input
                data-testid="email"
                placeholder="email"
                type="text"
                value={registerInfo.email}
                onChange={(e) => setRegisterInfo({ ...registerInfo, userName: e })}
              />
              <Input
                data-testid="username"
                placeholder="username"
                type="text"
                value={registerInfo.username}
                onChange={(e) => setRegisterInfo({ ...registerInfo, userName: e })}
              />
              <Input
                data-testid="password"
                placeholder="password"
                type="password"
                value={setRegisterInfo.password}
                onChange={(e) => setRegisterInfo({ ...setRegisterInfo, password: e })}
              />
              <SubmitButton
                type="primary"
                onClick={() => {
                  alert('register');
                }}
                data-testid="registerButton"
              >
                Register
              </SubmitButton>
              <SubmitButton
                onClick={() => {
                  setFormType('login');
                }}
                data-testid="loginButton"
              >
                login
              </SubmitButton>
            </>
          )}
        </LoginForm>
      </LoginBoxWrapper>
    </LoginContainer>
  );
};

export default Login;
