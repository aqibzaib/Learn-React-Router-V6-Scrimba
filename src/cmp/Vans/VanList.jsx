import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
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

  /**
   * Challenge: filter the list of vans based on the `typeFilter`
   * we created earlier. For now, just enter "simple", "luxury",
   * or "rugged" into the search param in the URL to check your work.
   */

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  console.log("params>>", typeFilter);
  const vansList = typeFilter
    ? vans?.filter((van) => van.type === typeFilter)
    : vans;
  const vanElements = vansList?.map((van) => (
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
        <div className="van-list-filter-buttons">
          <Link to="?type=simple" className="van-type simple">
            Simple
          </Link>
          <Link to=" " className="van-type luxury">
            Luxury
          </Link>
          <Link to="?type=rugged" className="van-type rugged">
            Rugged
          </Link>
          <Link to="." className="van-type clear-filters">
            Clear filter
          </Link>
        </div>
        <div className="van-list">{vanElements}</div>
      </div>
    </>
  );
}
