import { Inner, Container } from "./styles/jumbotron";

interface JumbotronProps {
  children: React.ReactNode;
  direction: string;
}
interface JumbotronContainerProps {
  children: React.ReactNode;
}

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}: JumbotronProps) {
  return <Inner direction={direction}>{children}</Inner>;
}

Jumbotron.Container = function JumbotronContainer({
  children,
  ...restProps
}: JumbotronContainerProps) {
  return <Container {...restProps}>{children}</Container>;
};
