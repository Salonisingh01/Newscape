import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
       country:"us",
       pagesize: 6,
       category: 'general'
    }
    static propTypes = {
       country: PropTypes.string,
       pagesize:PropTypes.number,
       category: PropTypes.string
      
    }
  constructor(){
    super();
    this.state={
      articles:[],
      loading:true,
      page:1,
  }
 }
 
 async updateNews(){
  // const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5fc5961c53e8475a9896cd1982955467&page=${this.state.page}&pageSize=${this.props.pagesize}`;
  const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8083a25914e949388f19b43317800103&page=${this.state.page}&pageSize=${this.props.pagesize}`;

  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({articles:parsedData.articles,
    totalResults:parsedData.totalResults,
   loading:false})
 }
async componentDidMount(){
  // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5fc5961c53e8475a9896cd1982955467&page=1&pageSize=${this.props.pagesize}`;
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // console.log(parsedData);
  // this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults, loading:false})
  this.updateNews();
}

handlePreviousClick=async()=>{
  // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5fc5961c53e8475a9896cd1982955467&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // console.log(parsedData);
  // this.setState({
  //   page: this.state.page - 1,
  //   articles: parsedData.articles
  // })
  this.setState({
    page:this.state.page -1
  })
 this.updateNews();
};
handleNextClick=async()=>{

  // if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

  // }
  // else{
  //   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5fc5961c53e8475a9896cd1982955467&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   this.setState({
  //     page: this.state.page + 1,
  //     articles: parsedData.articles
  //   })
  // }
  this.setState({
    page:this.state.page +1
  })
  this.updateNews();

};


  render() {
    return (
      <div className="container my-5">
        <h1>Newscape-Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
            <Newsitem  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
           })}
       </div>
         <div className="container d-flex justify-content-between my-5">
          <button disabled={this.state.page<=1}type='button' className='btn btn-primary' onClick={this.handlePreviousClick}>&larr;Previous</button>
          <button type='button' className='btn btn-primary' onClick={this.handleNextClick}>Next&rarr;</button>
          
         </div>
       
      </div>
     
    );
  };
};

export default News;