import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const LeftBox = () => {
    const location = useLocation().pathname;
    let actClas1, actClas2, actClas3, actClas4, actClas5 = "";
    (location === '/home') ? actClas1 = "active" : actClas1 = " ";
    (location === '/opt1') ? actClas2 = "active" : actClas2 = " ";
    (location === '/opt2') ? actClas3 = "active" : actClas3 = " ";
    (location === '/opt3') ? actClas4 = "active" : actClas4 = " ";
    (location === '/opt4') ? actClas5 = "active" : actClas5 = " ";
    return (
        <div className="LeftBox">
            <NavLink to="/home" className={`sideBtn ${actClas1}`} >Home</NavLink>
            <NavLink to="/opt1" className={`sideBtn ${actClas2}`}>Option 1</NavLink>
            <NavLink to="/opt2" className={`sideBtn ${actClas3}`}>Option 2</NavLink>
            <NavLink to="/opt3" className={`sideBtn ${actClas4}`}>Option 3</NavLink>
            <NavLink to="/opt4" className={`sideBtn ${actClas5}`}>Option 4</NavLink>
        </div>
    );
};
export default LeftBox;