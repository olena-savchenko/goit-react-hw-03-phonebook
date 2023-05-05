import PropTypes from 'prop-types';
import { StyledButton } from 'components/ContactForm/ContactForm.styled';
import { StyledContact, StyledName, StyledNumber} from './ContactItem.styled';

export const ContactItem = ({ name, number, deleteContact, id }) => (
  <StyledContact>
    <div>
      <StyledName>{name}: </StyledName>
      <StyledNumber>{number}</StyledNumber>
    </div>
    <StyledButton  type="button" onClick={() => deleteContact(id)}>
      Delete
    </StyledButton>
  </StyledContact>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
