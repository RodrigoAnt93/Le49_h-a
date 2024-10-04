import CourseCertificate from "../../containers/CourseCertificate";
import Discovery from "../../containers/Discovery";
import Learning from "../../containers/Learning";
import { HomeWrapper } from "./styled";

function Home() {
  return (
    <HomeWrapper>
      <Discovery />
      <Learning />
      <CourseCertificate />
    </HomeWrapper>
  );
}

export default Home;
