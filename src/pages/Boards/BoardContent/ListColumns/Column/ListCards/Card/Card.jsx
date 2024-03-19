import AttachmentIcon from '@mui/icons-material/Attachment'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import GroupIcon from '@mui/icons-material/Group'
import { Button, Card as MuiCard, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const Card = ({ card }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: card._id, data: { ...card } })
  const dndKitCardStyles = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? '1px solid orange' : undefined
  }

  const isCardActions = !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length
  return (
    <MuiCard ref={setNodeRef} style={dndKitCardStyles} {...attributes} {...listeners} sx={{ overflow: 'unset', cursor: 'pointer', boxShadow: '0 1px 5px rgba(0,0,0,.2)' }}>
      {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />}

      <CardContent>
        <Typography sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>{card?.title}</Typography>
      </CardContent>
      {isCardActions && (
        <CardActions sx={{ p: '0 4px 8px 4px' }}>
          {!!card?.memberIds?.length && (
            <Button size='small' startIcon={<GroupIcon />}>
              {card?.memberIds?.length}
            </Button>
          )}
          {!!card?.comments?.length && (
            <Button size='small' startIcon={<ModeCommentIcon />}>
              {card?.comments?.length}
            </Button>
          )}
          {!!card?.attachments?.length && (
            <Button size='small' startIcon={<AttachmentIcon />}>
              {card?.attachments?.length}
            </Button>
          )}
        </CardActions>
      )}
    </MuiCard>
  )
}

export default Card
