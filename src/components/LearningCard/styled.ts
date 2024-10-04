import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border-radius: 7px;
  border: 1px solid #f1f1f1;
  flex-basis: 100%;
  padding: 1rem;

  .text_title {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin: 1rem 0;
  }

  .text_description {
    text-align: center;
    font-size: 1.8rem;
    padding: 0 0rem;
  }

  @media screen and (min-width: 1025px) {
    justify-content: flex-start;
    height: 75rem;
    margin-bottom: auto;
  }
`;

export const CardBox = styled.div`
  padding: 10px;
  font-family: sans-serif;
  font-size: 1.8rem;
  letter-spacing: 1.2px;
  font-weight: 600;
  background-color: rgba(100, 98, 98, 0.58);
  border-radius: 7px;
  border: 2px solid #fff;
  color: white;
`;

export const CardImageWrapper = styled.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: -10rem;
`;

export const CardTextWrapper = styled.p`
  color: #f1f1f1;
  font-size: 17px;
`;
