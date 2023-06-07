//  === Import  ===;
// import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//  === Import : local  ===;
import '../styles/search.scss';
//  === Component ===;
const Search = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(/searched/ + input);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form__div">
        <div className="form__svg">
          <FaSearch className="form__logo" />
        </div>
        <input
          className="form__input"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        // placeholder={<FaSearch />}
        />
      </div>
    </form>
  );
};

export default Search;
