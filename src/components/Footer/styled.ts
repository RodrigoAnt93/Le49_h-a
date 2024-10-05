import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  ${({ theme }) => theme.measures.container}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 4rem 0;

  div {
    padding: 3.2rem 0;
    width: 100%;
  }

  span {
    display: block;
    width: 100%;
    height: 1px;
    margin: 0;
    direction: ltr;
    border-top: 1px solid ${({ theme }) => theme.palette.stone.main};
  }

  p {
    color: white;
    font-size: 1.6rem;
    font-weight: 400;
  }

  a {
    color: ${({ theme }) => theme.palette.secondary.light};
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2rem;
  }
`;
