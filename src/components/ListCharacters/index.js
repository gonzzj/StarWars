import React, { useEffect } from 'react';
import GridContainer from '../GridContainer';
import Header from '../Header/withData';
import Item from './item';

const ListCharacters = props => {
    const { getAllCharacters, selectCharacter, items, searchedItems, selectedItem } = props;

    useEffect(() => {
        !items && getAllCharacters();
    });
    
    return (
        <Header>
            <GridContainer items={searchedItems || items} onSelect={selectCharacter} >
                <Item selectedItem={selectedItem} />
            </GridContainer>
        </Header>
    )
}

export default ListCharacters;
