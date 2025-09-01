import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { Button, TextField } from "@mui/material"
import { useState, useRef, useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FirebaseContext } from "@/providers/FirebaseProvider"

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
  background-color: #6ac030;
`
const dummy = [
  { id: 1, name: "홍길동", comment: "가나", isMine: false },
  { id: 2, name: "홍길만", comment: "다라", isMine: false },
  { id: 3, name: "홍길동", comment: "마바", isMine: false },
  { id: 4, name: "불뚝", comment: "가나다라마바사아", isMine: true },
  { id: 5, name: "홍길순", comment: "사아", isMine: false },
]

export default function ChatWrapper({ children }) {
  const { isLogOn, user } = useSelector((state) => state.auth)
  const { rtRef, onRtValue, rtPush, rtdb } = useContext(FirebaseContext)
  const [list, setList] = useState([...dummy])
  const [comment, setComment] = useState("")
  const [focused, setFocused] = useState(true)
  const inputRef = useRef(null)
  const commentRef = rtRef(rtdb, "booldook")

  // TODO :: 데이터를 저장, Input을 비워준다. Input에 focus
  const onClickButton = (e) => {
    if (comment.length > 0) {
      setList((prev) => [
        ...prev,
        {
          id: prev[prev.length - 1].id + 1,
          name: "불뚝",
          comment,
          isMine: true,
        },
      ])
      rtPush(commentRef, {
        id: user?.uid || "",
        name: user?.name || "",
        comment,
      })
      setComment("")
      setFocused(true)
    }
  }
  // TODO :: shift(o) -> 아무일 안일어남. shift(x) -> 전송
  const onKeyDownInput = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      onClickButton()
    }
  }

  useEffect(() => {
    const unsubscribe = onRtValue(commentRef, (snapshot) => {
      console.log(snapshot?.val())
    })
    return unsubscribe
  }, [])

  return (
    <WrapperRoot>
      <ChatInputWrap>
        <TextField
          id="myChat"
          ref={inputRef}
          label="My Chat"
          variant="outlined"
          multiline
          maxRows={3}
          sx={{ flexGrow: 1, mr: 1 }}
          onKeyDown={onKeyDownInput}
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          autoFocus
          focused={focused}
        />
        <Button variant="contained" onClick={onClickButton}>
          확인
        </Button>
      </ChatInputWrap>
      <ChatListWrap>
        {[...list].reverse().map((item, idx) => (
          <ChatList key={idx} css={item.isMine ? active : null}>
            <ChatName>{item.name}</ChatName>
            <ChatComment>{item.comment}</ChatComment>
          </ChatList>
        ))}
      </ChatListWrap>
    </WrapperRoot>
  )
}
