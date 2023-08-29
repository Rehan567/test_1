import React from "react";

const RawData = ({ rawData }) => {
  return (
    <div className="raw-data">
      <textarea value={rawData} readOnly />
    </div>
  );
};

export default RawData;
