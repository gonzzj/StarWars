import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/CardContent';
import Header from '../Header/withData';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    body: {
        paddingTop: theme.spacing(8)
    }
}));

const Error = () => {
    const classes = useStyles();

    return (
        <Header>
            <Card className={classes.body}>
                <CardContent>
                    <Typography variant="h2" component="h2">
                        [404] La página no existe
                    </Typography>
                </CardContent>
            </Card>
        </Header>
    )
}

export default Error;
