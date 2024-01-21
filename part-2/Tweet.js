const Tweet = (props) => (
  <div style={{ 
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px'
  }}>
    <h1>@{props.username}</h1>
    <p>
      <b>Name:</b> {props.name}
    </p>
    <p>
      <b>Date:</b> {props.date}
    </p>
    <p>
      <b>Message:</b> {props.message}
    </p>
  </div>
);
