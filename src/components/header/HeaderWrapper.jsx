import {
  Typography,
  Breadcrumbs,
  Box,
  Button,
  FormControlLabel,
  Switch,
} from "@mui/material"
import { Link } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { setTheme, toggleTheme } from "@/store/reducers/ui-slice"
import { logOn, logOut } from "@/store/reducers/auth-slice"
import { useContext } from "react"
import { FirebaseContext } from "@/providers/FirebaseProvider"

export default function HeaderWrapper() {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.ui.theme)
  const { isLogging, isLogOn, data } = useSelector((state) => state.auth)
  const { signInWithPopup, auth, googleProvider } = useContext(FirebaseContext)

  const onGoogleLogIn = async (e) => {
    const rs = await signInWithPopup(auth, googleProvider)
    const { uid = "", email = "", displayName: name = "" } = rs?.user || {}
    dispatch(logOn({ uid, email, name }))
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1em",
      }}
    >
      <Typography variant="h4" component={Link} to="/">
        Booldook
      </Typography>
      <Breadcrumbs>
        <Typography component={Link} to="/shop">
          SHOP
        </Typography>
        <Typography component={Link} to="/board">
          BOARD
        </Typography>
        <Typography component={Link} to="/chat">
          CHAT
        </Typography>
      </Breadcrumbs>
      <Box>
        <Button variant="contained" sx={{ mr: 1 }} onClick={onGoogleLogIn}>
          구글로그인
        </Button>
        <Button
          variant="contained"
          sx={{ mr: 1 }}
          onClick={() => dispatch(logOut())}
        >
          로그아웃
        </Button>
        <Button variant="outlined" sx={{ mr: 2 }}>
          회원가입
        </Button>
        <FormControlLabel
          control={
            <Switch
              checked={theme === "light"}
              onChange={() => {
                dispatch(toggleTheme())
              }}
              name="theme"
            />
          }
          label="Theme"
        />
      </Box>
    </Box>
  )
}
