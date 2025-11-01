


function Card({image,name,text,link}) {
     return(
           <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
     <div className='card'>
      <img className='prf' src={image} alt="no image"></img>
      <h2 className='card-title'>{name}</h2>
      <p className='card-text'>{text}</p>
     </div>
     </a>
     );
}

export default Card
