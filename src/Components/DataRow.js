import React from "react";

const DataRow = ({ label, value }) => {
  return (
    <div className="data-row">
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </div>
  );
};

export default DataRow;
