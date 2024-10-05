import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  display: none;

  @media screen and (min-width: 1025px) {
    display: block;
    background-color: ${({ theme }) => theme.palette.dark.main};
    position: sticky;
    top: 0;
    z-index: 9;
    border-bottom: 1px solid ${({ theme }) => theme.palette.primary.light};
  }
`;

export const NavComponent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${({ theme }) => theme.measures.container}
  padding: 2rem 0;

  .content_img_logo {
    width: 50%;
  }
`;

export const BrandImg = styled.img`
  width: 40%;
`;

export const ClockTimeDiv = styled.div`
  color: ${({ theme }) => theme.palette.light.main};
  margin-left: auto;
`;

export const TextCourse = styled.h1`
  font-size: 1.5em;
`;
