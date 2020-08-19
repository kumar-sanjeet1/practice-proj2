

import React from 'react';
import AnimieList from './list.component';
import SearchAnime from './search.component';
import Button from './button.component'
import { connect } from 'react-redux';

const Dashboard = ({ animies}) => {
    return (
        <div className="dashboard">
            <SearchAnime />
            <AnimieList />
            {
                animies.length ? <Button /> :null
            }
            
        </div>
    )
}


const mapStateToProps = (state) => ({
    animies: state.animes
})


export default connect(mapStateToProps)(Dashboard)