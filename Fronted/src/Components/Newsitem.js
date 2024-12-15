import React, { Component } from 'react'


export class Newsitem extends Component {
 
  render() {
    let  {title,description,imageUrl,newsUrl ,author , date ,source}= this.props;
    return (
     
      <div className='my-3'>
         <div className="card h-100"  ><span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left:"90%", zIndex:"1"}}>{source} </span>
            <img src={!imageUrl?"https://dmxg5wxfqgb4u.cloudfront.net/styles/card/s3/2024-10/100524-ufc-307-salt-lake-city-octagon.jpg?itok=A-v-o8I4":imageUrl} className="card-img-top" alt="..."></img>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{title}...<span className='badge rounded-pill bg-success'>New</span></h5>
              <p className="card-text">{description}...</p>
              <p className='card-text'><small className='text-muted'> By {!author?"unknown":author} on  {new Date (date).toGMTString()} </small></p>
              <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary mt-auto">Read More</a>
            </div>
         </div>
     </div>
      
      
    
    )
  }
}

export default Newsitem