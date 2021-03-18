import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { listDecks } from "../utils/api";
import DeckList from "./decks/DeckList";
import DecksNav from "./decks/DecksNav";
import NotFound from "./NotFound";

const Home = () => {
  const [decks, setDecks] = useState([]);
  const [singleDeck, setSingleDeck] = useState({});
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    listDecks(signal)
      .then(setDecks)
      .catch((error) => console.log(error));

    return () => abortController.abort();
  }, []);
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
        />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Home;
