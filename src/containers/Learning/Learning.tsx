import Button from "../../components/Button";
import LearningCard from "../../components/LearningCard/LearningCard";
import Typography from "../../components/Typography";
import { BoxWrapper, LearningWrapper } from "./styled";
import imageOne from "../../assets/img/AULA-01-NOVO.webp";
import imageTwo from "../../assets/img/AULA-02-NOVO.webp";
import imageThree from "../../assets/img/AULA-03-NOVO.webp";
import imageFour from "../../assets/img/AULA-04-NOVO.webp";

function Learning() {
  return (
    <LearningWrapper>
      <Typography component="h2" color="light">
        O QUE VOU{" "}
        <Typography component="p" color="primary">
          APRENDER
        </Typography>
      </Typography>
      <BoxWrapper>
        <LearningCard
          image={imageOne}
          title="AULA 1"
          date="05/08 ÀS 20H"
          descriptionTitle="QUALQUER PESSOA PODE SER TERAPEUTA?"
          description="Você vai encontrar essa resposta e também vai ter um entendimento profundo sobre como você, seus pensamentos e suas emoções funcionam."
        />
        <LearningCard
          image={imageTwo}
          title="AULA 2"
          date="07/08 ÀS 20H"
          descriptionTitle="A RAIZ DE TODOS OS PROBLEMAS EMOCIONAIS"
          description="Já sentiu a terrível sensação de carregar frustrações, fracassos, viver ansioso, estar sempre triste ou com medo, e não saber o que exatamente ocasionou isso? Você vai se surpreender ao descobrir a raiz dos problemas emocionais!"
        />
        <LearningCard
          image={imageThree}
          title="AULA 3"
          date="09/08 ÀS 20H"
          descriptionTitle="A CHAVE MESTRA"
          description="Uma nova chave será revelada. Totalmente diferente das abordagens tradicionais que se concentram nos sintomas, ignorando a causa raiz. Você vai conhecer uma ferramenta que tem o poder de acabar com o sofrimento emocional."
        />
        <LearningCard
          image={imageFour}
          title="AULA 4"
          date="11/08 ÀS 15H"
          descriptionTitle="AULA FINAL"
          description="Você vai conhecer o único caminho para ser um Terapeuta de Resultados, dando fim no sofrimento emocional e início a uma transformação na sua vida!"
        />
      </BoxWrapper>

      <Button variant="contained" color="secondary">
        SIM, QUERO PARTICIPAR!
      </Button>
    </LearningWrapper>
  );
}

export default Learning;
