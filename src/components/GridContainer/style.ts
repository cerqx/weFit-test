import styled from "styled-components";

export const StyledGridContainer = styled.div`
  display: grid;
  gap: 24px 16px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;