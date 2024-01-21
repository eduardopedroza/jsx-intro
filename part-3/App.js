const App = () => (
  <div>
    <Person name="Alan" age={22} hobbies={['soccer', 'football', 'coding']}/>
    <Person name="Christopher" age={17} hobbies={['golfing', 'kayaking', 'sailing']}/>
    <Alert type="success" message="This is a success message." />
    <Alert type="danger" message="This is an error message." />
    <Button type="primary" label="Primary Button" onClick={() => alert("Button clicked")} />
    <Button type="secondary" label="Secondary Button" onClick={() => alert("Button clicked")} />
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"));