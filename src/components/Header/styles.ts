import { styled } from 'styled-components'

export const ContainerHeader = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  border: none;
  height: 50px;
  background-color: ${(props) => props.theme['green-300']};
  color: ${(props) => props.theme.white};
  padding: 0 1.25rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`
