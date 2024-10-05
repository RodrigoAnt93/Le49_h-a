import CourseCertificate from "../../containers/CourseCertificate";
import Discovery from "../../containers/Discovery";
import Learning from "../../containers/Learning";
import Footer from "../../components/Footer";
import { HomeWrapper } from "./styled";
import Header from "../../components/Header";

function Home() {
  return (
    <HomeWrapper>
      <Header />
      <Discovery />
      <Learning />
      <CourseCertificate />
      <Footer />
    </HomeWrapper>
  );
}

export default Home;
