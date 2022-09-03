import { useState } from 'react';
import './Slider.css';
import dataSlider from './dataSlider';
import BtnSlider from '../BtnSlider/BtnSlider';

function Slider(){

    const [slideAnim, setSlideAnim] = useState({
        index: 1,
        inProgress: false
    })

    const nextSlide = () => { 
        if(slideAnim.index !== dataSlider.length){
            setSlideAnim({
                index: slideAnim.index + 1,
                inProgress : true
            })
        }
        else if(slideAnim.index === dataSlider.length){
            setSlideAnim({
                index: 1,
                inProgress : true
            })
        }
    }

    const prevSlide = () => {
        
        if(slideAnim.index !== 1){
            setSlideAnim({
                index: slideAnim.index - 1,
                inProgress : true
            })
        } else if (slideAnim.index === 1){
            setSlideAnim({
                index: dataSlider.length,
                inProgress: true
            })
        }
    }

    return (
        <div className='container-slider'>
            {dataSlider.map((image, index) => {
                return (
                    <div
                    key={image.id}
                    className={ slideAnim.index === index + 1 ? "slide active-anim" : "slide" }
                    >
                        <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt={image.title}/>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={'next'}/>
            <BtnSlider moveSlide={prevSlide} direction={'prev'}/>
        </div>
    )

}

export default Slider