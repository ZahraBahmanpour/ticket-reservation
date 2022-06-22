const SearchItem = (props) => {
  const { title, active, handleClick } = props;
  return (
    <div
      className={`search-item ${active ? 'active' : ''}`}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default SearchItem;
