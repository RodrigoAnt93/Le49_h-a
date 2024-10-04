import styled from "@emotion/styled";
import Typography from "../../components/Typography";

export const DiscoveryWrapper = styled.section`
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: 20px 20px 80px 20px;
  background-image: url("/BANNER-JPG-RGB-NORMAL.jpg");
  background-size: cover;
  border-bottom: solid 1px ${({ theme }) => theme.palette.light.main};
`;

export const DiscoveryContainer = styled.div`
    ${({ theme }) => theme.measures.container}
`

export const DiscoveryArticle = styled.article`
  height: auto;
  width: 59%;
  padding: 10px;

  & > header > h1 {
    font-size: 50px;
    font-weight: 800;
    line-height: 54px;
    letter-spacing: 1px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 50px;
  }
`;

export const DiscoveryFlag = styled(Typography)`
  display: inline-block;
  padding: 15px;
  background-color: ${({ theme }) => theme.palette.primary.light};
  border: solid 1px;
  border-radius: ${({ theme }) => theme.measures.radius};
  font-size: 15px;
  font-weight: 600;
  height: auto;
  align-items: center;
  margin: 10px;
`;
