import React, { useEffect } from 'react';
import GridContainer from '../GridContainer';
import Header from '../Header/withData';
import Item from './item';

const ListCharacters = props => {
    const { list, getAllItems } = props;
    const selectedCategory = list.selectedCategory;

    useEffect(() => {
        getAllItems(selectedCategory);
    }, [selectedCategory]);
    
    return (
        <Header>
            <GridContainer>
                <Item selectedItem={list.selectedItem} />
            </GridContainer>
        </Header>
    )
}

export default ListCharacters;
