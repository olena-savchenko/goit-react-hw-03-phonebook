import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: 0 auto;
  padding: 16px;
  width: 288px;
  box-shadow: 0px 2px 2px 0px rgba(124, 126, 128, 0.9),
    rgba(124, 126, 128, 0.9) 0px 2px 2px 0px;
  border-radius: 4px;
  border-top: 1px solid rgba(124, 126, 128, 0.9);
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 300;
`;
export const StyledInput = styled.input`
  padding: 4px 8px;
  margin-bottom: 10px;
  width: 256px;
  outline: none;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 4px;
`;

export const StyledButton = styled.button`
  color: #707379;
  text-transform: uppercase;
  padding: 5px 15px;
  font-size: 12px;
  border-radius: 4px;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;

  &:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }
`;

export const StyledAddBtn = styled(StyledButton)`
  margin: 0 auto;
`
