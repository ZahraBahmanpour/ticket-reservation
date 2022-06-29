import DropDown from './DropDown';
import SearchNav from './SearchNav';
const style = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  margin: '10%',
  borderRadius: '20px',
  padding: '20px',
  height: '300px',
};
const searchItems = [
  'Internal Flights',
  'International Flights',
  'Hotels',
  'Train',
];
const contentStyle = {
  display: 'flex',
};
const SearchPanel = () => {
  return (
    <div style={style}>
      <SearchNav searchItems={searchItems}></SearchNav>
      <div style={contentStyle}>
        <DropDown />
      </div>
    </div>
  );
};

export default SearchPanel;
