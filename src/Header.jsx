import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="header" id="header">
                <div className="logoDiv" >
                    <strong>
                        <a href="/">
                            <h1>Now TV</h1>
                        </a>
                    </strong>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#" className="active" >Example 1</a>
                        </li>
                        <li>
                            <a href="#">Example 2</a>
                        </li>
                        <li>
                            <a href="#">Example 3</a>
                        </li>
                        <li>
                            <a href="#">Example 4</a>
                        </li>
                        <li>
                            <a href="#">Example 5</a>
                        </li>
                        <li>
                            <a href="#">Example 6</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
export default Header;