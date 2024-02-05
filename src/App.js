import './css/App.css';
import Slider from "./components/Slider.js"

function App() {
  const images = [
    {
      src:"image1.jpg",
      caption:"Cool Beach"
    },
    {
      src:"image2.jpg",
      caption:"Beautiful Trees"

    },
    {
      src:"image3.jpg",
      caption:"Sunrise"
    },
    {
      src:"image4.jpg",
      caption:"Night Mountains"
    },
    {
      src:"image5.jpg",
      caption:"Beautiful Wallapaper"
    }
  ]
  return (
    <div className="App">
       <Slider images={images}/>
    </div>
  );
}

export default App;
