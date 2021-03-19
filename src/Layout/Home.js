import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { listDecks, readDeck } from "../utils/api";
import DeckList from "./decks/DeckList";
import DecksNav from "./decks/DecksNav";
import NotFound from "./NotFound";

const Home = () => {
  const [deckNum, setDeckNum] = useState();
  const [decks, setDecks] = useState([]);
  const [singleDeck, setSingleDeck] = useState({});

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    listDecks(signal)
      .then(setDecks)
      .catch((error) => console.log(error));

    return () => abortController.abort();
  }, []);

  useEffect(() => {
    if (deckNum) {
      readDeck(deckNum)
        .then(setSingleDeck)
        .catch((error) => console.log(error));
    }
  }, [deckNum]);
  return (
    <Switch>
      <Route path="/decks">
        <DecksNav setDecks={setDecks} decks={decks} singleDeck={singleDeck} />
      </Route>
      <Route exact path="/">
        <DeckList
          setDecks={setDecks}
          decks={decks}
          setSingleDeck={setSingleDeck}
          singleDeck={singleDeck}
          setDeckNum={setDeckNum}
        />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Home;
