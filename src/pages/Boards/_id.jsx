import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'
import AppBar from '@mui/material/AppBar'

const Board = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: '100vh', backgroundColor: 'primary.main' }}
    >
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}

export default Board
