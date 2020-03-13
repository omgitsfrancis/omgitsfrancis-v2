import styled from "styled-components";

export const CirclePhoto = styled.div`
  position: relative;
  margin: auto;
  margin-bottom: 2rem;
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 50%;
  z-index: -1;
  border: solid 8px white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;