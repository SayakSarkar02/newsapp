import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <span style={{zIndex: '1', left:'90%', background:'red'}} className="position-absolute top-0 translate-middle badge rounded-pill">{source}</span>
                    <div style={{ height: "160px", overflow: 'hidden', position: 'center' }}>
                        <img src={!imageUrl ? "https://www.newsnetnebraska.org/wp-content/uploads/2022/06/Looking-at-Mercury-closely.png" : imageUrl} className="card-img-top" style={{ objectFit: 'cover' }} alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem