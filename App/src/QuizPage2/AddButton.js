import React from 'react';
import './AddButton.css'; // Import the CSS file for the button component
import addButtonImage from './addButton.png'; // Import the image

function AddButton() { // Adjusted component name
    const handleClick = () => {
        console.log('AddButton clicked');
    };

    return (
        <a href="/addButton" className="addButton" onClick={handleClick}>
            <img src={addButtonImage} alt="AddButton" /> {/* Render the image */}
        </a>
    );
}

export default AddButton; // Adjusted export name
