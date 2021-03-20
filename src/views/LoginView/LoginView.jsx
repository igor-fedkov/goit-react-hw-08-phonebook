import { InputForm } from '../../components';

import loginInputFields from './login-fields';

import { Container } from './LoginView.css';

const LoginView = ({onSubmitForm}) => {
  return (
    <Container>
      <InputForm
        fields={loginInputFields}
        onSubmitForm={onSubmitForm}
        btnCaption="Войти"
      />
    </Container>
  )
}

export default LoginView;