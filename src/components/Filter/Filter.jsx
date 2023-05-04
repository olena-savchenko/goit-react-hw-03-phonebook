import PropTypes from 'prop-types';
import { StyledLabel, StyledInput } from '../ContactForm/ContactForm.styled';

export const Filter = ({ filter, handleFilter }) => {
  return (
    <div>
      <StyledLabel htmlFor="filter">Find contacts by name</StyledLabel>
      <StyledInput
        type="text"
        name="filter"
        value={filter}
        id="filter"
        onChange={handleFilter}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
