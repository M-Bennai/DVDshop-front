import axios from "axios";
import React, { useEffect, useState } from "react";

const Homepage = () => {
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
    <div>
      Homepage
      <div className="dvd-container-homepage">
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
            <div key={id}>
              <img src={image} alt={image} />
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
