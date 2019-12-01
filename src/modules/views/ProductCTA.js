import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';
import Axios from 'axios';

const reachOut = require('../../images/discover.jpg');

const styles = theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(7),
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: "#F0D3F7",
    padding: theme.spacing(8, 3),
  },
  cardContent: {
    maxWidth: 400,
  },
  imageDots: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
    background: 'url(/static/onepirate/productCTAImageDots.png)',
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
  },
  imagesWrapper: {
    position: 'relative',
  },
  image: {
    position: 'relative',
    top: -44,
    left: -50,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600,
  },
});

class ProductCTA extends React.Component {
  state = {
    open: false,
    name: '',
    email: '',
    message: '',
  };


  handleSubmit = event => {
    console.log(this.state.name + " " + this.state.email + " " + this.state.message);
    event.preventDefault();
    this.setState({
      open: true,
    });
    Axios.post("https://us-central1-grubright-11f85.cloudfunctions.net/submit", this.state)
        .then(res => {
            // here will be code
        })
        .catch(error => {
            console.log(error);
        });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }
  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }
  handleMessageChange = (e) => {
    this.setState({message: e.target.value});
  }

  render() {
    const { classes } = this.props;

    return (
      <Container className={classes.root} component="section">
        <Grid container>
          <Grid item xs={12} md={6} className={classes.cardWrapper}>
            <div className={classes.card}>
              <form onSubmit={this.handleSubmit} className={classes.cardContent}>
                <Typography variant="h2" component="h2" gutterBottom>
                  Reach Out!
                </Typography>
                <Typography variant="h5">
                  Got a question? We would love to hear from you. Send us a message and we will get back to you as soon as possible.
                </Typography>
                <TextField noBorder type="text" id="name" className={classes.textField} placeholder="Name" value={this.state.name} onChange={this.handleNameChange}/>
                <TextField noBorder type="text" id="email" className={classes.textField} placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
                <TextField noBorder type="text" id="message" className={classes.textField} placeholder="Message" value={this.state.message} onChange={this.handleMessageChange}/>
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  className={classes.button}
                  onClick={this.sendMail}
                  //disabled="true"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.imagesWrapper}>
            <Hidden smDown className={classes.imageDots}>
              <img
                src={reachOut}
                alt="call to action"
                className={classes.image}
              />
            </Hidden>
          </Grid>
        </Grid>
        <Snackbar
          open={this.state.open}
          onClose={this.handleClose}
          message="Message Sent!"
          transition="down"
        />
      </Container>
    );
  }
}

ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA);