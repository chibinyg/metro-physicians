import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import AppNavbar from '../components/AppNavbar'
import MainGrid from '../components/MainGrid'
import SideMenu from '../components/SideMenu'

const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <SideMenu />
            <AppNavbar />
            {/* Main content */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    overflow: 'auto',
                }}
            >
                <Stack
                    spacing={2}
                    sx={{
                        alignItems: 'center',
                        mx: 3,
                        pb: 5,
                        mt: { xs: 8, md: 0 },
                    }}
                >
                    <MainGrid />
                </Stack>
            </Box>
        </Box>
    )
}

export default Dashboard