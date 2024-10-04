import styled from "@emotion/styled";
import Button from "../Button";

export const DiscoveryFormWrapper = styled.div`
  width: 100%;
  background: rgba(61, 61, 61, 0.36);
  padding: 20px;
  border-left: 1px solid white;
  border-radius: ${({ theme }) => theme.measures.radius};

  & input {
    display: block;
    margin: 10px auto;
    border-radius: ${({ theme }) => theme.measures.radius};
    border: none;
    width: 100%;
    padding: 10px;
  }
`;

export const DiscoveryFormButton = styled(Button)`
  font-size: 20px;
`;
