import React from "react";

function Breadcrumb({ location, singleDeck }) {
  const path = location.pathname.split("/").slice(2);

  function isLast(index) {
    return index === path.length - 1;
  }

  return (
    <nav className="row">
      <ol className="breadcrumb w-100 ">
        <li className="breadcrumb-item align-items-center">
          <button className={`btn btn-link`}>
            <i className="bi bi-house-fill"></i> Home
          </button>
        </li>
        {path.map((crumb, ci) => {
          const disabled = isLast(ci) ? "disabled" : "";

          return (
            <li key={ci} className="breadcrumb-item align-items-center">
              <button className={`btn btn-link ${disabled}`}>{crumb}</button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
