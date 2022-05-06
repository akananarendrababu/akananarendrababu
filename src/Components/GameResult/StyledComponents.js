import styled from 'styled-components'

export const ResultContainer = styled.div`
  width: 70%;
  align-items: center;
  align-self: center;
  @media (min-width: 768px) {
    width: 50%;
  }
`
export const ResponsiveContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const MyChoiceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const ResultText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const ResultImage = styled.img`
  width: 70%;
  @media (min-width: 768px) {
    width: 50%;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const Button = styled.button`
  border: 0;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 12px;
`
