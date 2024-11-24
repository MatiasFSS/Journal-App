import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal/thunks"
import Swal from "sweetalert2"
import'sweetalert2/dist/sweetalert2.css'


export const NoteView = () => {

    const dispatch = useDispatch()
    const {active: note, messageSaved, isSaving} = useSelector(state => state.journal)
    const {body, title, onInputChange, formState, date} = useForm(note)
    
    const dateString = useMemo(() => {

        const newDate = new Date(date)

        return newDate.toUTCString()

    }, [date])

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState]);

    useEffect(() => {
        if(messageSaved.length > 0){
            Swal.fire('Nota Actualizada', messageSaved, 'success')
        }
    }, [messageSaved]);

    const fileInputRef = useRef()
    const onSaveNote = () => {
        dispatch(startSaveNote())
    }

    const onFileInputChange = ({target}) => {
        if(target.files === 0) return

        // console.log('Subiendo archivos')
        dispatch(startUploadingFiles(target.files))
    }

    const onDelete = () => {
        dispatch(startDeletingNote())
    }

    return (
        <Grid 
            className="animate__animated animate__fadeIn animate__faster"
            container 
            direction='row' 
            justifyContent='space-between' 
            alignItems='center' 
            sx={{mb:1}}
        >
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>

            <Grid item>
                <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    onChange={onFileInputChange}
                    style={{display:'none'}}
                />
                <IconButton
                    color="primary"
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}
                >
                    <UploadOutlined/>
                </IconButton>
                <Button 
                    onClick={onSaveNote}
                    disabled = {isSaving}
                    color='primary' 
                    sx={{p:2}}
                >
                    <SaveOutlined sx={{fontSize:30, mr:1}}/>
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label="Titulo"
                    sx={{border:'none', mb:1}}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el dia de hoy?"
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <Grid container justifyContent='end'>
                <Button
                    onClick={onDelete}
                    sx={{mt:2}}
                    color="error"
                >
                    <DeleteOutline/>
                    BORRAR
                </Button>
            </Grid>

            {/* Galeria de imagenes */}
            <ImageGallery images={note.imageUrls}/>

        </Grid>
    )
}


