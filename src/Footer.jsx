import React from 'react';
const Footer = () => {
    return (
        <div>
            <div className="Footer" id="Footer" style={{ paddingBottom: "20px" }}>
                <div className="logoDiv" >
                    <strong>
                        <a href="/">
                            <h1 style={{marginBottom:'-30px'}}>Now TV</h1>
                        </a>
                    </strong>
                </div>
                <div>
                    <p style={{ textAlign: 'right',marginRight:'50px' }}>Copy Right @2021 All Rights Reserved | Fastech</p>
                </div>
            </div>
        </div>
    );
};
export default Footer;