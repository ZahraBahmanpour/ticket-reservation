import SearchNav from './SearchNav';
const style = {
  backgroundColor: 'white',
  margin: '10%',
  borderRadius: '20px',
};
const searchItems = [
  'Internal Flights',
  'International Flights',
  'Hotels',
  'Train',
];
const SearchPanel = () => {
  return (
    <div style={style}>
      <SearchNav searchItems={searchItems}></SearchNav>
    </div>
  );
};

export default SearchPanel;
