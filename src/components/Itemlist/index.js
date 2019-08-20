import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { map } from 'lodash';

const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(4)
    }
}));

const ItemList = props => {
    const { items, onSelect } = props;
    const [selectedIndex, setSelectedIndex] = useState();

    const classes = useStyles();

    return (
        <Paper>
            { !items && <CircularProgress className={classes.progress} />}
            <List component="nav">
                {map(items, (item, key) =>
                    <ListItem
                    button
                    selected={selectedIndex === key}
                    key={key}
                    onClick={() => {
                        onSelect(item)
                        setSelectedIndex(key)
                    }}>
                        <ListItemText primary={item.name} />
                    </ListItem>
                )}
            </List>
        </Paper>
    );
};

export default ItemList;