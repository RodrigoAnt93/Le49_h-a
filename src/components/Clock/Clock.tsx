import React, { useEffect, useState } from "react";
import { ClockContainer, Label, Number, TimeRow, TimeSection } from "./styled";
import Typography from "../Typography";

const Clock = ({ targetDate }) => {

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }
        }
        return timeLeft
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearTimeout(timer)
    })

    const formatNumber = (number) => {
        return number < 10 ? `0${number}` : number;
      };

    return(
        <div>
            <ClockContainer>
                <TimeRow>
                    <Typography component="h2">A aula 01 começa em:</Typography>
                    <TimeSection>
                        <Number>{formatNumber(timeLeft.days || 0)}</Number>
                        <Label>DIAS</Label>
                    </TimeSection>
                        <TimeSection>
                        <Number>{formatNumber(timeLeft.hours || 0)}</Number>
                        <Label>HORAS</Label>
                    </TimeSection>
                    <TimeSection>
                        <Number>{formatNumber(timeLeft.minutes || 0)}</Number>
                        <Label>MINUTOS</Label>
                    </TimeSection>
                    <TimeSection>
                        <Number>{formatNumber(timeLeft.seconds || 0)}</Number>
                        <Label>SEGUNDOS</Label>
                    </TimeSection>
                </TimeRow>
            </ClockContainer>
        </div>
    )
}

export default Clock;