const Alert = (props) => {
  const { type, message } = props;
  const alertClass = `alert alert-${type}`; 

  return (
    <div className={alertClass} role="alert">
      {message}
    </div>
  );
};

