import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import ShareIcon from '@material-ui/icons/Share';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FacebookButton, TwitterButton, EmailButton } from "react-social";
import clsx from 'clsx';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';


const rows = [
  'Article',
  'Announcement',
  'Article',
  'News',
  'Article',
  'News'
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    color: theme.palette.common.white,
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  color: theme.palette.common.white,
  root: {
    '&:nth-of-type(odd)': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.action.hover,
    },
    "&:hover": {
     backgroundColor: "darkslategrey !important"
   },
   "&:onCellClick": {
    backgroundColor: "grey !important"
  }

  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  table: {
     fontSize: 14,
     color: theme.palette.common.white,
  },
  hidden: {
   padding: '0 !important',
 },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.5)), url('/blog.jpg')`,
    height: "520px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  horiz: {
    display: "inline-block",
  },
  expand: {
    art: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      }),
    },
    ann: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      }),
    },
    news: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      }),
    },
  },

  expandOpen: {
    art: {transform: 'rotate(180deg)'},
    ann: {transform: 'rotate(180deg)'},
    news: {transform: 'rotate(180deg)'},
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    alignItems: "center",
    textAlign: "center",
    paddingBottom: theme.spacing(3)
  },
  title: {
    marginBottom: '0 0px',
    marginTop: '0 0px',
  },
  authorDate: {
    width: "150px",
    marginLeft: '0 0px',
    marginTop: '0 0px',
    padding: '0 0px',
    margin: '0 0px',
    textAlign: 'left'
  },
  card: {
    maxWidth: "100%",
    position: 'relative',
  },
  overlay: {
     position: 'absolute',
     top: '20px',
     left: '20px',
     color: 'white',
     maxWidth: "100%",
  },
  subtitle: {
    fontSize: 16,
    marginLeft: '0 0px',
    marginTop: '0 0px',
    padding: '0 0px',

  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240
  },
  align: {
    textAlign: 'justifyContent'
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function DevelopmentBlog(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);
  const [expandedAnn, setExpandedAnn] = React.useState(true);
  const [expandedNews, setExpandedNews] = React.useState(true);

  let url = process.env.PUBLIC_URL + "developmentblog/date-2";
  //developmentblog/date-2

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClickAnn = () => {
    setExpandedAnn(!expandedAnn);
  };
  const handleExpandClickNews = () => {
    setExpandedNews(!expandedNews);
  };

  return (
    <div className="App">
      <AppBar className={classes.appBar} style={{background: "white", boxShadow: "none"}} position="static">
        <Toolbar>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3}>

        <Grid item xs>
          <Box className={classes.hero}>
            <Box><Typography>Articles, Announcements, News & More!</Typography><Typography variant='h1'>Delineo Blog</Typography></Box>

          </Box>
          </Grid>
         <Grid item xs={3}>
         <TableContainer component={Paper}>
     <Table className={classes.table} aria-label="customized table">
       <TableHead>
         <TableRow>
           <StyledTableCell align="left"><span style={{fontWeight: 'bold', fontSize: "18px"}}>Latest Posts</span></StyledTableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {rows.map((row) => (
           <StyledTableRow key={row}>
             <StyledTableCell align="left" component="th" scope="row">
                  <span style={{fontWeight: 'bold', color: 'grey'}}>{row} </span><br /><Typography className={classes.subtitle}>Title of {row}</Typography>
             </StyledTableCell>
           </StyledTableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
         </Grid>
      </Grid>
      <Container maxWidth="lg" className={classes.blogsContainer}>
          <Card maxWidth="lg" style={{background: "white", boxShadow: "none"}} >

            <CardActions style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography variant="h4" className={classes.blogTitle}>
              Articles
            </Typography>

              <IconButton
                className={clsx(classes.expand.art, {
                  [classes.expandOpen.art]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>

                  <Card className={classes.card}>
                    <CardActionArea a href="/developmentblog/date-1">
                      <CardMedia
                        className={classes.media}
                        image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        title="Contemplative Reptile"
                      />
                      <div className={classes.overlay}>
                      </div>

                      <CardContent className={classes.align}>
                      <Typography className={classes.title} color="white" gutterBottom>
                      Article
                      </Typography>
                      <Typography className={classes.title} style={{fontWeight: 'bold', marginTop: '0 0px'}} gutterBottom variant="h5" component="h2">
                        React Router
                      </Typography>
                      <Typography variant="body2" color="white" component="p">
                        Blog 1 description

                      </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardActions}>
                      <Box className={classes.author}>
                        <Box component="span" m={1}  className={classes.authorDate}>
                          <Typography variant="subtitle2" component="p">
                          <span style={{fontWeight: 'bold'}}>Author </span>
                           - Date 1
                          </Typography>

                        </Box>
                      </Box>
                      <Box>
                                        <PopupState variant="popover" popupId="demo-popup-menu">
                   {(popupState) => (
                     <React.Fragment>
                       <IconButton aria-label="share" {...bindTrigger(popupState)}>
                         <ShareIcon  style={{color: "white"}} />
                       </IconButton>
                       <Menu   anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    transformOrigin={{ vertical: "top", horizontal: "center" }} {...bindMenu(popupState)}>
                         <MenuItem style={{color: "white"}} onClick={popupState.close}>
                         <TwitterButton url={url}>


                             <TwitterIcon fontSize="small" />


                          </TwitterButton></MenuItem>
                         <MenuItem style={{color: "white"}} onClick={popupState.close}>           <FacebookButton url={url} appId={"appId"}>


                                        <FacebookIcon fontSize="small" />


  </FacebookButton>

                                      </MenuItem>

                                      <MenuItem style={{color: "white"}} onClick={popupState.close}>           <EmailButton url={url}>


                                                     <EmailIcon fontSize="small" />


               </EmailButton>

                                                   </MenuItem>
                       </Menu>
                     </React.Fragment>
                   )}
                 </PopupState>
                      </Box>
                    </CardActions>
                  </Card>

                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardActionArea href="/developmentblog/date-2">
                      <CardMedia
                        className={classes.media}
                        image="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        title="Contemplative Reptile"
                      />
                      <CardContent className={classes.align}>
                      <Typography className={classes.title} color="white" gutterBottom>
                      Article
                      </Typography>
                      <Typography className={classes.title} style={{fontWeight: 'bold', marginTop: '0 0px'}} gutterBottom variant="h5" component="h2">
                        React Router
                      </Typography>
                      <Typography variant="body2" color="white" component="p">
                        Blog 2 description

                      </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardActions}>
                      <Box className={classes.author}>
                        <Box component="span" m={1}  className={classes.authorDate}>
                          <Typography variant="subtitle2" component="p">
                          <span style={{fontWeight: 'bold'}}>Author </span>
                           - Date 2
                          </Typography>

                        </Box>
                      </Box>
                      <Box>
                      <PopupState variant="popover" popupId="demo-popup-menu">
 {(popupState) => (
   <React.Fragment>
     <IconButton aria-label="share" {...bindTrigger(popupState)}>
       <ShareIcon  style={{color: "white"}} />
     </IconButton>
     <Menu   anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
transformOrigin={{ vertical: "top", horizontal: "center" }} {...bindMenu(popupState)}>
       <MenuItem style={{color: "white"}} onClick={popupState.close}>
       <TwitterButton url={url}>


           <TwitterIcon fontSize="small" />


        </TwitterButton></MenuItem>
       <MenuItem style={{color: "white"}} onClick={popupState.close}>           <FacebookButton url={url} appId={"appId"}>


                      <FacebookIcon fontSize="small" />


</FacebookButton>

                    </MenuItem>

                    <MenuItem style={{color: "white"}} onClick={popupState.close}>           <EmailButton url={url}>


                                   <EmailIcon fontSize="small" />


</EmailButton>

                                 </MenuItem>
     </Menu>
   </React.Fragment>
 )}
</PopupState>
                      </Box>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardActionArea href="/developmentblog/date-3">
                      <CardMedia
                        className={classes.media}
                        image="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        title="Contemplative Reptile"
                      />
                      <CardContent className={classes.align}>
                      <Typography className={classes.title} color="white" gutterBottom>
                      Article
                      </Typography>
                      <Typography className={classes.title} style={{fontWeight: 'bold', marginTop: '0 0px'}} gutterBottom variant="h5" component="h2">
                        React Router
                      </Typography>
                      <Typography variant="body2" color="white" component="p">
                        Blog 3 description

                      </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardActions}>
                      <Box className={classes.author}>
                        <Box component="span" m={1}  className={classes.authorDate}>
                          <Typography variant="subtitle2" component="p">
                          <span style={{fontWeight: 'bold'}}>Author </span>
                           - Date 3
                          </Typography>

                        </Box>
                      </Box>
                      <Box>
                      <PopupState variant="popover" popupId="demo-popup-menu">
 {(popupState) => (
   <React.Fragment>
     <IconButton aria-label="share" {...bindTrigger(popupState)}>
       <ShareIcon  style={{color: "white"}} />
     </IconButton>
     <Menu   anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
transformOrigin={{ vertical: "top", horizontal: "center" }} {...bindMenu(popupState)}>
       <MenuItem style={{color: "white"}} onClick={popupState.close}>
       <TwitterButton url={url}>


           <TwitterIcon fontSize="small" />


        </TwitterButton></MenuItem>
       <MenuItem style={{color: "white"}} onClick={popupState.close}>           <FacebookButton url={url} appId={"appId"}>


                      <FacebookIcon fontSize="small" />


</FacebookButton>

                    </MenuItem>

                    <MenuItem style={{color: "white"}} onClick={popupState.close}>           <EmailButton url={url}>


                                   <EmailIcon fontSize="small" />


</EmailButton>

                                 </MenuItem>
     </Menu>
   </React.Fragment>
 )}
</PopupState>
                      </Box>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardActionArea href="/developmentblog/date-4">
                      <CardMedia
                        className={classes.media}
                        image="https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        title="Contemplative Reptile"
                      />
                      <CardContent className={classes.align}>
                      <Typography className={classes.title} color="white" gutterBottom>
                      Article
                      </Typography>
                      <Typography className={classes.title} style={{fontWeight: 'bold', marginTop: '0 0px'}} gutterBottom variant="h5" component="h2">
                        React Router
                      </Typography>
                      <Typography variant="body2" color="white" component="p">
                        Blog 4 description

                      </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardActions}>
                      <Box className={classes.author}>
                        <Box component="span" m={1}  className={classes.authorDate}>
                          <Typography variant="subtitle2" component="p">
                          <span style={{fontWeight: 'bold'}}>Author </span>
                           - Date 4
                          </Typography>

                        </Box>
                      </Box>
                      <Box>
                      <PopupState variant="popover" popupId="demo-popup-menu">
 {(popupState) => (
   <React.Fragment>
     <IconButton aria-label="share" {...bindTrigger(popupState)}>
       <ShareIcon  style={{color: "white"}} />
     </IconButton>
     <Menu   anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
transformOrigin={{ vertical: "top", horizontal: "center" }} {...bindMenu(popupState)}>
       <MenuItem style={{color: "white"}} onClick={popupState.close}>
       <TwitterButton url={url}>


           <TwitterIcon fontSize="small" />


        </TwitterButton></MenuItem>
       <MenuItem style={{color: "white"}} onClick={popupState.close}>           <FacebookButton url={url} appId={"appId"}>


                      <FacebookIcon fontSize="small" />


</FacebookButton>

                    </MenuItem>

                    <MenuItem style={{color: "white"}} onClick={popupState.close}>           <EmailButton url={url}>


                                   <EmailIcon fontSize="small" />


</EmailButton>

                                 </MenuItem>
     </Menu>
   </React.Fragment>
 )}
</PopupState>
                      </Box>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
              <Box my={4} className={classes.paginationContainer}>
              </Box>
              </CardContent>
            </Collapse>
          </Card>
      </Container>
      <Container maxWidth="lg" className={classes.blogsContainer}>

      <Card maxWidth="lg" style={{background: "white", boxShadow: "none"}} >

        <CardActions style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Typography variant="h4" className={classes.blogTitle}>
          Announcements
        </Typography>

          <IconButton
            className={clsx(classes.expand.ann, {
              [classes.expandOpen.ann]: expandedAnn,
            })}
            onClick={handleExpandClickAnn}
            aria-expanded={expandedAnn}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expandedAnn} timeout="auto" unmountOnExit>
          <CardContent>



        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea a href="/developmentblog/date-1">
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="Contemplative Reptile"
              />
              <div className={classes.overlay}>
              </div>

              <CardContent className={classes.align}>
              <Typography className={classes.title} color="white" gutterBottom>
              Announcement
              </Typography>
              <Typography className={classes.title} style={{fontWeight: 'bold', marginTop: '0 0px'}} gutterBottom variant="h5" component="h2">
                React Router
              </Typography>
              <Typography variant="body2" color="white" component="p">
                Blog 1 description

              </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Box component="span" m={1}  className={classes.authorDate}>
                  <Typography variant="subtitle2" component="p">
                  <span style={{fontWeight: 'bold'}}>Author </span>
                   - Date 1
                  </Typography>

                </Box>
              </Box>
              <Box>
              <PopupState variant="popover" popupId="demo-popup-menu">
{(popupState) => (
<React.Fragment>
<IconButton aria-label="share" {...bindTrigger(popupState)}>
<ShareIcon  style={{color: "white"}} />
</IconButton>
<Menu   anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
transformOrigin={{ vertical: "top", horizontal: "center" }} {...bindMenu(popupState)}>
<MenuItem style={{color: "white"}} onClick={popupState.close}>
<TwitterButton url={url}>


   <TwitterIcon fontSize="small" />


</TwitterButton></MenuItem>
<MenuItem style={{color: "white"}} onClick={popupState.close}>           <FacebookButton url={url} appId={"appId"}>


              <FacebookIcon fontSize="small" />


</FacebookButton>

            </MenuItem>

            <MenuItem style={{color: "white"}} onClick={popupState.close}>           <EmailButton url={url}>


                           <EmailIcon fontSize="small" />


</EmailButton>

                         </MenuItem>
</Menu>
</React.Fragment>
)}
</PopupState>
              </Box>
            </CardActions>
          </Card>




        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea href="/developmentblog/date-2">
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="Contemplative Reptile"
              />
              <CardContent className={classes.align}>
              <Typography className={classes.title} color="white" gutterBottom>
              Announcement
              </Typography>
              <Typography className={classes.title} style={{fontWeight: 'bold', marginTop: '0 0px'}} gutterBottom variant="h5" component="h2">
                React Router
              </Typography>
              <Typography variant="body2" color="white" component="p">
                Blog 2 description

              </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Box component="span" m={1}  className={classes.authorDate}>
                  <Typography variant="subtitle2" component="p">
                  <span style={{fontWeight: 'bold'}}>Author </span>
                   - Date 2
                  </Typography>

                </Box>
              </Box>
              <Box>
              <PopupState variant="popover" popupId="demo-popup-menu">
{(popupState) => (
<React.Fragment>
<IconButton aria-label="share" {...bindTrigger(popupState)}>
<ShareIcon  style={{color: "white"}} />
</IconButton>
<Menu   anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
transformOrigin={{ vertical: "top", horizontal: "center" }} {...bindMenu(popupState)}>
<MenuItem style={{color: "white"}} onClick={popupState.close}>
<TwitterButton url={url}>


   <TwitterIcon fontSize="small" />


</TwitterButton></MenuItem>
<MenuItem style={{color: "white"}} onClick={popupState.close}>           <FacebookButton url={url} appId={"appId"}>


              <FacebookIcon fontSize="small" />


</FacebookButton>

            </MenuItem>

            <MenuItem style={{color: "white"}} onClick={popupState.close}>           <EmailButton url={url}>


                           <EmailIcon fontSize="small" />


</EmailButton>

                         </MenuItem>
</Menu>
</React.Fragment>
)}
</PopupState>
              </Box>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea href="/developmentblog/date-3">
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="Contemplative Reptile"
              />
              <CardContent className={classes.align}>
              <Typography className={classes.title} color="white" gutterBottom>
              Announcement
              </Typography>
              <Typography className={classes.title} style={{fontWeight: 'bold', marginTop: '0 0px'}} gutterBottom variant="h5" component="h2">
                React Router
              </Typography>
              <Typography variant="body2" color="white" component="p">
                Blog 3 description

              </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Box component="span" m={1}  className={classes.authorDate}>
                  <Typography variant="subtitle2" component="p">
                  <span style={{fontWeight: 'bold'}}>Author </span>
                   - Date 3
                  </Typography>

                </Box>
              </Box>
              <Box>
              <PopupState variant="popover" popupId="demo-popup-menu">
{(popupState) => (
<React.Fragment>
<IconButton aria-label="share" {...bindTrigger(popupState)}>
<ShareIcon  style={{color: "white"}} />
</IconButton>
<Menu   anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
transformOrigin={{ vertical: "top", horizontal: "center" }} {...bindMenu(popupState)}>
<MenuItem style={{color: "white"}} onClick={popupState.close}>
<TwitterButton url={url}>


   <TwitterIcon fontSize="small" />


</TwitterButton></MenuItem>
<MenuItem style={{color: "white"}} onClick={popupState.close}>           <FacebookButton url={url} appId={"appId"}>


              <FacebookIcon fontSize="small" />


</FacebookButton>

            </MenuItem>

            <MenuItem style={{color: "white"}} onClick={popupState.close}>           <EmailButton url={url}>


                           <EmailIcon fontSize="small" />


</EmailButton>

                         </MenuItem>
</Menu>
</React.Fragment>
)}
</PopupState>
              </Box>
            </CardActions>
          </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
        </Box>

                      </CardContent>
                    </Collapse>
                  </Card>




      </Container>
      <Container maxWidth="lg" className={classes.blogsContainer}>
      <Card maxWidth="lg" style={{background: "white", boxShadow: "none"}} >

        <CardActions style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Typography variant="h4" className={classes.blogTitle}>
         News and More
        </Typography>
          <IconButton
            className={clsx(classes.expand.news, {
              [classes.expandOpen.news]: expandedNews,
            })}
            onClick={handleExpandClickNews}
            aria-expanded={expandedNews}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expandedNews} timeout="auto" unmountOnExit>
          <CardContent>


        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea a href="/developmentblog/date-1">
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="Contemplative Reptile"
              />
              <div className={classes.overlay}>
              </div>

              <CardContent className={classes.align}>
              <Typography className={classes.title} color="white" gutterBottom>
              News
              </Typography>
              <Typography className={classes.title} style={{fontWeight: 'bold', marginTop: '0 0px'}} gutterBottom variant="h5" component="h2">
                React Router
              </Typography>
              <Typography variant="body2" color="white" component="p">
                Blog 1 description

              </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Box component="span" m={1}  className={classes.authorDate}>
                  <Typography variant="subtitle2" component="p">
                  <span style={{fontWeight: 'bold'}}>Author </span>
                   - Date 1
                  </Typography>

                </Box>
              </Box>
              <Box>
              <PopupState variant="popover" popupId="demo-popup-menu">
{(popupState) => (
<React.Fragment>
<IconButton aria-label="share" {...bindTrigger(popupState)}>
<ShareIcon  style={{color: "white"}} />
</IconButton>
<Menu   anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
transformOrigin={{ vertical: "top", horizontal: "center" }} {...bindMenu(popupState)}>
<MenuItem style={{color: "white"}} onClick={popupState.close}>
<TwitterButton url={url}>


   <TwitterIcon fontSize="small" />


</TwitterButton></MenuItem>
<MenuItem style={{color: "white"}} onClick={popupState.close}>           <FacebookButton url={url} appId={"appId"}>


              <FacebookIcon fontSize="small" />


</FacebookButton>

            </MenuItem>

            <MenuItem style={{color: "white"}} onClick={popupState.close}>           <EmailButton url={url}>


                           <EmailIcon fontSize="small" />


</EmailButton>

                         </MenuItem>
</Menu>
</React.Fragment>
)}
</PopupState>
              </Box>
            </CardActions>
          </Card>




        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea href="/developmentblog/date-2">
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="Contemplative Reptile"
              />
              <CardContent className={classes.align}>
              <Typography className={classes.title} color="white" gutterBottom>
              News
              </Typography>
              <Typography className={classes.title} style={{fontWeight: 'bold', marginTop: '0 0px'}} gutterBottom variant="h5" component="h2">
                React Router
              </Typography>
              <Typography variant="body2" color="white" component="p">
                Blog 2 description

              </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Box component="span" m={1}  className={classes.authorDate}>
                  <Typography variant="subtitle2" component="p">
                  <span style={{fontWeight: 'bold'}}>Author </span>
                   - Date 2
                  </Typography>

                </Box>
              </Box>
              <Box>
              <PopupState variant="popover" popupId="demo-popup-menu">
{(popupState) => (
<React.Fragment>
<IconButton aria-label="share" {...bindTrigger(popupState)}>
<ShareIcon  style={{color: "white"}} />
</IconButton>
<Menu   anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
transformOrigin={{ vertical: "top", horizontal: "center" }} {...bindMenu(popupState)}>
<MenuItem style={{color: "white"}} onClick={popupState.close}>
<TwitterButton url={url}>


   <TwitterIcon fontSize="small" />


</TwitterButton></MenuItem>
<MenuItem style={{color: "white"}} onClick={popupState.close}>           <FacebookButton url={url} appId={"appId"}>


              <FacebookIcon fontSize="small" />


</FacebookButton>

            </MenuItem>

            <MenuItem style={{color: "white"}} onClick={popupState.close}>           <EmailButton url={url}>


                           <EmailIcon fontSize="small" />


</EmailButton>

                         </MenuItem>
</Menu>
</React.Fragment>
)}
</PopupState>
              </Box>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea href="/developmentblog/date-3">
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="Contemplative Reptile"
              />
              <CardContent className={classes.align}>
              <Typography className={classes.title} color="white" gutterBottom>
              News
              </Typography>
              <Typography className={classes.title} style={{fontWeight: 'bold', marginTop: '0 0px'}} gutterBottom variant="h5" component="h2">
                React Router
              </Typography>
              <Typography variant="body2" color="white" component="p">
                Blog 3 description

              </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Box component="span" m={1}  className={classes.authorDate}>
                  <Typography variant="subtitle2" component="p">
                  <span style={{fontWeight: 'bold'}}>Author </span>
                   - Date 3
                  </Typography>

                </Box>
              </Box>
              <Box>
              <PopupState variant="popover" popupId="demo-popup-menu">
{(popupState) => (
<React.Fragment>
<IconButton aria-label="share" {...bindTrigger(popupState)}>
<ShareIcon  style={{color: "white"}} />
</IconButton>
<Menu   anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
transformOrigin={{ vertical: "top", horizontal: "center" }} {...bindMenu(popupState)}>
<MenuItem style={{color: "white"}} onClick={popupState.close}>
<TwitterButton url={url}>


   <TwitterIcon fontSize="small" />


</TwitterButton></MenuItem>
<MenuItem style={{color: "white"}} onClick={popupState.close}>           <FacebookButton url={url} appId={"appId"}>


              <FacebookIcon fontSize="small" />


</FacebookButton>

            </MenuItem>

            <MenuItem style={{color: "white"}} onClick={popupState.close}>           <EmailButton url={url}>


                           <EmailIcon fontSize="small" />


</EmailButton>

                         </MenuItem>
</Menu>
</React.Fragment>
)}
</PopupState>
              </Box>
            </CardActions>
          </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
        </Box>

                      </CardContent>
                    </Collapse>
                  </Card>
      </Container>
    </div>
  );
}

export default DevelopmentBlog;
