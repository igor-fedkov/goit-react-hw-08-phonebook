import { Button } from '@material-ui/core';
import { ButtonContainer, Greeting, UserMunuEl } from './UserMenu.css';

const UserMenu = ({ name, onClick }) => {
  return (
    <UserMunuEl>
      <Greeting>Привет, {name}</Greeting>
      <ButtonContainer>
        <Button
          type="button"
          onClick={onClick}
          variant="contained"
        >
          Выйти
        </Button>
      </ButtonContainer>
    </UserMunuEl>
  )
}

export default UserMenu;