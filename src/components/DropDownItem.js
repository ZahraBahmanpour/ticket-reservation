const style = { padding: '10px', borderBottom: '1px solid lightgray' };
const DropDownItem = (props) => {
  const { title, value, handleClick } = props;
  return (
    <div
      className="drop-down-item"
      style={style}
      onClick={() => handleClick(value)}
    >
      {title}
    </div>
  );
};

export default DropDownItem;
