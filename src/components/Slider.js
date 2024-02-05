import "../css/slider.css"
import LeftArrow from '../images/left-arrow.png'
import RightArrow from '../images/right-arrow.png'
import { useState } from "react"


const Slider = ({images}) => {
       
    const [imageIndex,setImageIndex] = useState(0)

    const selectedIndex = (index) =>{
        setImageIndex(index)
        console.log(index)
    }

    const prevImage = () => {
      setImageIndex((oldIndex) =>  oldIndex === 0 ? images.length - 1 : oldIndex - 1)
      console.log(imageIndex)

    }

    const nextImage = () =>{
        setImageIndex((newIndex) => newIndex === images.length -1 ? 0 : newIndex + 1)
        console.log(imageIndex)
    }

  return (
    <div className="slider-container">

           <div className="text-container">
               <h1>{images[imageIndex].caption}</h1>
           </div>

          <button className="leftArrowBtn" onClick={prevImage}><img src={LeftArrow}/></button>
          <img src={require(`../images/${images[imageIndex].src}`)} alt="Image Here"/>
          <button className="rightArrowBtn" onClick={nextImage}><img src={RightArrow}/></button>


          <div className="dots-container">
          {
              images.map((image, index) => (
                <span key={index} className={`dot ${index === imageIndex ? "active" : ""}` } onClick={() => {
                    selectedIndex(index) 
                    console.log(image)
                }}
                >{index + 1}</span>
              ))
            }
          </div>
    </div>
  )
}

export default Slider;
