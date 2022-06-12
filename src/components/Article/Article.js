
import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
const Article = (props) => {
    const{author, content, description, urlToImage, title, publishedAt} = props.article;
    return (
        <div>
            
            <Grid item xs={2} sm={4} md={8}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader


                    title={title}
                    subheader= {publishedAt}
                    
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={urlToImage}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                       {content}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>

                </CardActions>

            </Card>
            </Grid>
        </div>
    );
};

export default Article;