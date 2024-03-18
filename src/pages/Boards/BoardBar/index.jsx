import PersonAddIcon from '@mui/icons-material/PersonAdd'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { Avatar, AvatarGroup, Button, Chip, Tooltip, capitalize } from '@mui/material'
import Box from '@mui/material/Box'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

const BoardBar = ({ board }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1,
        paddingX: 2,
        overflowX: 'auto',
        borderBottom: '1px solid white',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label={board?.title}
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label={capitalize(board?.type)}
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label='Add To Google Drive'
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label='Automation'
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label='Filter'
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant='outlined'
          startIcon={<PersonAddIcon />}
          sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white' } }}
        >
          Invited
        </Button>

        <AvatarGroup
          max={3}
          sx={{
            '& .MuiAvatar-root': {
              width: 30,
              height: 30,
              fontSize: 16,
              color: 'white',
              cursor: 'pointer'
            }
          }}
        >
          <Tooltip title='Avatar'>
            <Avatar
              alt='Avatar'
              src='https://mui.com/static/images/avatar/1.jpg'
            />
          </Tooltip>
          <Tooltip title='Avatar'>
            <Avatar
              alt='Avatar'
              src='https://mui.com/static/images/avatar/2.jpg
'
            />
          </Tooltip>
          <Tooltip title='Avatar'>
            <Avatar
              alt='Avatar'
              src='https://mui.com/static/images/avatar/3.jpg'
            />
          </Tooltip>
          <Tooltip title='Avatar'>
            <Avatar
              alt='Avatar'
              src='https://mui.com/static/images/avatar/4.jpg
'
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
