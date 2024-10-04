import Header from "../../components/Header";
import CourseCertificate from "../../containers/CourseCertificate";
import Discovery from "../../containers/Discovery";
import Learning from "../../containers/Learning";
import { HomeWrapper } from "./styled";

function Home() {
  return (
    <HomeWrapper>
      <Header />
      <Discovery />
      <Learning />
      <CourseCertificate />
    </HomeWrapper>
  );
}

export default Home;
