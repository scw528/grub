import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const insta = require('../../images/insta.png');
const linkedin = require('../../images/linkedin.png');

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    display: 'flex',
  },
  text: {
    color: 'white',
    letterSpacing: '8',
    marginBottom: theme.spacing(1)
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      borderRadius: '10px',
      backgroundColor: theme.palette.primary.main,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={8} md={6}>
          <Typography className={classes.text} variant="h5">
                Follow Us!
            </Typography>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <a href="https://www.instagram.com/grubyxe/?hl=en" className={classes.icon}>
                  <img src={insta} alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/company/grubright/about/" className={classes.icon}>
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}