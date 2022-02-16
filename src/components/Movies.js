import axios from "axios";
import React, { useEffect, useState } from "react";

const Movies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get("http://localhost:8080/api/dvd/dvds")
        .then((res) => {
          setData(res.data);
          console.log(setData);
        })
        .catch((err) => {
          console.log("err :>> ", err);
        });
    };
    getData();
  }, []);
  return (
    <section className="section-movies">
      <div className="content-movies">
        <div className="left-category">
          <ul className="category-list">
            <li>Action</li>
            <li>Aventure</li>
            <li>Comedy</li>
            <li>Horror</li>
            <li>Fantasy</li>
          </ul>
        </div>
        <div className="right-content">
          <h1>Movies</h1>
          <div className="container-display-movies">
            {data.map((el) => {
              const {
                id,
                name,
                image,
                description,
                stock,
                release_date,
                rating,
                CategoryId,
              } = el;
              return (
                <div className="div-movie" key={id}>
                  <img src={image} alt={image} />
                  <span>{name}</span>
                  <p>{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;
