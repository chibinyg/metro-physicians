import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SideMenuMobile from './SideMenuMobile'

const AppNavbar = () => {
    const [open, setOpen] = useState(false)

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    }

    return (
        <AppBar
            position="fixed"
            color="default"
            sx={{
                display: { xs: 'auto', md: 'none' },
                boxShadow: 0,
                bgcolor: 'background.paper',
                borderBottom: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                    Dashboard
                </Typography>
                <IconButton aria-label="open drawer" onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
                <SideMenuMobile open={open} toggleDrawer={toggleDrawer} />
            </Toolbar>
        </AppBar>
    )
}

export default AppNavbar