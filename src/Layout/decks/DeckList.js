import React from "react";
import { Link } from "react-router-dom";
import { deleteDeck } from "../../utils/api";

const DeckList = ({ setDecks, decks, setDeckNum }) => {
  function HandleClick(event) {
    event.preventDefault();
    setDeckNum(parseInt(event.target.parentNode.parentNode.id));
  }

  const decksListed = () => {
    if (decks) {
      return decks.map((deck) => {
        const cardsList = [...deck.cards];
        return (
          <div className="card mb-1" key={deck.id} id={deck.id}>
            <div className="card-body">
              <h5 className="d-inline-block card-title">{deck.name}</h5>
              <h6 className="d-inline-block card-subtitle text-muted float-right margin-top">
                {cardsList.length} cards
              </h6>

              <p className="card-text">{deck.description}</p>

              <Link
                
                to={`decks/${deck.id}`}
                className="btn btn-secondary mr-2"
              >
                <i className="bi bi-eye"></i> View
              </Link>
              <Link
                to={`decks/${deck.id}/study`}
                className="btn btn-primary mr-2"
              >
                <i className="bi bi-book"></i> Study
              </Link>
              <button className="btn btn-danger float-right margin-bottom">
                <i className="bi bi-x-square"></i> Delete
              </button>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <Link
        to="/decks/new"
        className="btn btn-secondary btn-lg mb-2
      "
      >
        <i className="bi bi-plus-square"></i> Create Deck
      </Link>
      {decksListed()}
    </div>
  );
};

export default DeckList;
