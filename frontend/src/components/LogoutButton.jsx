import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'

const LogoutButton = () => {
    const signOutRedirect = () => {
        const clientId = "2g81gs3e1d9lkpb28i88jk41ru";
        const logoutUri = "http://localhost:5173";
        const cognitoDomain = "https://us-west-2bw4sqvuxd.auth.us-west-2.amazoncognito.com";
        window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
    }
    
    return (
        <Stack sx={{ p: 2 }}>
            <Button
                variant="outlined"
                startIcon={<LogoutRoundedIcon />}
                onClick={signOutRedirect}
            >
                Logout
            </Button>
        </Stack>
    )
}

export default LogoutButton
