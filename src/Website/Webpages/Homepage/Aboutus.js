import React from 'react'
import { render } from 'react-dom'
import './Aboutus.css'
import Slideshow from './Slideshow';
import img1 from "../Homepage/assets/images/box.png";
import img2 from "../Homepage/assets/images/box.png";
import img3 from "../Homepage/assets/images/box.png";
import img4 from "../Homepage/assets/images/box.png";
import img5 from "../Homepage/assets/images/box.png";
import img6 from "../Homepage/assets/images/box.png";
const collection = [
{ src: img1, caption: "Caption one" },
{ src: img2, caption: "Caption two" },
{ src: img3, caption: "Caption three" },
{ src: img4, caption: "Caption four" },
{ src: img5, caption: "Caption five" },
{ src: img6, caption: "Caption six" }
];
class Aboutus extends React.Component {
render(){
//this.carousel()
return(
<div id='aboutsection'>
   <Slideshow id='aboutss'
      input={collection}
      ratio={`3:2`}
      mode={`automatic`}
      timeout={`3000`}
      />
</div>
)}
}
export default Aboutus;