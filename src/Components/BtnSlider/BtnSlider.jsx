import leftArrow from './icons/left-arrow.svg';
import rightArrow from './icons/right-arrow.svg';
import './BtnSlider.css';

function BtnSlider({direction, moveSlide}){
    return (
        <button 
        onClick={moveSlide}
        className={direction === 'prev' ? "btn-slide prev" : "btn-slide next"}>
            <img src={direction === 'prev' ? leftArrow : rightArrow} alt="icon de direction" />
        </button>
    )
}

export default BtnSlider;