import React, { useState, useEffect } from "react";

// Custom Dictionary
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const XSpellCheck = () => {
  // State for the input text and the correction message
  const [text, setText] = useState("");
  const [correction, setCorrection] = useState("");

  // Handler for updating the text state
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Effect to check spelling when text changes
  useEffect(() => {
    if (!text) {
      setCorrection(""); // Clear suggestion when text is empty
      return;
    }

    // Split text by spaces to get individual words
    const words = text.split(" ");

    // Find the first misspelled word in a case-insensitive manner
    const misspelledWord = words.find((word) => {
      const lowerCaseWord = word.toLowerCase();
      return customDictionary[lowerCaseWord];
    });

    if (misspelledWord) {
      // Get the corrected word from the dictionary (case-insensitive match)
      const correctionWord = customDictionary[misspelledWord.toLowerCase()];
      setCorrection(`Did you mean: ${correctionWord}?`);
    } else {
      setCorrection(""); // Clear correction if no misspelled word
    }
  }, [text]); // Trigger effect whenever text changes

  return (
    <div style={{ margin: "20px" }}>
      <h2>XSpellCheck</h2>
      <textarea
        value={text}
        onChange={handleTextChange}
        rows="5"
        cols="50"
        placeholder="Type something here..."
      />
      {correction && (
        <p style={{ color: "red", marginTop: "10px" }}>{correction}</p>
      )}
    </div>
  );
};

export default XSpellCheck;
