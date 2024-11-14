import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"

export const SideBar = ({drawerWith = 240}) => {

    const {displayName} = useSelector(state => state.auth)
    

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
                    ['Enero','Febrero', 'Marzo', 'Abril'].map(text =>(
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemButton>
                                    <TurnedInNot/>
                                </ListItemButton>
                                <Grid container>
                                    <ListItemText primary={text}/>
                                    <ListItemText secondary={'Aute ad ipsum nulla ea tempor ex aliqua pariatur anim fugiat ipsum pariatur.'}/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}


