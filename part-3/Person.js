const Person = (props) => {
  let addH3;
  if (props.age > 18) {
    addH3 = "Please go vote!"
  } else {
    addH3 = "You must be 18"
  }
  
  let displayName = props.name.length > 8 ? props.name.substring(0, 6) + "..." : props.name;

  return (
    <div>
      <p>
        <b>Let's learn come information about this person:</b>
      </p>
      <p>
        <b>Name:</b> {displayName}
      </p>
      <p>
        <b>Age:</b> {props.age}
      </p>
      <h3> {addH3} </h3>

      <h4>Hobbies:</h4>
      <ul> {props.hobbies.map(h => 
          (
            <li>{h}</li>
          )
        )}
      </ul>
    </div>
  )
}