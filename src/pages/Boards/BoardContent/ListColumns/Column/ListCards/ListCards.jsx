import { Box } from '@mui/material'
import Card from './Card/Card'

const ListCards = ({ cards }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        p: '0 5px',
        m: '0 5px',
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${theme.trello.columnHeaderHeight} - ${theme.trello.columnFooterHeight})`,
        '&::-webkit-scrollbar-thumb': {
          background: '#ced0da',
          borderRadius: '4px'
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '#bfc2cf'
        }
      }}
    >
      {cards?.map((el) => (
        <Card
          key={el._id}
          card={el}
        />
      ))}
    </Box>
  )
}

export default ListCards
