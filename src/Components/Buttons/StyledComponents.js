import styled from 'styled-components'

export const ButtonItem = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: center;
  width: 40%;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const Image = styled.img`
  width: 100px;
  height: 100px;
  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`
