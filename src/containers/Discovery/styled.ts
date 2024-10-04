import styled from "@emotion/styled";
import Typography from "../../components/Typography";

export const DiscoveryFlag = styled(Typography)`
  display: inline;
  padding: 15px;
  background-color: ${({ theme }) => theme.palette.primary.light};
  border: solid 1px;
  border-radius: ${({ theme }) => theme.measures.radius};
  font-size: 2.7vw;
  font-weight: 600;
  line-height: 2.3rem;
  align-items: center;
  color: #161616;
  text-align: center;

  @media screen and (min-width: 769px) {
    font-size: 1.5rem;
  }
`;

export const DiscoveryWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem 2rem 8rem 2krem;
  background-image: url("/BANNER-MOB.webp");
  background-size: contain;
  background-repeat: no-repeat;
  border-bottom: solid 1px ${({ theme }) => theme.palette.light.main};
  box-sizing: border-box;

  @media screen and (min-width: 1025px) {
    background-image: url("/BANNER-miniusrso.webp");
    background-position: center;
    background-size: cover;
  }
`;

export const DiscoveryContainer = styled.div`
  ${({ theme }) => theme.measures.container}
  box-sizing: border-box;
  margin-bottom: 10rem;

  & .container_form {
    padding: 1rem;
  }

  & .container_form p {
    color: ${({ theme }) => theme.palette.primary.second};
    border-bottom: 1px solid ${({ theme }) => theme.palette.stone.main};
    font-size: 3.5vw;
    font-weight: 400;
    text-align: center;
    padding-bottom: 0.5rem;
  }

  @media screen and (max-width: 1024px) {
    width: 80vw;
  }

  @media screen and (min-width: 1025px) {
    max-width: 1216px;
    margin-top: 10rem;
    margin-bottom: 15rem;

    & .container_form {
      max-width: 55%;
    }

    & .container_form p {
      font-size: 2.2rem;
      text-align: left;
    }
  }
`;

export const DiscoveryArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding: 10px;
  margin-top: 20rem;

  & > header {
    order: -1;
  }

  & > header > h1 {
    font-size: 5vw;
    font-weight: 800;
    line-height: 5vw;
    letter-spacing: 1px;
    text-align: center;
  }

  @media screen and (min-width: 460px) {
    margin-top: 25rem;
  }

  @media screen and (min-width: 590px) {
    margin-top: 30rem;
  }
  @media screen and (min-width: 690px) {
    margin-top: 40rem;
  }

  @media screen and (min-width: 769px) {
    & > header > h1 {
      font-size: 4.2rem;
    }
  }

  @media screen and (min-width: 1025px) {
    margin-top: 0rem;
    max-width: 65%;
    align-items: flex-start;

    & > header {
      order: 0;
    }

    & > header > h1 {
      margin: 1.5rem 0 0;
      text-align: left;
      line-height: 5rem;
    }
  }
`;
