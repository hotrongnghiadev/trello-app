import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'

const BoardContent = ({ board }) => {
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        py: '10px'
      }}
    >
      <ListColumns columns={board?.columns} />
    </Box>
  )
}

export default BoardContent
