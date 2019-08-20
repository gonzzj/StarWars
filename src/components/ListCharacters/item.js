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
                            Personaje: {get(selectedItem, 'name', '')}
                        </Typography>
                        <Typography variant="subtitle1" component="span">
                            Color de ojos: {get(selectedItem, 'eyes', '')}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Altura: {get(selectedItem, 'height', '')} cm
                        </Typography>
                        <Typography variant="body2" component="p">
                            Peso: {get(selectedItem, 'weight', '')} kg
                        </Typography>
                    </CardContent>
                </Card>
            }
        </>
    )
}

export default Item;
