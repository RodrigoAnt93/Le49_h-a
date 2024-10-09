/* eslint-disable no-useless-escape */
import { FormACWrapper } from "./styled";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Typography from "../Typography";
import Button from "../Button";
import { useUTMParameters } from "use-utm-parameters";
import { useLocation } from "react-router-dom";

type Inputs = {
  email: string;
  phone: string;
};

function FormAC() {
  const utm = useLocation();
  const parems = useUTMParameters(utm.search);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [state, setState] = useState({
    isSubmitted: false,
    isError: false,
  });

  const [loading, setLoading] = useState(false);

  const loader = (): void => {
    setLoading(true);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    loader();
    const formData = new FormData();

    formData.append("u", "1");
    formData.append("f", "1");
    formData.append("s", "s");
    formData.append("c", "0");
    formData.append("m", "0");
    formData.append("act", "sub");
    formData.append("v", "2");
    formData.append("or", "153b94c98323321578f3033ef8a0efed");

    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("field[1]", parems.utm_source ? parems.utm_source : "");
    formData.append("field[2]", parems.utm_medium ? parems.utm_medium : "");
    formData.append("field[3]", parems.utm_campaign ? parems.utm_campaign : "");
    formData.append("field[4]", parems.utm_term ? parems.utm_term : "");
    formData.append("field[5]", parems.utm_content ? parems.utm_content : "");

    fetch("https://rodrigotrg9393312.activehosted.com/proc.php", {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        setState({ ...state, isSubmitted: true });
        window.location.href =
          "https://lp.terapeutaderesultados.com.br/trg-le49/bem-vinda-ldobg-a/" +
          utm;
      })
      .catch(() => {
        setState({ ...state, isError: true });
      });
  };
  return (
    <FormACWrapper>
      {state.isError && (
        <Typography
          component={"span"}
          font="SansSerif"
          className={"fail_submit"}
        >
          Algo deu errado com o envio. Por favor, tente novamente. Se o problema
          persistir, verifique sua conexão ou entre em contato com o suporte.
        </Typography>
      )}
      {!state.isSubmitted && !state.isError && (
        <fieldset>
          <form id="form_lead" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              id="email"
              placeholder="Seu melhor e-mail"
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
            />
            {errors.email && (
              <Typography
                component={"span"}
                className={"msg_error"}
                font="SansSerif"
              >
                Digite um e-mail válido.
              </Typography>
            )}
            <input
              type="tel"
              id="phone"
              placeholder="DDD + Whatsapp"
              {...register("phone", {
                required: true,
                pattern:
                  /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
              })}
            />
            {errors.phone && (
              <Typography
                component={"span"}
                className={"msg_error"}
                font="SansSerif"
              >
                Digite DDD + Whatsapp.
              </Typography>
            )}
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              className="cta_btn"
            >
              {!loading ? (
                "SIM, QUERO PARTICIPAR!"
              ) : (
                <div className="loading_time" />
              )}
            </Button>
          </form>
        </fieldset>
      )}
      {state.isSubmitted && (
        <Typography
          component={"span"}
          font="SansSerif"
          className={"success_submit"}
        >
          Parabéns, sua inscrição foi um sucesso! Você será redirecionado para o
          nosso grupo do whatsapp.
        </Typography>
      )}
    </FormACWrapper>
  );
}

export default FormAC;
