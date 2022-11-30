import React from "react";
import styled from "styled-components";
import ellips from "../../assets/img/ellipse.png";

const themes = {
  true: () => `
    text-decoration-line: line-through;
    background-color: #B4B4B4;
  `,
};

export const CustomEvent = ({ event }) => {
  return (
    <StyledEvent $variant={themes[`${event.isOver}`]}>
      <EllipsImg src={ellips} />
      <EventBlock>
        <EventTime>{event.time}</EventTime>
        <EventTitle>{event.title}</EventTitle>
      </EventBlock>
    </StyledEvent>
  );
};

const StyledEvent = styled.div`
  display: flex;
  background: #d9daf3;
  border-radius: 4px;
  margin: 5px 5px;
  color: #2d224c;
  font-weight: 500;
  font-size: 12px;
  padding: 5px 5px;
  align-items: flex-start;

  ${({ $variant }) => $variant}
`;

const EllipsImg = styled.img`
  padding-top: 1px;
  margin-right: 5px;
  width: 10px;
  height: 10px;
`;

const EventBlock = styled.div`
  display: flex;
  flex-direction: column;
  white-space: pre-wrap;
`;

const EventTime = styled.p`
  word-wrap: break-word;
  overflow: hidden;
`;

const EventTitle = styled.p`
  word-wrap: break-word;
  overflow: hidden;
`;
