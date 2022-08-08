import React from "react";
import Select from "react-select";

export default function ReactSelectInput({ options, onChange, value }) {
  return (
    <Select

      options={options}
      placeholder="Select an option"
      value={value}
      onChange={(value) => onChange(value)}
    />
  );
}
