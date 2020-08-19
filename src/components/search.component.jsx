import React from 'react';
import { connect } from 'react-redux';
import { searchAnimie } from '../anime.services';


const SearchAnime = (props) => {
    console.log('search', props);
    const { page, updateAnime, updateSearch, setDefault }  = props
    return (
        <div className="search-box">
            <input type="text" placeholder='Search Anime Here' onKeyDown={e => {
                handleSearch(e, updateAnime, page, updateSearch, setDefault)
            }} />
        </div>
    )
}

const handleSearch = (e, update, page, updateSearch, setDefault) => {
    if (e.key === 'Enter') {
        setDefault()
        searchAnimie(e.target.value, page, update);
        updateSearch(e.target.value);
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps);
    return {
        updateAnime: (animes) => dispatch({ type: 'UPDATE_AMIMES', payload: animes}),
        updateSearch: (query) => dispatch({ type: 'UPDATE_SEARCH', payload: query }),
        setDefault: () => dispatch({ type: 'DEFAULT'})
    }
}

const mapStateToProps = ({page}) => ({
    page
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchAnime)


