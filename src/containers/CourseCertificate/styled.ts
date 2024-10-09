import styled from "@emotion/styled";

export const CourseCertificateWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 4rem;
  box-sizing: border-box;
  gap: 5rem;

  ${({ theme }) => theme.measures.container}

  .cont_img {
    width: 100%;
    display: flex;
    justify-content: center;
    order: -1;
  }

  img {
    width: 85vw;
  }

  @media screen and (min-width: 1025px) {
    flex-direction: row;

    .cont_img {
      order: 0;
    }

    img {
      width: 100vw;
      max-width: 100%;
    }
  }
`;

export const CourseCertificateContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;

  h3 {
    margin: 2rem 0;
    font-size: 4.5vw;
    font-weight: 800;
    letter-spacing: 3px;
    text-align: center;
  }
  span {
    display: block;
  }

  p {
    text-align: center;
    font-size: 4vw;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 34px;
  }

  a button {
    max-width: 350px;
    margin-top: 22px;
  }

  @media screen and (min-width: 769px) {
    p {
      font-size: 2.5vw;
    }
  }

  @media screen and (min-width: 1025px) {
    align-items: flex-start;
    h3 {
      font-size: 3.5rem;
      text-align: left;
    }

    p {
      font-size: 1.5vw;
      text-align: left;
    }
  }
`;
