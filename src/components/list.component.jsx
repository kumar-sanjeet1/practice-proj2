
import React from 'react';
import {connect } from 'react-redux'

const AnimieList = (props) => {
    console.log('state.animes', props);
    const { animes }  = props;
    return (
        <div className="anime-list"> 
            {animes.map((ani,index) => (
            <Animie key={index} info={ani} />
        ))}
        </div>
    )
}

const Animie = ({info}) => {
    let { title, url, image_url} = info;
    return (
        <div className="anime">
            <a href={url}>
                <img src={image_url} alt={title} />
                <h4>{title}</h4>
            </a>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('state here', state);
    return {
        animes: state.animes
    }
}


export default connect(mapStateToProps)(AnimieList);




