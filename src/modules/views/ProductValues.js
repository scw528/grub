import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const curvyLines = require('../../images/productCurvyLines.png');
const comingSoon = require('../../images/comingSoon.png');

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
});

const tileData = [
  {
    img: curvyLines,
    title: 'Image',
    author: 'author',
  },
];

function ProductValues(props) {
  const { classes } = props;

  return (
    <section id="partners" className={classes.root}>
      <Container className={classes.container}>
        <img
          src={curvyLines}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          Partners
        </Typography>
        {/* <Carousel
          showThumbs={false}
          showStatus={false}
          useKeyboardArrows
          className="presentation-mode"
        >
          <div>
              <img src={comingSoon} alt=""/>
          </div>
          </Carousel> */}
          <div>
            <img src={comingSoon} alt="Coming Soon"></img>
          </div>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);