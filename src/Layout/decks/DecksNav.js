import React, { useState } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import Breadcrumbs from "./Breadcrumbs";
import CreateDeck from "./CreateDeck";

import Study from "./Study";
import Deck from "./Deck";

function DecksNav({ decks, setDecks }) {
  const [cards, setCards] = useState([]);
  const [singleDeck, setSingleDeck] = useState({});
  const { location } = useHistory();

  const { path } = useRouteMatch();

  return (
    <div className="w-100">
      <Breadcrumbs location={location} />
      <Switch>
        <Route exact path={`${path}/new`}>
          <CreateDeck
            isnew={true}
            decks={decks}
            singleDeck={singleDeck}
            setSingleDeck={setSingleDeck}
          />
        </Route>
        <Route exact path={`${path}/:deckId/edit`}>
          <CreateDeck
            isnew={false}
            decks={decks}
            singleDeck={singleDeck}
            setSingleDeck={setSingleDeck}
          />
        </Route>
        <Route exact path={`${path}/:deckId/study`}>
          <Study
            cards={cards}
            setCards={setCards}
            singleDeck={singleDeck}
            setSingleDeck={setSingleDeck}
          />
        </Route>
        <Route exact path={`${path}/:deckId`}>
          <Deck
            cards={cards}
            setCards={setCards}
            singleDeck={singleDeck}
            setSingleDeck={setSingleDeck}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default DecksNav;
