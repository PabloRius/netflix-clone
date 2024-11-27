import styled from "styled-components";

interface InnerProps {
  direction: string;
}

export const Inner = styled.div<InnerProps>`
  display: flex;
  align-items: center;
  flex-directon: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space_between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.div``;

export const Title = styled.h1``;

export const SubTitle = styled.h2``;

export const Pane = styled.div`
  width: 50%;
`;

export const Image = styled.img``;
