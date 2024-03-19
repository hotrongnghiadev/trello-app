import { Box } from '@mui/material'
import Card from './Card/Card'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

const ListCards = ({ cards }) => {
  return (
    <SortableContext items={cards?.map((el) => el._id)} strategy={verticalListSortingStrategy}>
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
          <Card key={el._id} card={el} />
        ))}
      </Box>
    </SortableContext>
  )
}

export default ListCards
