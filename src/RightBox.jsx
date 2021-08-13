import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


const ImgBoxChild = (props) => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className='imgBoxChild' data-aos={props.aosCls}>
            <img src={props.src} alt={props.src} draggable='false' />
        </div>
    );
};

const RightBoxCon = (props) => {

    return (
        <div className={`RightBoxCon ${props.classs}`}>
            <h1 style={{ textAlign: "center", }} data-aos="fade-up">{props.Name}</h1>
            <p style={{ textAlign: "center", marginTop: "10px" }} data-aos="fade-down">{props.para}</p>
            <div className='imgBox'>
                <ImgBoxChild src={props.url1} aosCls="fade-right" />
                <ImgBoxChild src={props.url2} aosCls="fade-right" />
                <ImgBoxChild src={props.url3} aosCls="fade-left" />
                <ImgBoxChild src={props.url4} aosCls="fade-left" />
                <ImgBoxChild src={props.url5} aosCls="fade-right" />
                <ImgBoxChild src={props.url6} aosCls="fade-right" />
                <ImgBoxChild src={props.url7} aosCls="fade-left" />
                <ImgBoxChild src={props.url8} aosCls="fade-left" />
            </div>

        </div>
    );
};



export default RightBoxCon;