import React, { useEffect } from 'react';
import GridContainer from '../GridContainer';
import Header from '../Header/withData';
import Item from './item';

const ListCharacters = props => {
    const { selectedCategory, selectedItem, getAllItems } = props;

    useEffect(() => {
        getAllItems(selectedCategory);
    }, [selectedCategory]);
    
    return (
        <Header>
            <GridContainer>
                <Item selectedItem={selectedItem} />
            </GridContainer>
        </Header>
    )
}

export default ListCharacters;
