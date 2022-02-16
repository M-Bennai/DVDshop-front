import axios from "axios";
import React, { useEffect, useState } from "react";
import dvdbanniere from "../assets/dvdshopban.svg";
import batman4 from "../assets/batman4.svg";
import descrip from "../assets/descrip.svg";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [clientId, setClientId] = useState(null);

  // useEffect(() => {
  //   const getData = () => {
  //     axios
  //       .get("user")
  //       .then((res) => {
  //         setData(res.data);
  //         console.log(setData);
  //       })
  //       .catch((err) => {
  //         console.log("err :>> ", err);
  //       });
  //   };
  //   getData();
  // }, []);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/api/user/login", {
  //       headers: {
  //         accessToken: localStorage.getItem("accessToken"),
  //       },
  //     })
  //     .then((res) => {
  //       console.log("res.data :>> ", res.data);

  //       setClientId(res.data.entity.id);
  //     })
  //     .catch((err) => {
  //       console.log("err :>> ", err);
  //     });
  // }, []);
  return (
    <div>
      <div className="dvd-banniere">
        <img src={batman4} alt={batman4} />
      </div>
      <div className="descrip-banniere">
        <img className="descrip" src={descrip} alt={descrip} />
      </div>
      <div className="dvd-container-homepage">
        {/* {data.map((el) => {
          const {
            clientId,
            name,
            image,
            description,
            stock,
            release_date,
            rating,
            CategoryId,
          } = el;
          return (
            <div key={clientId}>
              <img src={image} alt={image} />
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Homepage;
