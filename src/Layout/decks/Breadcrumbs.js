import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ location, singleDeck }) {
  const path = location.pathname.split("/").slice(2);

  function isLast(index) {
    return index === path.length - 1;
  }

  return (
    <nav className="row">
      <ol className="breadcrumb w-100 ">
        <li className="breadcrumb-item align-items-center">
          <Link to="/"className={`oi oi-home`}>
            {/* <i className="bi bi-house-fill"></i>  */}
             Home
          </Link>
        </li>
        {path.map((crumb, ci) => {
          const disabled = isLast(ci) ? "disabled" : "";
          
          return (
            <li key={ci} className="breadcrumb-item align-items-center">
              <button className={`btn btn-link ${disabled}`}>{
              //parseInt(crumb) === isNaN ? crumb : singleDeck.name
              crumb
              }</button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
