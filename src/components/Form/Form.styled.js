import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  margin-right: 10px;
  font-size: 28px;
  font-weight: 500;
`;

export const Input = styled.input`
  display: block;
  height: 50px;
  width: 358px;
  margin-top: 10px;
  padding-left: 10px;
  font-weight: 500;
  font-size: 24px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-color: #14aaf5;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  border-radius: 4px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    border-color: #4073ff;
  }
`;

export const AddContactBtn = styled.button`
  margin-top: 20px;
  padding: 6px 22px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.62;
  text-align: center;
  letter-spacing: 0.03em;
  color: #ffffff;
  background: #14aaf5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #4073ff;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
