import React from "react";
import PropTypes from "prop-types";
import { Label, Input } from "../../components/Form/Form.styled";

const Filter = ({ value, onFilterChange }) => (
  <Label htmlFor="filter">
    Find contacts by name
    <Input type="text" name="filter" value={value} onChange={onFilterChange} />
  </Label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
