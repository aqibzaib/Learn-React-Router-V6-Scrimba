import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function VanList() {
  const [vans, setVans] = useState();
  const fetchData = async () => {
    const response = await fetch("/api/vans");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    setVans(data.vans);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const vanElements = vans?.map((van) => (
    <Link to={`/vans/${van.id}`} key={van.id}>
      <div key={van.id} className="van-tile">
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    </Link>
  ));
  return (
    <>
      <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list">{vanElements}</div>
      </div>
    </>
  );
}
