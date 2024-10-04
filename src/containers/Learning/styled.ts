import styled from "@emotion/styled";

export const LearningWrapper = styled.div`
  background: url("/BG-LOGO.webp") no-repeat center 100%, ${(props) => props.theme.palette.dark.main};
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
  padding: 80px 20px 100px;

  h2 {
    font-size: 34px;
  }

  p {
    margin: 0;
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  column-gap: 30px;

  ${({ theme }) => theme.measures.container}

  > div:first-child {
    border-left: none;
  }

  > div:last-child {
    border-right: none;
  }
`;
