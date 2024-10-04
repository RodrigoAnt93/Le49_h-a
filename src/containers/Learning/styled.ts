import styled from "@emotion/styled";

export const LearningWrapper = styled.div`
  background-image: url("/BG-LOGO.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: ${(props) => props.theme.palette.dark.main};
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 80px 10px 100px;
  ${({ theme }) => theme.measures.container}

  h2 {
    font-size: 4.5vw;
    text-align: center;
  }

  p {
    margin: 0;
  }

  @media screen and (min-width: 1025px) {
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 3rem;

  ${({ theme }) => theme.measures.container}

  width: 75vw;

  @media screen and (max-width: 1024px) {
    & > div {
      border-left: none;
      border-right: none;
    }
  }

  @media screen and (min-width: 769px) {
    max-width: 65vw;
  }

  @media screen and (min-width: 1025px) {
    flex-direction: row;
    gap: 2rem;
    width: 100%;
    max-width: 100%;

    & > div:nth-of-type(1) {
      border-top: none;
      border-bottom: none;
      border-left: none;
    }

    & > div:nth-of-type(2) {
      border-top: none;
      border-bottom: none;
    }

    & > div:nth-of-type(3) {
      border-top: none;
      border-bottom: none;
    }

    & > div:nth-of-type(4) {
      border-top: none;
      border-bottom: none;
      border-right: none;
    }
  }
`;
