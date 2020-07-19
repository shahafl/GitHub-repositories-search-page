import React from 'react';
import loaderSrc from '../../assets/loader.gif';

const Loader = props => (
    <div style={{ textAlign:'center' }}>
       <img alt="loader" src={loaderSrc}/>
    </div>
)

export default Loader;