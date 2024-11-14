import { Box, Toolbar } from "@mui/material"
import { NavBar } from "../components"
import { SideBar } from "../components/SideBar"


const drawerWidth = 280

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}} className="animate__animated animate__fadeIn animate__faster">

        <NavBar drawerWidth={drawerWidth}/>

        <SideBar drawerWith={drawerWidth}/>

        <Box 
            component='main'
            sx={{flexGrow:1, p:3}}    
        >
            <Toolbar/>

            {children}
        </Box>

    </Box>
  )
}

