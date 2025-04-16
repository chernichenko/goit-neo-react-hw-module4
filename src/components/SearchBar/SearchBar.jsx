import { useState } from "react";
import { toast } from "react-toastify";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      toast("Please enter a search term");
      return;
    }
    onSubmit(search);
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          placeholder="Search images and photos"
          autoFocus
          autoComplete="off"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;