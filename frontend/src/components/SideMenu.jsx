import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import MenuContent from './MenuContent'
import LogoutButton from './LogoutButton'
import PropTypes from 'prop-types'
import { useAuth } from 'react-oidc-context'

const SideMenu = ({ open, toggleDrawer }) => {
    const auth = useAuth()
    const isMobile = toggleDrawer !== undefined

    return (
        <Drawer
            variant={isMobile ? 'temporary' : 'permanent'}
            anchor={isMobile ? 'right' : 'left'}
            open={isMobile ? open : undefined}
            onClose={isMobile ? toggleDrawer(false) : undefined}
            sx={{
                display: isMobile ? undefined : { xs: 'none', md: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}
        >
            <Box>
                <Stack
                    direction="row"
                    sx={{
                        p: 2,
                        gap: 2,
                        alignItems: 'center',
                    }}
                >
                    <Avatar
                        sizes="small"
                        alt={auth.user?.profile.name}
                        src="/static/images/avatar/7.jpg"
                        sx={{ width: 36, height: 36 }}
                    />
                    <Box>
                        <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
                            {auth.user?.profile.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            {auth.user?.profile.email}
                        </Typography>
                    </Box>
                </Stack>
            </Box>
            <Divider />
            <Box sx={{ height: '100%' }}>
                <MenuContent />
            </Box>
            <Divider />
            <LogoutButton />
        </Drawer>
    )
}

SideMenu.propTypes = {
    open: PropTypes.bool,
    toggleDrawer: PropTypes.func,
}

export default SideMenu
