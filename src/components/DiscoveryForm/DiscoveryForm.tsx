import { DiscoveryFormButton, DiscoveryFormWrapper } from "./styled";

function DiscoveryForm() {
  return (
    <DiscoveryFormWrapper>
      <form action="">
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
