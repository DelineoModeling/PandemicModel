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
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ReactDOM from 'react-dom';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiCollapse from '@material-ui/core/Collapse';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const rows = [
  'Article1',
  'Article2',
  'Article3',
  'Article4',
  'Article5',
  'Article6'
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
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
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    height: "500px",
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
  expand: {
  transform: 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary" >

          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item xs={.5}>
        </Grid>
        <Grid item xs={8}>
          <Box className={classes.hero}>
            <Box>Delineo Blog</Box>

          </Box>
          </Grid>
         <Grid item xs={3}>
         <TableContainer component={Paper}>
     <Table className={classes.table} aria-label="customized table">
       <TableHead>
         <TableRow>
           <StyledTableCell align="center">Top News/Spotlight</StyledTableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {rows.map((row) => (
           <StyledTableRow key={row}>
             <StyledTableCell align="left" component="th" scope="row">
                {row}<br /> Subtitle of News Article
             </StyledTableCell>
           </StyledTableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
         </Grid>
      </Grid>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea a href="/developmentblog/date-1">
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Contemplative Reptile"
                />

                <Card>

          </Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React useContext
                  </Typography>
                  <Typography variant="body2" color="white" component="p">
                    Blog 1 description
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                    </Typography>
                    <Typography variant="subtitle2" color="white" component="p">
                      Date 1
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
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
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React Router
                  </Typography>
                  <Typography variant="body2" color="white" component="p">
                    Blog 2 description

                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">

                    </Typography>
                    <Typography variant="subtitle2" color="white" component="p">
                      Date 2
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
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
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React useContext
                  </Typography>
                  <Typography variant="body2" color="white" component="p">
                  Blog 3 description
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                    </Typography>
                    <Typography variant="subtitle2" color="white" component="p">
                      Date 3
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
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
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React useContext
                  </Typography>
                  <Typography variant="body2" color="white" component="p">
                  Blog 4 description
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">

                    </Typography>
                    <Typography variant="subtitle2" color="white" component="p">
                      Date 4
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
        </Box>
      </Container>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Announcements
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea a href="/developmentblog/date-1">
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Contemplative Reptile"
                />

                <Card>

          </Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React useContext
                  </Typography>
                  <Typography variant="body2" color="white" component="p">
                    Blog 1 description
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                    </Typography>
                    <Typography variant="subtitle2" color="white" component="p">
                      Date 1
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
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
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React Router
                  </Typography>
                  <Typography variant="body2" color="white" component="p">
                    Blog 2 description

                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">

                    </Typography>
                    <Typography variant="subtitle2" color="white" component="p">
                      Date 2
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
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
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React useContext
                  </Typography>
                  <Typography variant="body2" color="white" component="p">
                  Blog 3 description
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                    </Typography>
                    <Typography variant="subtitle2" color="white" component="p">
                      Date 3
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
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
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React useContext
                  </Typography>
                  <Typography variant="body2" color="white" component="p">
                  Blog 4 description
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">

                    </Typography>
                    <Typography variant="subtitle2" color="white" component="p">
                      Date 4
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
        </Box>
      </Container>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
         News and more
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea a href="/developmentblog/date-1">
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Contemplative Reptile"
                />

                <Card>

          </Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React useContext
                  </Typography>
                  <Typography variant="body2" color="white" component="p">
                    Blog 1 description
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                    </Typography>
                    <Typography variant="subtitle2" color="white" component="p">
                      Date 1
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
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
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React Router
                  </Typography>
                  <Typography variant="body2" color="white" component="p">
                    Blog 2 description

                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">

                    </Typography>
                    <Typography variant="subtitle2" color="white" component="p">
                      Date 2
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
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
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React useContext
                  </Typography>
                  <Typography variant="body2" color="white" component="p">
                  Blog 3 description
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                    </Typography>
                    <Typography variant="subtitle2" color="white" component="p">
                      Date 3
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
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
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React useContext
                  </Typography>
                  <Typography variant="body2" color="white" component="p">
                  Blog 4 description
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">

                    </Typography>
                    <Typography variant="subtitle2" color="white" component="p">
                      Date 4
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
        </Box>
      </Container>
    </div>
  );
}

export default DevelopmentBlog;
