import {Component} from 'react'

import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import Buttons from '../Buttons'
import GameResult from '../GameResult'

import './index.css'

import {
  BgContainer,
  PopUpContainer,
  PopupButton,
  RulesImgContainer,
  RulesImage,
  ButtonContainer,
  CloseButton,
  ScoreContainer,
  ContentContainer,
  ContentHeading,
  ScoreCardContainer,
  ScoreName,
  Score,
  ButtonUl,
} from './StyledComponents'

class GameHome extends Component {
  state = {
    isPlaying: false,
    score: 0,
    myChoice: {},
    systemChoice: {},
    gameResult: '',
  }

  onClickPlayAgain = () => {
    this.setState({isPlaying: false})
  }

  getOnClickButton = (id, image) => {
    const {choicesList} = this.props
    const randomChoice = Math.floor(Math.random() * choicesList.length)

    if (choicesList[randomChoice].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomChoice],
        score: prevState.score - 1,
        gameResult: 'YOU LOSE',
      }))
    } else if (choicesList[randomChoice].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomChoice],
        score: prevState.score - 1,
        gameResult: 'YOU LOSE',
      }))
    } else if (choicesList[randomChoice].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomChoice],
        score: prevState.score - 1,
        gameResult: 'YOU LOSE',
      }))
    } else if (choicesList[randomChoice].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomChoice],
        score: prevState.score + 1,
        gameResult: 'YOU WON',
      }))
    } else if (choicesList[randomChoice].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomChoice],
        score: prevState.score + 1,
        gameResult: 'YOU WON',
      }))
    } else if (choicesList[randomChoice].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        isPlaying: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomChoice],
        score: prevState.score + 1,
        gameResult: 'YOU WON',
      }))
    } else {
      this.setState({
        isPlaying: true,
        myChoice: [id, image],
        systemChoice: choicesList[randomChoice],
        gameResult: 'IT IS DRAW',
      })
    }
  }

  renderButtonContainer = () => {
    const {choicesList} = this.props

    return (
      <ButtonUl>
        {choicesList.map(each => (
          <Buttons
            key={each.id}
            buttonDetails={each}
            getOnClickButton={this.getOnClickButton}
          />
        ))}
      </ButtonUl>
    )
  }

  renderResultCard = () => {
    const {myChoice, systemChoice, gameResult} = this.state
    return (
      <GameResult
        myChoice={myChoice}
        systemChoice={systemChoice}
        gameResult={gameResult}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  render() {
    const {isPlaying, score} = this.state
    return (
      <BgContainer>
        <ScoreContainer>
          <ContentContainer>
            <ContentHeading>
              ROCK <br />
              PAPER
              <br />
              SCISSORS
            </ContentHeading>
          </ContentContainer>
          <ScoreCardContainer>
            <ScoreName>Score</ScoreName>
            <Score>{score}</Score>
          </ScoreCardContainer>
        </ScoreContainer>
        {isPlaying ? this.renderResultCard() : this.renderButtonContainer()}
        <PopUpContainer>
          <Popup
            modal
            trigger={<PopupButton type="button">Rules</PopupButton>}
            className="popup-container"
          >
            {close => (
              <RulesImgContainer>
                <ButtonContainer onClick={() => close()}>
                  <CloseButton type="button">
                    <RiCloseLine />
                  </CloseButton>
                </ButtonContainer>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesImgContainer>
            )}
          </Popup>
        </PopUpContainer>
      </BgContainer>
    )
  }
}
export default GameHome
