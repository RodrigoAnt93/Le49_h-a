import styled from "@emotion/styled";

export const CourseCertificateWrapper = styled.section`
  display: flex;
  align-items: end;
  justify-content: space-around;
  background: url("/BG-LOGO.webp") no-repeat center 100%;
  padding-top: 100px;
  padding-bottom: 80px;
  
  ${({ theme }) => theme.measures.container}

  img {
    transform: scale(1.12);
  }
`;

export const CourseCertificateContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  h3 {
    width: 450px;
    margin: 0;
    font-size: 34px;
    letter-spacing: 3px;
  }

  p {
    width: 500px;
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 34px;
  }

  button {
    max-width: 350px;
    margin-top: 22px;
  }
`;