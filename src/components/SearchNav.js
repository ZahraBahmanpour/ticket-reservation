import { useState } from 'react';
import DropDown from './DropDown';
import SearchItem from './SearchItem';
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
};
const navbarStyle = {
  display: 'flex',
};
const contentStyle = {
  display: 'flex',
};
const SearchNav = (props) => {
  const { searchItems } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div style={containerStyle}>
      <div style={navbarStyle}>
        {searchItems.map((item, i) => (
          <SearchItem
            title={item}
            active={i === activeIndex}
            handleClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
      <div style={contentStyle}>
        <DropDown />
      </div>
    </div>
  );
};

export default SearchNav;
