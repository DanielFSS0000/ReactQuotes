import React from 'react'

export const NextBtn = (props) => {

    return ( 
        <button className='btnShufle' style={{backgroundColor: props.bg}} onClick={props.random}>
            <i className="fa-solid fa-shuffle"></i>
            
        </button> 
    )
}
