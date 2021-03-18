import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { createDeck, readDeck, updateDeck } from "../../utils/api";

function CreateDeck({ isnew, decks, singleDeck, setSingleDeck }) {
  const history = useHistory();
  const { deckId } = useParams();
  const initialFormState = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (!isnew) {
      setFormData((currentForm) => {
        return {
          ...currentForm,
          name: singleDeck.name,
          description: singleDeck.description,
        };
      });
    }

    
  });

  let placeholders = {
    heading: "",
    name: "",
    description: "",
  };
  let handleSubmit;
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  if (isnew) {
    placeholders = {
      heading: "Create Deck",
      name: "Deck Name",
      description: "Brief description of the deck",
    };

    handleSubmit = (event) => {
      event.preventDefault();
      setFormData({ ...initialFormState });
      createDeck(formData).then(({ id }) => history.push(`/decks/${id}`));
    };
  } else {
    if (singleDeck) {
      placeholders = {
        heading: "Edit Deck",
        name: `${singleDeck.name}`,
        description: `${singleDeck.description}`,
      };
    }
    handleSubmit = (event) => {
      event.preventDefault();
      singleDeck = {
        ...singleDeck,
        name: formData.name,
        description: formData.description,
      };
      setFormData({ ...formData, name: "", description: "" });
      updateDeck(singleDeck).then(({ id }) => history.push(`/decks/${id}`));
    };
  }
  return (
    <div>
      <h2>{placeholders.heading}</h2>

      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="name">
          Name:
        </label>
        <input
          className="form-control"
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder={placeholders.name}
        />

        <br />
        <label className="form-label" htmlFor="description">
          Description:
        </label>
        <textarea
          className="form-control"
          id="description"
          type="text"
          name="description"
          onChange={handleChange}
          value={formData.description}
          placeholder={placeholders.description}
        />

        <br />
        <Link className="btn btn-secondary" to="/">
          Cancel
        </Link>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateDeck;
