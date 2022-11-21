import { useState } from 'react';

const CustomForm = ({ addUrl }) => {

  const handleFormSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form
      className="todo"
      onSubmit={handleFormSubmit}
      >
      <div className="wrapper">
        <input
          type="text"
          id="url"
          className="input"
        //   value={url}
          onInput={(e) => setUrl(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Url"
        />
      </div>
      <button
        className="btn"
        aria-label="Add Url"
        type="submit"
        >
        Generate
      </button>
    </form>
  )
}
export default CustomForm