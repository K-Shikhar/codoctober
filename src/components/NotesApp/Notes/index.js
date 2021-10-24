import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from '../NotesList';
import Search from '../Search';
import Header from '../Header';
import styles from './Notes.module.css'

const App = () => {
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: 'This is a Sample Note!',
            date: '24/10/2021',
        },
    ]);

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const savedNotes = JSON.parse(
            localStorage.getItem('react-notes-app-data')
        );

        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            'react-notes-app-data',
            JSON.stringify(notes)
        );
    }, [notes]);

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    return (
        <div className={styles["parent"]}>
            <div className={styles['container']}>
                <Header />
                <Search handleSearchNote={setSearchText} />
                <NotesList
                    notes={notes.filter((note) =>
                        note.text.toLowerCase().includes(searchText)
                    )}
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                />
            </div>
        </div>
    );
};

export default App;
