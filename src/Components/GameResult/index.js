import {
  ResultContainer,
  ResponsiveContainer,
  ResultImage,
  Button,
  ButtonContainer,
  MyChoiceContainer,
  ResultText,
} from './StyledComponents'

const GameResult = props => {
  const {myChoice, systemChoice, gameResult, playAgain} = props

  const {imageUrl} = systemChoice

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <ResultContainer>
      <ResponsiveContainer>
        <MyChoiceContainer>
          <ResultText>You</ResultText>
          <ResultImage src={myChoice[1]} alt="your choice" />
        </MyChoiceContainer>
        <MyChoiceContainer>
          <ResultText>Opponent</ResultText>
          <ResultImage src={imageUrl} alt="opponent choice" />
        </MyChoiceContainer>
      </ResponsiveContainer>
      <ButtonContainer>
        <ResultText>{gameResult}</ResultText>
        <Button onClick={onClickPlayAgain} type="button">
          PLAY AGAIN
        </Button>
      </ButtonContainer>
    </ResultContainer>
  )
}
export default GameResult
