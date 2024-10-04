import Button from "../../components/Button";
import Typography from "../../components/Typography";
import { CourseCertificateWrapper, CourseCertificateContent } from "./styled";

import CertificateImage from "../../assets/img/certificate.webp";

function CourseCertificate() {
  return (
    <CourseCertificateWrapper>
      <CourseCertificateContent>
        <Typography component="h3" color="light">
          MINICURSO GRATUITO{" "}
          <Typography component="span" color="primary">
            COM CERTIFICADO
          </Typography>
        </Typography>

        <Typography component="p" color="light" font="Poppins">
          Todos os alunos que assistirem às 4 aulas gratuitas do Minicurso
          Terapeuta de Resultados vão receber um certificado para comprovar sua
          participação.
        </Typography>

        <Button
          onClick={() => console.log("Hi!")}
          variant="contained"
          color="secondary"
        >
          SIM, QUERO PARTICIPAR!
        </Button>
      </CourseCertificateContent>

      <img src={CertificateImage} alt="course-certificate" />
    </CourseCertificateWrapper>
  );
}

export default CourseCertificate;
