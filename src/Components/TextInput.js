import React from "react";

const TextInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="text-input"
      value={value}
      onChange={onChange}
      placeholder="Enter serial number"
    />
  );
};

export default TextInput;
