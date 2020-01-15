//ImageViewer.js
//Importing the React library
import React from 'react';
//Importing our component-folder that contains the three files
import DwvComponent from './DwvComponent';
// import './test.css'

function ImageViewer() {

    return (
        <div>
            <h4>Image View</h4>
            <DwvComponent />
            <DwvComponent />
            {/* <div id="btengan"><DwvComponent /></div> */}
            
        </div>
    )
}

export default ImageViewer;