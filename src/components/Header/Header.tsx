import { BrandImg, ClockTimeDiv, NavComponent, HeaderWrapper } from "./styled";
import Brand from "../../assets/LOGO.webp";
import Clock from "../Clock";

function Header() {
  return (
    <HeaderWrapper>
      <NavComponent>
        <div className="content_img_logo">
          <BrandImg src={Brand} alt="Logotipo" />
        </div>
        <ClockTimeDiv>
          <Clock />
        </ClockTimeDiv>
      </NavComponent>
    </HeaderWrapper>
  );
}

export default Header;
