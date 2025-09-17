import './searchBox.style.css'

const SearchBox = ({ onChangeHandler }) => {
  return (
    <input
      className='search-box-container'
      type="search"
      placeholder="search monsters"
      onChange={onChangeHandler}
    /> 
  );
};

export default SearchBox;