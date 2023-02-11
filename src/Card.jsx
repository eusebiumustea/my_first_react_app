import React from "react";
const Card = ({ movie: { Year, Type, Poster, Title } }) => {
  return (
    <div className="movie">
      <div>
        <p>{Year}</p>
      </div>
      <div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};
export default Card;
