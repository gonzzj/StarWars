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

const CategoriesList = props => {
    const { items, selectItem, searchedItems, list } = props;
    const [selectedIndex, setSelectedIndex] = useState();
    const listItems = searchedItems || items || [];
    const classes = useStyles();
    
    return (
        <Paper>
            {list?.showLoading && <CircularProgress className={classes.progress} />}
            <List component="nav">
                {map(listItems, (item, key) =>
                    <ListItem
                    button
                    selected={selectedIndex === key}
                    key={key}
                    onClick={() => {
                        selectItem(item)
                        setSelectedIndex(key)
                    }}>
                        <ListItemText primary={item.name.text} />
                    </ListItem>
                )}
            </List>
        </Paper>
    );
};

export default CategoriesList;