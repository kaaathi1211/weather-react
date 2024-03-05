import React from "react";

export default function Search() {
  return (
    <form className="search-form">
      <input
        type="search"
        placeholder="Enter a city.."
        required
        id="search-form-input"
        className="search-field"
      />
      <input type="submit" value="Search" className="submit-btn" />
    </form>
  );
}
