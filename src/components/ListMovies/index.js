import React, { useEffect } from 'react';
import GridContainer from '../GridContainer';
import Header from '../Header/withData';
import Item from './item';

const ListMovies = props => {
    const { getAllMovies, selectMovie, items, searchedItems, selectedItem } = props;

    useEffect(() => {
        !items && getAllMovies();
    });

    return (
        <Header>
            <GridContainer items={searchedItems || items} onSelect={selectMovie}>
                <Item selectedItem={selectedItem} />
            </GridContainer>
        </Header>
    )
}

export default ListMovies;
