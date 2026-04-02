import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded'
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded'
import { useNavigate, useLocation } from 'react-router-dom'

const mainListItems = [
    { text: 'Home', icon: <HomeRoundedIcon />, path: '/dashboard/home' },
    { text: 'Analytics', icon: <AnalyticsRoundedIcon />, path: '/dashboard/analytics' },
    { text: 'Patients', icon: <PeopleRoundedIcon />, path: '/dashboard/patients' },
]

const MenuContent = () => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
            <List dense>
                {mainListItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            selected={location.pathname === item.path}
                            onClick={() => navigate(item.path)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Stack>
    )
}

export default MenuContent