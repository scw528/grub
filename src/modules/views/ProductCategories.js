import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.primary.main
  },
  dialog: {
    backgroundColor: theme.palette.secondary.light,
    position: 'relative',
    margin: "0 auto"
  },
  DialogTitle: {
    position: 'relative',
    textAlign: 'center',
    fontSize: theme.typography.pxToRem(25),
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.secondary.main
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle>
      <Typography className={classes.DialogTitle}>{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

function ProductCategories(props) {
  // i just imported { useState } so hopefully now i can set a second hook to toggle each diaglog
  // see: https://reactjs.org/docs/hooks-state.html
  const { classes } = props;
  const [openMugs, setMugsOpen] = useState(false);
  const [openContainers, setContainerOpen] = useState(false);

  function handleClickOpen(title) {
    console.log(title);
    if (title === "Coffee Mugs") {
      setMugsOpen(true);
      console.log("after click:  " + openMugs);
    } else if (title === "Take Out Containers") {
      setContainerOpen(true);
      console.log("after click:  " + openContainers);
    } else { return }
  };

  function handleClose() {
    console.log("on close:  " + setMugsOpen);
    setMugsOpen(false);
    setContainerOpen(false);
  };

  const images = [
    {
      url: require('../../images/coffee.jpg'),
      title: 'Coffee Mugs',
      width: '50%',
    },
    {
      url: require('../../images/takeaway.jpg'),
      title: 'Take Out Containers',
      width: '50%',
    },
    
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center">
        Solutions
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
            onClick={() => handleClickOpen(image.title)}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={openMugs}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Coffee Mugs Details
          </DialogTitle>
          <DialogContent dividers>
          <ExpansionPanel className={ classes.dialog }>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <Typography className={classes.heading}>1. Order</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.heading}>           
              Order from any of our participating vendors, pay a $2
              refundable deposit, and get your coffee served in a reusable Grub mug.            
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel className={ classes.dialog }>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <Typography className={classes.heading}>2. Return</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.heading}>
                After you are done with your Grub mug, return your 
                mug at any participating vendor and receive your $2 deposit back.
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel className={ classes.dialog }>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <Typography className={classes.heading}>3. Reuse</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.heading}>
                The participating vendors will sanitize the Grub mugs in 
                their respective kitchens and redistribute them.
            </ExpansionPanelDetails>
          </ExpansionPanel>

          </DialogContent>
        </Dialog> 
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={openContainers}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Take-Out Container Details
          </DialogTitle>
          <DialogContent dividers>
          <ExpansionPanel className={ classes.dialog }>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <Typography className={classes.heading}>1. Order</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.heading}>
              <Typography className={classes.heading}>
              Order from any of our participating vendors and
              request that your food be packed in a Grub container.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel className={ classes.dialog }>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <Typography className={classes.heading}>2. Return</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.heading}>
              <Typography className={classes.heading}>
                After you are done with your Grub container, 
                drop it off at any of our appropriate recycle sites.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel className={ classes.dialog }>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <Typography className={classes.heading}>3. Reuse</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.heading}>
              <Typography className={classes.heading}>
              The Grub team will collect the containers from our recycle 
              sites, sanitize them in a commercial kitchen and redistribute them.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          </DialogContent>
        </Dialog> 
      </div>
    </Container>
  );
}


ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  openMugs: PropTypes.bool,
  openContainers: PropTypes.bool,
};

export default withStyles(styles)(ProductCategories);