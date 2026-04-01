import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "react-oidc-context"
import { CircularProgress, Box } from '@mui/material';

const ProtectedRoute = () => {

    const auth = useAuth()
    
    if (auth.isLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <CircularProgress />
            </Box>
        )
    }

    if (auth.error) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <p>Error: {auth.error.message}</p>
            </Box>
        )
    }

    if (!auth.isAuthenticated) {
        return <Navigate to="/" />
    }

    return <Outlet />   
  
}

export default ProtectedRoute