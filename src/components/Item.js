import { Checkbox, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Paper } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box } from '@mui/system'
const Item = ({ item, onDelete, onCheckedToggle }) => {
    return (
        <div>
            <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
                <List>
                    <Paper elevation={1}>
                        <ListItem >
                            <Checkbox edge='start' checked={item.checked} onClick={() => { onCheckedToggle(item.id) }}></Checkbox>
                            <ListItemText primary={item.text} secondary={`Quantity: ${item.quantity}`} />
                            <IconButton aria-label='delete' edge='end'><DeleteIcon /></IconButton>
                        </ListItem>
                    </Paper>
                </List>
            </Box>
        </div>

    )
}

export default Item
