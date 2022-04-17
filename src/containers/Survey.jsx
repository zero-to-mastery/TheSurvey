import React, { useState } from "react";

function Survey() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [author, setAuthor] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const surveyObj = {
      title,
      body,
      author,
    };

    console.log("SURVEY SUBMITTED!", surveyObj);
    setTitle((prevTitle) => (prevTitle = ""));
    setBody((prevBody) => (prevBody = ""));
    setAuthor((prevAuthor) => (prevAuthor = ""));
  };

  return (
    <div className="create">
      <h2>Create a new Survey</h2>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="survery topic"
          required
        ></textarea>

        <label>Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>

        <button>Add Survey</button>
      </form>
    </div>
  );
}

export default Survey;
