import { css } from "@emotion/react"
import { ButtonWrapper, Button } from "@/components/common/Button"

const style = css({
  border: "1px solid red",
  padding: "2em 0",
})

export default function ChatPage() {
  return (
    <div css={style}>
      <ButtonWrapper dir="flex-end">
        <Button bColor="red" margin="0 0.5em 0 0">
          채팅방 참여
        </Button>
        <Button>채팅방 나가기</Button>
      </ButtonWrapper>
    </div>
  )
}
