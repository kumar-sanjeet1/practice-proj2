import React from 'react';
import {connect } from 'react-redux';
import { searchAnimie } from '../anime.services';



const LoadMoreButton = (props) => (
    <button className='load-more' onClick={e => {
        loadmoreResults(props.search, props.updateAnime, props.updateSearch)
    }}> Load more </button>
)

const loadmoreResults = (search, updateAnime, updateSearch) => {
    console.log('[age', search);
    searchAnimie(search.query, search.page, updateAnime);
    updateSearch(search.query);
    
}


const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps);
    return {
        updateAnime: (animes) => dispatch({ type: 'UPDATE_AMIMES', payload: animes }),
        updateSearch: (query) => dispatch({ type: 'UPDATE_SEARCH', payload: query })
    }
}

const mapStateToProps = ({ search }) => ({
    search
})

export default connect(mapStateToProps, mapDispatchToProps)(LoadMoreButton)
