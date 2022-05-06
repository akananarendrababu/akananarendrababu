import styled from 'styled-components/macro'

export const BgContainer = styled.div`
  background-color: #223a5f;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const PopUpContainer = styled.div`
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const PopupButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  border: 0;
  font-family: 'Roboto';
  font-size: 15px;
  align-self: flex-end;
  cursor: pointer;
  border-radius: 10px;
  margin-right: 20px;
  font-weight: bold;
  padding: 10px;
  @media (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`
export const RulesImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 20px;
  width: 50%;
  height: 50%;
`

export const RulesImage = styled.img`
  width: 70%;
  height: 70%;
`
export const ButtonContainer = styled.div`
  display: flex;
  align-self: flex-end;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: center;
`
export const ScoreContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  border: 2px solid #ffffff;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  padding: 20px;
  border-radius: 20px;
  @media (min-width: 768px) {
    padding: 10px;
    width: 90%;
  }
`
export const ContentContainer = styled.div`
  width: 20%;
  margin-left: 20px;
`
export const ContentHeading = styled.h1`
  font-family: 'Bree Serif';
  color: #ffffff;
  font-size: 15px;
  @media (min-width: 768px) {
    font-size: 25px;
  }
`
export const ScoreCardContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-right: 20px;
  @media (min-width: 768px) {
    height: 100px;
    width: 100px;
    border-radius: 10px;
  }
`
export const ScoreName = styled.p`
  font-family: 'Roboto';
  color: #223a5f;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const Score = styled.p`
  color: #223a5f;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  font-family: 'Roboto';
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const ButtonUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 0;
  width: 90%;
  height: 40%;
  @media (min-width: 768px) {
    width: 40%;
    height: 20%;
  }
`
