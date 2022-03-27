import React, { useState } from "react";
import { render } from "react-dom";
import { storage } from "../../firebase";
import { db } from "../../firebase"
import './Upload.css'
import './pasta1.jpeg'
import { FaPen } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";

const Upload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [urls, setUrls] = useState("")
  const[info,setInfo]=useState("")
  const[tag,setTag]=useState("")
  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = (e) => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);

          });
      }
    );
    
  };
const handleSubmit= (e) =>{
  e.preventDefault();

    db.collection('imageCatalog')
    .doc(name)
    .set({
      name:name,
      quantity:quantity,
      url:url,
      info:info,
      tag:tag,

      
    })
      .then(() => {
        
        alert("The food had been posted")
        
      })
      .catch(error => {
        alert(error.message)
      })
      setName('')
      setQuantity(0)
}
  console.log("image: ", image);

  return (
    <div id=''>
    
      
     

    
      
      <br />
       <div id=''>
      
     
      </div>
      <div>
      
      </div>
      <div id='subhandler'>
      <div id='imgprv'>
      <h2>Upload an Item</h2>
      <img id='storeimg' src={ url} alt="firebase-image" width="128" height="128"/>
      <a id='subimgprv'>Image Preview</a>
      <progress id='progress' value={progress} max="100" />
      </div>
      <a id='updinst'>Upload an image of your item!</a>
      <input type="file" id='fileinputst' onChange={handleChange} />
      <div></div>
      <button id='uploadbttnst'onClick={handleUpload}>Upload</button>
      <div id='userfield'>
      <FaPen id='uploadicon'/>
      <input
      id='name'
        placeholder="Enter Product Name"
        value={ name }
        onChange={(e) => setName(e.target.value)}/>
        </div>
        <div></div>
        <div id='userfield'>
        <FaInfo id='uploadicon'/>
        <input
        id='name'
        placeholder="Info"
        onChange={(e) => setInfo(e.target.value)}
        />
        <input
        id='name'
        placeholder="Info"
        onChange={(e) => setTag(e.target.value)}
        />
       
       </div>
       <div id='userfield'>
       <FaHashtag id='uploadicon'/>
        <input
        id='name'
        type="number"
        placeholder="Quantity"
       
        onChange={(e) => setQuantity(e.target.value)}/>
        </div>
      
      <button id='submitbttnst' onClick={handleSubmit}>Submit</button>
      <br />
      
      </div>
    </div>
  );
};

export default Upload;