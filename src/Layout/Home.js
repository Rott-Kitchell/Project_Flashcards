import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import DeckList from "./decks/DeckList";
import DecksNav from "./decks/DecksNav";
import NotFound from "./NotFound";

const Home = () => {
  const [decks, setDecks] = useState([]);

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
