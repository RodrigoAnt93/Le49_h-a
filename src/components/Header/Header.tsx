import { BrandImg, ClockTimeDiv, NavComponent, HeaderWrapper } from "./styled";
import Brand from "../../assets/LOGO.webp";
import Clock from "../Clock";

function Header() {
  const getTargetDate = () => {
    const savedTargetDate = localStorage.getItem("targetDate");
    if (savedTargetDate) {
      return new Date(savedTargetDate);
    } else {
      const now = new Date();
      const targetDate = new Date(
        now.getTime() + 17 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000
      );
      localStorage.setItem("targetDate", targetDate.toISOString());
      return targetDate;
    }
  };

  const targetDate = getTargetDate();

  return (
    <HeaderWrapper>
      <NavComponent>
        <BrandImg src={Brand} alt="Logotipo" />
        <ClockTimeDiv>
          <Clock targetDate={targetDate} />
        </ClockTimeDiv>
      </NavComponent>
    </HeaderWrapper>
  );
}

export default Header;
