import CourseCertificate from "../../containers/CourseCertificate";
import Discovery from "../../containers/Discovery";
import Learning from "../../containers/Learning";
import Footer from "../../components/Footer";
import { HomeWrapper } from "./styled";

function Home() {
  return (
    <HomeWrapper>
      <Discovery />
      <Learning />
      <CourseCertificate />
      <Footer />
    </HomeWrapper>
  );
}

export default Home;
