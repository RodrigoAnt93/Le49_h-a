import Button from "../../components/Button";
import Typography from "../../components/Typography";
import { CourseCertificateWrapper, CourseCertificateContent } from "./styled";

import CertificateImage from "../../assets/img/certificate.webp";
import AnchorLink from "react-anchor-link-smooth-scroll";

function CourseCertificate() {
  return (
    <>
      <CourseCertificateWrapper>
        <CourseCertificateContent>
          <Typography component="h3" color="light" font="Lora">
            MINICURSO GRATUITO{" "}
            <Typography component="span" font="Lora" color="primary">
              COM CERTIFICADO
            </Typography>
          </Typography>

          <Typography
            className={"text_certificate"}
            component="p"
            color="light"
            font="Poppins"
          >
            Todos os alunos que assistirem às 4 aulas gratuitas do Minicurso
            Terapeuta de Resultados vão receber um certificado para comprovar
            sua participação.
          </Typography>

          <AnchorLink href="#anchor">
            <Button variant="contained" color="secondary">
              SIM, QUERO PARTICIPAR!
            </Button>
          </AnchorLink>
        </CourseCertificateContent>

        <div className="cont_img">
          <img src={CertificateImage} alt="course-certificate" />
        </div>
      </CourseCertificateWrapper>
    </>
  );
}

export default CourseCertificate;
