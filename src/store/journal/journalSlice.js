import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,

        //active: null,
        // active: {
        //     id:'ABC123',
        //     title: '',
        //     body: '',
        //     date:1234567,
        //     imageUrls:[]  // foto1, foto2, foto3
        // }
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true
        },
        addNewEmptyNote: (state, action) => {
           state.notes.push(action.payload)
           state.isSaving = false
        },
        setActiveNote: (state, action) => {
            state.active = action.payload
            state.messageSaved = ''
        },
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        setSaving: (state) => {
            state.isSaving = true
            state.messageSaved = ''
            //Mensaje de error

        },
        updateNote: (state, action) => {
            state.isSaving = false
            state.notes = state.notes.map(note => {

                if(note.id === action.payload.id){
                    return action.payload
                }

                return note
            })

            state.messageSaved = `${action.payload.title}, actualizada correctamente`

            //Mensaje de actualizacion
        },
        setPhotosToActiveNote: (state, action ) => {

            state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
            state.isSaving = false

        },
        clearNotesLogout: (state) => {
            state.isSaving = false
            state.messageSaved = ''
            state.notes = []
            state.active = null
        },
        deleteNoteById:(state, action) => {

        }
    }
});
export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById, setPhotosToActiveNote, clearNotesLogout } = journalSlice.actions;