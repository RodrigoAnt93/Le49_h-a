import Button from "../../components/Button";
import Typography from "../../components/Typography";
import { CourseCertificateWrapper, CourseCertificateContent } from "./styled";

import CertificateImage from "../../assets/img/certificate.webp";

function CourseCertificate() {
  return (
    <>
      <div style={{ borderBottom: "1px solid white" }}>
        <CourseCertificateWrapper>
          <CourseCertificateContent>
            <Typography component="h3" color="light" font="SansSerif">
              MINICURSO GRATUITO{" "}
              <Typography component="span" font="SansSerif" color="primary">
                COM CERTIFICADO
              </Typography>
            </Typography>

            <Typography component="p" color="light" font="Poppins">
              Todos os alunos que assistirem às 4 aulas gratuitas do Minicurso
              Terapeuta de Resultados vão receber um certificado para comprovar
              sua participação.
            </Typography>

            <Button variant="contained" color="secondary">
              SIM, QUERO PARTICIPAR!
            </Button>
          </CourseCertificateContent>

          <div className="cont_img">
            <img src={CertificateImage} alt="course-certificate" />
          </div>
        </CourseCertificateWrapper>
      </div>
    </>
  );
}

export default CourseCertificate;
