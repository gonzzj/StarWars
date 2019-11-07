import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { get, isEmpty, map } from 'lodash';
import { messages } from '../../messages/messages';

const Item = ({ selectedItem }) => {
    return (
        <>
            {!isEmpty(selectedItem) && 
                <Card>
                    <CardContent>
                        {map(selectedItem, (item, key) => 
                            <Typography variant={item.variant} component={item.component} key={key}>
                                {get(messages.item, key, '')}: {get(item, 'text', '')}
                            </Typography>
                        )}
                    </CardContent>
                </Card>
            }
        </>
    )
}

export default Item;
