import {ButtonItem, Button, Image} from './StyledComponents'

const Buttons = props => {
  const {buttonDetails, getOnClickButton} = props

  const {imageUrl, id} = buttonDetails

  const dataTestId = id.toLowerCase()

  const onClickButton = () => {
    getOnClickButton(id, imageUrl)
  }

  return (
    <>
      <ButtonItem>
        <Button
          type="button"
          data-testid={`${dataTestId}Button`}
          onClick={onClickButton}
        >
          <Image src={imageUrl} alt={id} />
        </Button>
      </ButtonItem>
    </>
  )
}
export default Buttons
