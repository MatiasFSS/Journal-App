import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal"
import { NoteView } from "../views/NoteView"

export const JournalPage = () => {

  const dispatch = useDispatch()
  const {isSaving, active: notes} = useSelector(state => state.journal)

  const onClickNewNote = () => {
    dispatch(startNewNote())
  }
  return (
    <JournalLayout>
      
      {
        (!!notes)
        ?<NoteView/>
        :<NothingSelectedView/> 
      }

      {/* <NothingSelectedView/> */}
      {/* <NoteView/> */}

      <IconButton
        onClick={onClickNewNote}
        disabled={isSaving}
        size='large'
        sx={{
          color:'white',
          backgroundColor:'error.main',
          ':hover':{backgroundColor:'error.main', opacity:0.9},
          position:'fixed',
          right:50,
          bottom:50

        }}
      >
        <AddOutlined sx={{fontSize:30}}/>

      </IconButton>
    </JournalLayout>
  )
}
