import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { Button, TextField } from "@mui/material"
import { useState } from "react"

const WrapperRoot = styled.div``
const ChatInputWrap = styled.div`
  margin-bottom: 1em;
  padding: 0.5em 0;
  display: flex;
`
const ChatListWrap = styled.ul`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ade5ff;
`
const ChatList = styled.li`
  min-width: 250px;
  padding: 0.5em;
  margin-bottom: 1em;
  border: 1px solid #aaa;
  border-radius: 6px;
  background-color: #468be6;
  color: #fff;
`
const ChatName = styled.div`
  padding: 0.25em 0.5em;
  background: #31609c;
  color: #fdf7d6;
  transform: translate(1em, -50%);
  display: inline-block;
`
const ChatComment = styled.div``

const active = css`
  align-self: flex-end;
`

const dummy = [
  { id: 1, name: "홍길동", comment: "가나", isMine: false },
  { id: 2, name: "홍길만", comment: "다라", isMine: false },
  { id: 3, name: "홍길동", comment: "마바", isMine: false },
  { id: 4, name: "불뚝", comment: "가나다라마바사아", isMine: true },
  { id: 5, name: "홍길순", comment: "사아", isMine: false },
]

export default function ChatWrapper({ children }) {
  const [list, setList] = useState([...dummy])

  return (
    <WrapperRoot>
      <ChatInputWrap>
        <TextField
          id="myChat"
          label="My Chat"
          variant="outlined"
          sx={{ flexGrow: 1, mr: 1 }}
        />
        <Button variant="contained">확인</Button>
      </ChatInputWrap>
      <ChatListWrap>
        {list.map((item) => (
          <ChatList css={item.isMine ? active : null}>
            <ChatName>{item.name}</ChatName>
            <ChatComment>{item.comment}</ChatComment>
          </ChatList>
        ))}
      </ChatListWrap>
    </WrapperRoot>
  )
}
