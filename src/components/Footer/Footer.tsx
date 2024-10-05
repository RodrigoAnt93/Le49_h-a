import Typography from "../Typography";
import { FooterWrapper } from "./styled";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterWrapper>
      <div>
        <span></span>
      </div>
      <Typography component={"p"} font="Poppins">
        CNPJ: 35.021.937/0001-28
      </Typography>

      <Link to="https://lp.terapeutaderesultados.com.br/politica-privacidade/">
        Política de Privacidade
      </Link>
    </FooterWrapper>
  );
}

export default Footer;
