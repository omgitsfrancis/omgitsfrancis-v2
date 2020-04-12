import styled from "styled-components";
import { TEXT_COLOR } from "../components/global";
 
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom:10rem;
  @media (max-width: 768px) {
    align-items: flex-start;
  }
  @media (max-width: 480px) {
    padding: 0px;
  }
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${TEXT_COLOR};
  width: 4px;
  min-height: 160px;
`;

const Dot = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: ${TEXT_COLOR};
  border-radius: 50%;
  &:hover {
    background-color: #3498ff;
  }
`;

const LastDot = styled(Dot)`
  align-self: flex-end;
  transform: translateY(24px);
`;

const ItemContainer = styled.div`
  position: absolute;
  width: 300px;
  left: ${props => props.right && "2rem"};
  right: ${props => props.left && "2rem"};
  text-align: ${props => props.left && "right"};
  @media (max-width: 768px) {
    left: 2rem;
    text-align: left;
  }
`;

const ItemHeader = styled.h2`
  margin-bottom: 0.25rem;
`;

const ItemDate = styled.h4`
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const ItemText = styled.p`
  text-align: left;
`;

function TimelineItem(props) {
  const { left, right, header, date, children, ...rest } = props;
  return (
    <ItemContainer left={left} right={right}>
      <ItemHeader>{header}</ItemHeader>
      <ItemDate>{date}</ItemDate>
      <ItemText>{children}</ItemText>
    </ItemContainer>
  );
}

export function Timeline() {
  return (
    <Container>
      <Line>
        <Dot>
          <TimelineItem header="Tapestry Solutions" date="2015 - 2016" left>
            Worked here as an IT Intern helping out the Sys Admins and Helpdesk folks.
          </TimelineItem>
        </Dot>
      </Line>
      <Line>
        <Dot>
          <TimelineItem header="KES Inc." date="2016 - 2017" right>
            Created automation for verifying system configurations on carriers using proprietary software.
          </TimelineItem>
        </Dot>
      </Line>
      <Line>
        <Dot>
          <TimelineItem header="Foreward Slope Inc." date="2017 - 2018" left>
            Delivered monthly security patching scripts for laptops that ingest weather data for decision making.
          </TimelineItem>
        </Dot>
        <LastDot>
          <TimelineItem
            header="InnovaSystems International"
            date="2018 - Present"
            right
          >
            Started off in QA creating automated UI tests.
            A year later, I was promoted to Dev working with React, C#, and SQL.
          </TimelineItem>
        </LastDot>
      </Line>
    </Container>
  );
}
