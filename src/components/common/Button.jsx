import styled from "@emotion/styled"

export const ButtonWrapper = styled.div`
  display: flex;
  padding: 0.5em 0;
  justify-content: ${(props) => props.dir || "flex-start"};
`

export const Button = styled.button`
  padding: 0.5em 0.875em;
  border-color: ${(props) => props.bColor || "#333"};
  margin: ${(props) => props.margin || 0};
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
`
