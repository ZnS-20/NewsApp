import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class NewsComponent extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false,
      page : 1,
      totalArticles : 0
    }
  }

  async componentDidMount(){
    this.setState({loading: true});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&&category=${this.props.category}&apiKey=0ecc0da091c9445b9595343d76cc5e08&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles, totalArticles: parsedData.totalResults,loading: false})
  } 

  handleNextClick = async() =>{
    this.setState({loading: true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&&category=${this.props.category}&apiKey=0ecc0da091c9445b9595343d76cc5e08&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles, page : this.state.page+1, loading: false})
  }

  handlePrevClick = async() =>{
    this.setState({loading: true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&&category=${this.props.category}&apiKey=0ecc0da091c9445b9595343d76cc5e08&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles, page: this.state.page-1,loading: true })
  }


  render() {
    return (
      <>
      <div className='container my-3 mb-5'>
          <h1 className='text-center' style={{margin:'35px'}}>Today's Top Headlines</h1>
          {this.state.loading && <Spinner/>}
          <div className='row'> 
            {!this.state.loading && this.state.articles.map((element)=> {
              return  <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title} description={element.description} imgSource={element.urlToImage} readMore = {element.url}/>
          </div>
            })}
          </div>
      </div>
      <div className='container d-flex justify-content-between'>
      <button type="button" className="btn btn-dark" onClick={this.handlePrevClick} disabled={this.state.page<=1}>&laquo; Prev</button>
      <button type="button" className="btn btn-dark" onClick={this.handleNextClick} disabled={this.state.page*this.props.pa >= this.state.totalArticles}>Next &raquo;</button>
      </div>
      </>
    )
  }
}


NewsComponent.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string
}
