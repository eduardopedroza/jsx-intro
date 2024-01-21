const Button = (props) => {
  const { type, label, onClick } = props;
  const btnClass = `btn btn-${type}`; 

  return (
    <button type="button" className={btnClass} onClick={onClick}>
      {label}
    </button>
  );
};