import { Typography, Breadcrumbs, Box } from "@mui/material"
import { Link } from "react-router-dom"

export default function HeaderWrapper() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
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
    </Box>
  )
}
