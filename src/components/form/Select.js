import React from "react";
import Select from "react-select";

export default function ReactSelectInput({
  options,
  placeholder,
  onChange,
}) {
  return (
    <Select
      options={options}
      placeholder={placeholder}
      onChange={(value) => onChange(value)}
    />
  );
}
