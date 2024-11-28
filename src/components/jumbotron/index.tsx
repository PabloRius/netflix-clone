import { DefaultNode } from "../../types/default.node";
import {
  Inner,
  Container,
  Title,
  SubTitle,
  Pane,
  Image,
  Item,
} from "./styles/jumbotron";

interface JumbotronProps extends DefaultNode {
  direction: string;
}

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}: JumbotronProps) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({
  children,
  ...restProps
}: DefaultNode) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Title = function JumbotronTitle({
  children,
  ...restProps
}: DefaultNode) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({
  children,
  ...restProps
}: DefaultNode) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Pane = function JumbotronPane({
  children,
  ...restProps
}: DefaultNode) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps}></Image>;
};
