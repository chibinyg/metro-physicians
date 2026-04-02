import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import MenuContent from './MenuContent'
import LogoutButton from './LogoutButton'

const SideMenu = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                display: {
                    xs: 'none', md: 'block'
                },
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
                        alt="Riley Carter"
                        src="/static/images/avatar/7.jpg"
                        sx={{ width: 36, height: 36 }}
                    />
                    <Box>
                        <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
                            Riley Carter
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            riley@email.com
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

export default SideMenu