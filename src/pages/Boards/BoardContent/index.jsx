import AttachmentIcon from '@mui/icons-material/Attachment'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import GroupIcon from '@mui/icons-material/Group'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import AddCardIcon from '@mui/icons-material/AddCard'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Tooltip } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'
import { useState } from 'react'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

const BoardContent = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        py: '10px'
      }}
    >
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
        <Box
          sx={{
            minWidth: '300px',
            maxWidth: '300px',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
            ml: 2,
            borderRadius: '6px',
            height: 'fit-content',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
          }}
        >
          <Box
            sx={{
              height: COLUMN_HEADER_HEIGHT,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Typography
              variant='h3'
              sx={{
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Column Title
            </Typography>
            <Box>
              <Tooltip title='More options'>
                <ExpandMoreIcon
                  sx={{ cursor: 'pointer', color: 'text.primary' }}
                  id='basic-column-dropdown'
                  aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                />
              </Tooltip>
              <Menu
                id='basic-menu-column-dropdown'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AddCardIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Add new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <DeleteForeverIcon fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Remove this column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize='small' />
                  </ListItemIcon>
                  <ListItemText>Archive this column</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              p: '0 5px',
              m: '0 5px',
              overflowX: 'hidden',
              overflowY: 'auto',
              maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_HEADER_HEIGHT})`,
              '&::-webkit-scrollbar-thumb': {
                background: '#ced0da',
                borderRadius: '4px'
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: '#bfc2cf'
              }
            }}
          >
            <Card sx={{ overflow: 'unset', cursor: 'pointer', boxShadow: '0 1px 5px rgba(0,0,0,.2)' }}>
              <CardMedia
                sx={{ height: 140 }}
                image='https://mui.com/static/images/cards/contemplative-reptile.jpg'
                title='green iguana'
              />
              <CardContent>
                <Typography sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>Lizard</Typography>
              </CardContent>
              <CardActions sx={{ p: '0 4px 8px 4px' }}>
                <Button
                  size='small'
                  startIcon={<GroupIcon />}
                >
                  20
                </Button>
                <Button
                  size='small'
                  startIcon={<ModeCommentIcon />}
                >
                  15
                </Button>
                <Button
                  size='small'
                  startIcon={<AttachmentIcon />}
                >
                  10
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ overflow: 'unset', cursor: 'pointer', boxShadow: '0 1px 5px rgba(0,0,0,.2)' }}>
              <CardContent>
                <Typography sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>Lizard</Typography>
              </CardContent>
            </Card>
            <Card sx={{ overflow: 'unset', cursor: 'pointer', boxShadow: '0 1px 5px rgba(0,0,0,.2)' }}>
              <CardContent>
                <Typography sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>Lizard</Typography>
              </CardContent>
            </Card>
            <Card sx={{ overflow: 'unset', cursor: 'pointer', boxShadow: '0 1px 5px rgba(0,0,0,.2)' }}>
              <CardContent>
                <Typography sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>Lizard</Typography>
              </CardContent>
            </Card>
            <Card sx={{ overflow: 'unset', cursor: 'pointer', boxShadow: '0 1px 5px rgba(0,0,0,.2)' }}>
              <CardContent>
                <Typography sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>Lizard</Typography>
              </CardContent>
            </Card>
            <Card sx={{ overflow: 'unset', cursor: 'pointer', boxShadow: '0 1px 5px rgba(0,0,0,.2)' }}>
              <CardContent>
                <Typography sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>Lizard</Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Button startIcon={<AddCardIcon />}>Add new card</Button>
            <Tooltip title='Drag to move'>
              <DragHandleIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BoardContent
