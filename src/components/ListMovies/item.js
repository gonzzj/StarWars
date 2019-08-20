import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { get } from 'lodash';

const Item = ({ selectedItem }) => {
    return (
        <>
            {selectedItem && 
                <Card>
                    <CardContent>
                        <Typography variant="h4" component="h2">
                            Película: {get(selectedItem, 'name', '')}
                        </Typography>
                        <Typography variant="subtitle1" component="span">
                            Director: {get(selectedItem, 'director', '')}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Productores: {get(selectedItem, 'producers', '')}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Fecha de estreno: {get(selectedItem, 'release_date', '')}
                        </Typography>
                    </CardContent>
                </Card>
            }
        </>
    )
}

export default Item;
