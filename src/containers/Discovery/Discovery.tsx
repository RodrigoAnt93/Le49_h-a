import DiscoveryForm from "../../components/DiscoveryForm";
import Typography from "../../components/Typography";
import {
  DiscoveryArticle,
  DiscoveryContainer,
  DiscoveryFlag,
  DiscoveryWrapper,
} from "./styled";

function Discovery() {
  return (
    <DiscoveryWrapper>
      <DiscoveryContainer>
        <DiscoveryArticle>
          <DiscoveryFlag component={"span"} font="SansSerif">
            MINICURSO GRATUITO – 04 A 10 DE NOVEMBRO
          </DiscoveryFlag>
          <header>
            <Typography component={"h1"} font="Lora">
              Descubra o caminho para{" "}
              <Typography component={"span"} color="primary">
                acabar com o sofrimento emocional
              </Typography>{" "}
              e ainda ser muito bem remunerado por isso.{" "}
            </Typography>
          </header>
        </DiscoveryArticle>
        <div className="container_form">
          <Typography component={"p"} font="Poppins">
            Preencha os dados abaixo para garantir a sua vaga no Minicurso
            Terapeuta de Resultados.
          </Typography>
          <DiscoveryForm />
        </div>
      </DiscoveryContainer>
    </DiscoveryWrapper>
  );
}

export default Discovery;
