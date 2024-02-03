import { useContext } from 'react';

import { Card, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';

import { DataContext } from '../../context/DataProvider';

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    box-shadow: none;
`

const Note = ({ note }) => {

    const { notes, setNotes, setAcrchiveNotes, setDeleteNotes } = useContext(DataContext);

    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setAcrchiveNotes(prevArr => [note, ...prevArr]);
    }

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeleteNotes(prevArr => [note, ...prevArr]);
    }

    return (
        <StyledCard>
                <CardContent>
                    <Typography>{note.heading}</Typography>
                    <Typography>{note.text}</Typography>
                </CardContent>
                <CardActions>
                    <IconButton>
                    <Archive 
                        fontSize="small" 
                        style={{ marginLeft: 'auto' }} 
                        onClick={() => archiveNote(note)}
                    />
                    </IconButton>
                 <IconButton>
                 <Delete 
                        fontSize="small"
                        onClick={() => deleteNote(note)}
                    />
                 </IconButton>
                   
                </CardActions>
        </StyledCard>
    )
}

export default Note;