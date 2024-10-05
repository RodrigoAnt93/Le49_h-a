import { ClockContainer, Label, Number, TimeRow, TimeSection } from "./styled";
import Typography from "../Typography";
import useCountdown from "../../hooks/useCountdown";

const Clock = () => {
  const targetDate = new Date("Nov 4, 2024 20:00:00").getTime();

  const date_event = useCountdown(targetDate);

  const [day, hour, minute, second] = date_event;

  const formatNumber = (number: number) => {
    return number < 10 ? `0${number}` : number;
  };

  return (
    <div>
      <ClockContainer>
        <TimeRow>
          <Typography component="h2">A aula 01 começa em:</Typography>
          <TimeSection>
            <Number>{formatNumber(day || 0)}</Number>
            <Label>DIAS</Label>
          </TimeSection>
          <TimeSection>
            <Number>{formatNumber(hour || 0)}</Number>
            <Label>HORAS</Label>
          </TimeSection>
          <TimeSection>
            <Number>{formatNumber(minute || 0)}</Number>
            <Label>MINUTOS</Label>
          </TimeSection>
          <TimeSection>
            <Number>{formatNumber(second || 0)}</Number>
            <Label>SEGUNDOS</Label>
          </TimeSection>
        </TimeRow>
      </ClockContainer>
    </div>
  );
};

export default Clock;
