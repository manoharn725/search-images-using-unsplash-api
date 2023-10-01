import { useState } from 'react';
import './SearchBar.css';

function SearchBar({onFormSubmit}) {
    
    const  [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
        console.log(term)
    }

    const handleChange = (event) =>{
        event.preventDefault();
        setTerm(event.target.value);
        // console.log(event.target.value);
    }

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Search Items</label>
        <input value={term} onChange={handleChange}/>
      </form>
    </div>
  );
}
export default SearchBar;
