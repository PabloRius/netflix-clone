import Jumbotron from "./components/jumbotron";

import jumboData from "./fixtures/jumbo.json";

function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map(({ id, direction, title, subTitle, image, alt }) => (
        <Jumbotron key={id} direction={direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={image} alt={alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}

export default App;
