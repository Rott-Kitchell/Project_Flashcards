import React, { useEffect } from "react";
import { useParams } from "react-router";
import { listCards, readCard, readDeck } from "../../utils/api";

function Study({ cards, singleDeck, setSingleDeck, setCards }) {
  let frontOfCard = true;
  const { deckId } = useParams();
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    if (deckId) {
      readDeck(deckId, signal)
        .then(setSingleDeck)
        .catch((error) => console.log(error));
      listCards(deckId)
        .then(setCards)
        .catch((error) => console.log(error));
    }

    return () => abortController.abort();
  }, [deckId]);

  //const cardIds = cards.map((card) => card.id);

  return (
    <div>
      <h2 className="mb-2">Study: {singleDeck.name}</h2>
      <div className="card"></div>
    </div>
  );
}

export default Study;
