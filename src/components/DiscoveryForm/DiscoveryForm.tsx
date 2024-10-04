import Typography from "../Typography";
import { DiscoveryFormButton, DiscoveryFormWrapper } from "./styled";

function DiscoveryForm() {
  return (
    <DiscoveryFormWrapper>
      <form action="">
        <Typography component={"span"} font={"Poppins"}>
          {"Cadastre-se e entre para o grupo exclusivo do evento no whatsapp"}
        </Typography>
        <input type="text" placeholder="Seu melhor e-mail" />
        <input type="text" placeholder="DDD + Whatsapp" />
        <DiscoveryFormButton
          children={"SIM, QUERO PARTICIPAR!"}
          fullWidth
          variant="contained"
          color="secondary"
        />
      </form>
    </DiscoveryFormWrapper>
  );
}

export default DiscoveryForm;
