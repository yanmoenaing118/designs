import React from "react";
import Select from "react-select";

export default function ReactSelectInput({
  options,
  placeholder,
  onChange,
  value,
}) {
  return (
    <Select
      value={value}
      options={options}
      placeholder={placeholder}
      onChange={(value) => onChange(value)}
    />
  );
}
