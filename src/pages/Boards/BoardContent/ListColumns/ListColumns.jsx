import AddCardIcon from '@mui/icons-material/AddCard'
import { Box, Button } from '@mui/material'
import Column from './Column/Column'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
const ListColumns = ({ columns }) => {
  return (
    <SortableContext items={columns?.map((el) => el._id)} strategy={horizontalListSortingStrategy}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          bgcolor: 'inherit',
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          '&::-webkit-scrollbar-track': { m: 2 }
        }}
      >
        {columns?.map((el) => (
          <Column key={el._id} column={el} />
        ))}

        {/* Add column */}
        <Box sx={{ height: 'fit-content', maxWidth: '300px', minWidth: '300px', mx: 2, borderRadius: '6px', bgcolor: '#ffffff3d' }}>
          <Button sx={{ width: '100%', justifyContent: 'flex-start', pl: 2.5, color: 'white' }} startIcon={<AddCardIcon />}>
            Add new column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  )
}

export default ListColumns
