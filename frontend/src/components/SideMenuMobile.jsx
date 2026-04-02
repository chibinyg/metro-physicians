import Avatar from '@mui/material/Avatar'
import PropTypes from 'prop-types'
import Divider from '@mui/material/Divider'
import LogoutButton from './LogoutButton'
import Drawer from '@mui/material/Drawer'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import MenuContent from './MenuContent'


const SideMenuMobile = ({ open, toggleDrawer }) => {
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
            sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 } }}
        >
            <Stack
                sx={{
                    maxWidth: '85dvw',
                    height: '100%',
                }}
            >
                <Stack direction="row" sx={{ p: 2, gap: 2 }}>
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
                </Stack>
                <Divider />
                <LogoutButton />
            </Stack>
        </Drawer>
    )
}

SideMenuMobile.propTypes = {
    open: PropTypes.bool,
    toggleDrawer: PropTypes.func.isRequired,
}

export default SideMenuMobile