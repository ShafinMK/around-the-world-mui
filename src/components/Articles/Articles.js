import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Article from '../Article/Article';
const Articles = () => {

    let newSItems = [1, 3, 5, 5, 6]
    const [articles, setArticles] = useState([]);
    useEffect( () =>{
        fetch('https://newsapi.org/v2/everything?q=apple&from=2022-06-11&to=2022-06-11&sortBy=popularity&apiKey=6684f2f61607454fa178416e325f5a23')
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, []);
    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               {
                   articles.map(article => <Article article = {article}></Article>)
               }
               </Grid>
        </div>
    );
};

export default Articles;