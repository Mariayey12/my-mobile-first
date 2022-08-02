import React, { useEffect, useState } from "react";
import './CapApp.css';
   const Cards = ({ nombre }) => {
   
       const [imagenes, setImagenes] = useState([]);
   
       useEffect(() => {
           imgGif().then(
               imgData => setImagenes(imgData)
           )
       }, []);
   
       console.log('hola');
       const imgGif = async () => {
           const url = 'https://api.giphy.com/v1/gifs/search?q=cats&limit=20&api_key=n0LZOMFklX13NPYKg0YfrrFR4v2yDmZ4'

           const resp = await fetch(url)
           const { data } = await resp.json()
   
           const imgData = data.map(img => {
               return {
                   id: img.id,
                   title: img.title,
                   url: img.images.original.url,
               }
           })
           return imgData
       }
   
       return (
           <div className="  App  ">
               <ol >
                   {
                       imagenes.map(img => (
                           <li key={img.id}>
                               <h3>{img.title}</h3>
                               <img src={img.url} alt="" className="  image "  />
                           </li>
                       ))
                   }
               </ol>
           </div>
       );
   };
   
   export default Cards;