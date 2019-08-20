import React from 'react';
import Grid from '@material-ui/core/Grid';
import ItemList from '../Itemlist';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    body: {
        marginTop: theme.spacing(8)
    }
}));

const GridContainer = props => {
    const { items, onSelect, children } = props;

    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.body}>
            <Grid item xs={12} md={5}>
                <ItemList items={items} onSelect={onSelect} />
            </Grid>
            <Grid item xs={12} md={7}>
                {children}
            </Grid>
        </Grid>
    )
}

export default GridContainer;
