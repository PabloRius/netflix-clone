import Jumbotron from "./components/jumbotron";

import jumboData from "./fixtures/jumbo.json";

function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map(({ id, direction, title }) => (
        <Jumbotron key={id} direction={direction}>
          {title}
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}

export default App;
