import { Box, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import background from '../assets/background.png'
import { useAuth } from 'react-oidc-context'

const SignIn = () => {

    const auth = useAuth()

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
            }}
        >
            <Box sx={{ position: 'absolute', top: 20, right: 20 }}>
                <Button
                    variant="contained"
                    startIcon={<LoginIcon />}
                    size="large"
                    sx={{
                        borderRadius: 2,
                    }}
                    onClick={() => auth.signinRedirect()}
                >
                    SIGN IN
                </Button>
            </Box>
        </Box>
    )
}

export default SignIn
