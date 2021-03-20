import registrationInputFields from './registration-fields';

import InputForm from '../../components/InputForm';

import { Container } from './RegistrationView.css';

const RegistationView = ({onSubmitForm}) => {
  return (
    <Container>
      <InputForm
        fields={registrationInputFields}
        onSubmitForm={onSubmitForm}
        btnCaption="Зарегистрироваться"
      />
    </Container>
  )
}

export default RegistationView;