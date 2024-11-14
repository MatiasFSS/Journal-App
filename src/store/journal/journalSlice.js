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
        },
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        setSaving: (state) => {

        },
        updateNote: (state, action) => {

        },
        deleteNoteById:(state, action) => {

        }
    }
});
export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = journalSlice.actions;