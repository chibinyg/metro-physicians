import Avatar from '@mui/material/Avatar'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import MenuContent from './MenuContent'


const SideMenuMobile = ({open, toggleDrawer}) => {
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
        >
            <Stack
                sx={{
                    maxWidth: '85dvw',
                    height: '100%',
                }}
            >
                <Stack direction="row" sx={{ p: 2, pb: 0, gap: 1 }}>
                    <Stack
                        direction="row"
                        sx={{ gap: 1, alignItems: 'center', flexGrow: 1, p: 1 }}
                    >
                        <Avatar
                            sizes="small"
                            alt="Riley Carter"
                            src="/static/images/avatar/7.jpg"
                            sx={{ width: 24, height: 24 }}
                        />
                        <Typography component="p" variant="h6">
                            Riley Carter
                        </Typography>
                    </Stack>
                </Stack>
                <Divider />
                <Stack sx={{ flexGrow: 1 }}>
                    <MenuContent />
                    <Divider />
                </Stack>
                <Stack sx={{ p: 2 }}>
                    <Button variant="outlined" fullWidth startIcon={<LogoutRoundedIcon />}>
                        Logout
                    </Button>
                </Stack>
            </Stack>
        </Drawer>
    )
}

SideMenuMobile.propTypes = {
    open: PropTypes.bool,
    toggleDrawer: PropTypes.func.isRequired,
}

export default SideMenuMobile