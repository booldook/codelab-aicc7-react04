import { Container } from "@mui/material"
import HeaderWrapper from "./components/header/HeaderWrapper"
import HomePage from "./pages/HomePage"
import ShopPage from "./pages/ShopPage"
import BoardPage from "./pages/BoardPage"
import ChatPage from "./pages/ChatPage"
import { Routes, Route } from "react-router-dom"

export default function Containers() {
  return (
    <Container>
      <HeaderWrapper />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Container>
  )
}
