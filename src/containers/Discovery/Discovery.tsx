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
          <DiscoveryFlag component={"div"} color="primary" font="Poppins">
            MINICURSO GRATUITO – 05 A 11 DE AGOSTO
          </DiscoveryFlag>
          <header>
            <Typography component={"h1"}>
              Descubra o{" "}
              <Typography component={"span"} color="primary">
                caminho
              </Typography>{" "}
              para acabar com o{" "}
              <Typography component={"span"} color="primary">
                sofrimento emocional.
              </Typography>
            </Typography>
          </header>
          <Typography component={"h2"} font="Poppins">
            Obtenha ferramentas para conseguir ajudar pessoas e seja realizado
            profissionalmente com isso.
          </Typography>
          <DiscoveryForm />
        </DiscoveryArticle>
      </DiscoveryContainer>
    </DiscoveryWrapper>
  );
}

export default Discovery;
