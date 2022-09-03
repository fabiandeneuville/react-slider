import { useState } from 'react';
import './Slider.css';
import dataSlider from './dataSlider';
import BtnSlider from '../BtnSlider/BtnSlider';
import { v4 as uuidv4 } from "uuid";

function Slider(){

    const [slideAnim, setSlideAnim] = useState({
        index: 1,
        inProgress: false
    })

    const nextSlide = () => { 
        if(slideAnim.index !== dataSlider.length && !slideAnim.inProgress){
            setSlideAnim({
                index: slideAnim.index + 1,
                inProgress : true
            })
            setTimeout(() => {
                setSlideAnim({index: slideAnim.index + 1, inProgress: false})
            }, 400)
        }
        else if(slideAnim.index === dataSlider.length && !slideAnim.inProgress){
            setSlideAnim({
                index: 1,
                inProgress : true
            })
            setTimeout(() => {
                setSlideAnim({index: 1, inProgress: false})
            }, 400)
        }
    }

    const prevSlide = () => {
        
        if(slideAnim.index !== 1 && !slideAnim.inProgress){
            setSlideAnim({
                index: slideAnim.index - 1,
                inProgress : true
            })
            setTimeout(() => {
                setSlideAnim({index: slideAnim.index - 1, inProgress: false})
            }, 400)
        } else if (slideAnim.index === 1 && !slideAnim.inProgress){
            setSlideAnim({
                index: dataSlider.length,
                inProgress: true
            })
            setTimeout(() => {
                setSlideAnim({index: dataSlider.length, inProgress: false})
            }, 400)
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

            <div className='container-dots'>
                {Array.from({length: 5}).map((item, index) => {
                    return (
                        <div
                        onClick={() => setSlideAnim({index: index + 1})}
                        key={uuidv4()}
                        className={slideAnim.index === index + 1 ? 'dot active' : 'dot'} ></div>
                    )
                })}
            </div>
        </div>
    )

}

export default Slider