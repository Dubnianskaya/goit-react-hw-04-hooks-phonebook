import styled from "styled-components";

export const ContactsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactName = styled.span`
  margin-right: 10px;
  font-size: 30px;
  font-weight: 500;
`;

export const ContactNumber = styled.span`
  margin-right: 10px;
  font-size: 30px;
  font-weight: 500;
`;

export const DeleteBtn = styled.button`
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
