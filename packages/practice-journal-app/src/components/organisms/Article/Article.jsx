import React from 'react';

import { withStyles } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

class Article extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={16} className={classes.root}>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <iframe
              src="https://flat-embed.com/5998da359d035069b0a459ec?layout=responsive&audioSource=&videoPosition="
              height="450"
              width="100%"
              frameBorder="0"
              allowfullscreen
            />
            {/* <CardMedia
              className={classes.media}
              title="Exercise"
              image="/image/01a-ProgGuitar.png"
            /> */}
          </Card>
        </Grid>
      </Grid>
    );
  }
}

const articleStyles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main
  },
  media: {
    height: 150
  },
  card: {
    padding: theme.spacing.unit * 2
  }
});

export default withStyles(articleStyles)(Article);
