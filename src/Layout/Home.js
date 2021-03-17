import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { listDecks } from "../utils/api";
import DeckList from "./decks/DeckList";
import DecksNav from "./decks/DecksNav";
import NotFound from "./NotFound";

const Home = () => {
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    listDecks(signal).then(setDecks).catch(setError);

    return () => abortController.abort();
  }, []);
  return (
    <Switch>
      <Route path="/decks">
        <DecksNav setDecks={setDecks} decks={decks} />
      </Route>
      <Route exact path="/">
        <DeckList setDecks={setDecks} decks={decks} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Home;
