import { useState, useActionState } from "react"
import Button from "@mui/material/Button"
import styled from "@emotion/styled"

const FormWrap = styled.form`
  padding: 0.5em;
  border: 1px solid #eee;
  margin-bottom: 1em;
`
const FormList = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 0.5em 0;
`
const FormListTitle = styled.div`
  font-weight: bold;
  color: #333;
  flex-grow: 1;
  width: 150px;
`
const Input = styled.input`
  padding: 0.75em !important;
  border: 1px solid #aaa !important;
  flex-grow: 3;
`
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
`

export default function JoinForm() {
  const createUser = () => {}
  const [formState, formAction] = useActionState(createUser, {})

  return (
    <div className="form-wrapper">
      <FormWrap action={formAction}>
        <FormList>
          <FormListTitle>이름</FormListTitle>
          <Input type="text" name="usrNm" />
        </FormList>
        <FormList>
          <FormListTitle>아이디</FormListTitle>
          <Input type="text" name="usrId" />
        </FormList>
        <FormList>
          <FormListTitle>비밀번호</FormListTitle>
          <Input type="password" name="usrPw" />
        </FormList>
        <FormList>
          <FormListTitle>비밀번호재입력</FormListTitle>
          <Input type="password" name="usrPwRe" />
        </FormList>
        <FormList>
          <FormListTitle>이메일</FormListTitle>
          <Input type="text" name="usrEmail" />
        </FormList>
        <ButtonWrap>
          <Button variant="contained">회원가입</Button>
        </ButtonWrap>
      </FormWrap>
    </div>
  )
}
