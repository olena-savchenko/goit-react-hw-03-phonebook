import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyledAddBtn,
  StyledForm,
  StyledLabel,
  StyledInput,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    this.props.addContact(this.state);
    this.reset();
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleFormSubmit}>
        <StyledLabel htmlFor="name">Name</StyledLabel>

        <StyledInput
          type="text"
          name="name"
          value={this.state.name}
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleInputChange}
        />

        <StyledLabel htmlFor="tel">Number</StyledLabel>
        <StyledInput
          type="tel"
          name="number"
          value={this.state.number}
          id="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleInputChange}
        />
        <StyledAddBtn type="submit">Add contact</StyledAddBtn>
      </StyledForm>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
