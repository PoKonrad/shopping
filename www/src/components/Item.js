import { Checkbox, Fade, IconButton, List, ListItem, ListItemText, Paper } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box } from '@mui/system'
import { useState } from 'react'

const Item = ({ item, onDelete, onCheckedToggle }) => {
    const [shown, setShown] = useState(true)
    return (
        <div>
            <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
                <List>
                    <Fade in={shown}>
                        <Paper elevation={1}>
                            <ListItem>
                                <Checkbox edge='start' checked={item.checked} onClick={() => { onCheckedToggle(item.id) }}></Checkbox>
                                <ListItemText primary={item.text} secondary={`Quantity: ${item.quantity}`} />
                                <IconButton aria-label='delete' edge='end' onClick={() => { setShown(false); setTimeout(() => { onDelete(item.id); }, 400); }}><DeleteIcon /></IconButton>
                            </ListItem>
                        </Paper>
                    </Fade>
                </List>
            </Box>
        </div>

    )
}

export default Item
