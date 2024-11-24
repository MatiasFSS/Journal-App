import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { SideBarItem } from "./"

export const SideBar = ({drawerWith = 240}) => {

    const {displayName} = useSelector(state => state.auth)
    const {notes} = useSelector(state => state.journal)

    // console.log(notes)
    

  return (
    <Box
        component='nav'
        sx={{width:{sm:drawerWith}, flexShrink:{sm:0}}}
    >
        <Drawer
            variant='permanent'
            open
            sx={{
                display:{xs:'block'},
                '& .MuiDrawer-paper': {boxSizing:'border-box', width:drawerWith}
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>{displayName}</Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    notes.map(note =>(
                        <SideBarItem {...note} key={note.id}/>
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}


