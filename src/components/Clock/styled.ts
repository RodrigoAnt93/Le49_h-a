import styled from '@emotion/styled'

export const ClockContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TimeRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;

    h2{
        font-family: lora, Sans-serif;
        font-size: 21px;
        font-weight: 400;
        text-transform: uppercase;
    }
`;

export const TimeSection = styled.div`
    margin: 0 1rem;
    text-align: center;
`

export const Number = styled.div`
    font-family: lora, Sans-serif;
    font-size: 32px;
    font-weight: 700;
`;

export const Label = styled.div`
    font-size: 10px;
    margin-top: -5px;
`