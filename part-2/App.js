
const App = () => (
  <div>
    <Tweet username="chris123" name="chris" date="01-19-2024" message="I love to eat" />
    <Tweet username="james123" name="james" date="01-19-2024" message="I love to dance" />
    <Tweet username="kyle123" name="kyle" date="01-19-2024" message="I love to sport" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
