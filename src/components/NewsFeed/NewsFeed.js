import React, { useEffect, useState } from 'react'
import axios from 'axios'
import classes from './NewsFeed.module.css'
import Personimage from '../../assets/images/newsFeed.png'
import Card from '../../hoc/Card/Card'
const NewsFeed = (props) => {

    const [newsArticles, setnewsArticles] = useState({ headline: "", description: "", ArticleLink: "" })

    useEffect(() => {
        axios.get('http://newsapi.org/v2/top-headlines?q=COVID&country=in&apiKey=519fb8fba3fe442ab5bdda7c5a3042ef')
            .then((Response) => {

                console.log(Response.data)
                const newsContent = { ...Response.data.articles[0] };
                const headline = newsContent.title.slice(0, 60)
                const description = newsContent.description.slice(0, 70);
                const pageUrl = newsContent.url;

                setnewsArticles({ headline: headline, description: description, ArticleLink: pageUrl })

            })
    } , [])
    return (
        <div className={classes.NewsFeed}>
            <Card>
                <div className={classes.Container}>
                    <div className={classes.NewsImage}>
                        <img src={Personimage} alt="news icon" />

                    </div>
                    <div className={classes.Content}>
                        <h2>{newsArticles.headline}...</h2>
                        <p>{newsArticles.description}...</p>
                        <button className={classes.newsButton}><a target="_blank" href={newsArticles.ArticleLink}>Read More..</a></button>
                    </div>
                </div>


            </Card>
        </div>
    )
}


export default NewsFeed