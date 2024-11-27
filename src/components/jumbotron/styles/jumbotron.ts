import styled from "styled-components";

interface InnerProps {
  direction: string;
}

export const Inner = styled.div<InnerProps>`
  display:flex,
    align-items:center,
    flex-directon:center,
    direction:${({ direction }) => direction}
    justify-content:space_between,
    max-width: 1100px,
    margin:auto,
    width:100%,

    @media (max-width:1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.div``;
