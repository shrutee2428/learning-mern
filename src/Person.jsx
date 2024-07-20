import React from "react";
const Person = (props) => {
  return (
    <div
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: "10px" }}
    >
      <img
        style={{
          height: "400px",
          width: "400px",
          objectFit: "cover",
        }}
        src="props.imageUrl"
        alt="props.image"
      />
      <h3>Cilian Murphy</h3>
    </div>
  );
};

export default Person;
