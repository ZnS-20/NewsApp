import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
      let {title,description,imgSource,readMore} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <img src={imgSource} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={readMore} className="btn btn-dark btn-sm" target={"_blank"} rel="noreferrer">Read More</a>
                </div>
        </div>
      </div>
    )
  }
}
