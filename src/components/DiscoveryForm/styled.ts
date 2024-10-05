import styled from "@emotion/styled";
import Button from "../Button";

export const FormACWrapper = styled.div`
  width: 100%;

  border-radius: ${({ theme }) => theme.measures.radius};

  fieldset {
    border: none;
  }

  .msg_error {
    font-size: 1.8rem;
  }

  & > .fail_submit {
    display: block;
    padding: 3rem 0;
    color: #ff4c4c;
    font-size: 2rem;
  }

  & > .success_submit {
    display: block;
    padding: 3rem 0;
    color: #4caf50;
    font-size: 2rem;
  }

  .loading_time {
    margin: auto;
    width: 2.3rem;
    height: 2.3rem;
    border: 5px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    border-top: 5px solid white;
    box-sizing: border-box;
    animation: spin 2s infinite linear;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  & input {
    display: block;
    margin: 10px auto;
    border-radius: ${({ theme }) => theme.measures.radius};
    border: none;
    width: 100%;
    padding: 10px;
    font-size: 1.8rem;
    font-weight: 400;
    font-family: sans-serif;
  }

  .cta_btn {
    margin-top: 1rem;
  }
`;

export const DiscoveryFormButton = styled(Button)`
  font-size: 20px;
`;
