import React, { useEffect } from "react";
import { useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { listCards, readDeck } from "../../utils/api";

function Deck({ cards, setCards, singleDeck, setSingleDeck }) {
  const { deckId } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    const abortController = new AbortController();

    readDeck(deckId).then(setSingleDeck);
    listCards(deckId).then(setCards);

    return abortController.abort();
  }, [deckId, setCards, setSingleDeck]);

  const cardsListed = () => {
    if (cards) {
      return cards.map((card) => {
        return (
          <div className="card" key={card.id}>
            <div className="card-body">
              <div className="row">
                <p className="card-text col">{card.front}</p>
                <p className="card-text col">{card.back}</p>
              </div>
              <div className="row justify-content-end">
                <Link
                  to={`${url}/cards/${card.id}/edit`}
                  className="btn btn-secondary margin-bottom"
                >
                  <i className="bi bi-pencil-square"></i> Edit
                </Link>

                <button className="btn btn-danger margin-bottom">
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <div className=" mb-2">
        <h3>{singleDeck.name}</h3>
        <p>{singleDeck.description}</p>
        <Link to={`${url}/edit`} className="btn btn-secondary">
          <i className="bi bi-pencil-square"></i> Edit
        </Link>
        <Link to={`${url}/study`} className="btn btn-primary">
          <i className="bi bi-book"></i> Study
        </Link>

        <Link to={`${url}cards/add`} className="btn btn-primary">
          <i className="bi bi-plus-square"></i> Add Cards
        </Link>
        <button className="btn btn-danger float-right margin-bottom">
          <i className="bi bi-trash"></i>
        </button>
      </div>
      <div>
        <h2>Cards</h2>
        <div>{cardsListed()}</div>
      </div>
    </div>
  );
}

export default Deck;