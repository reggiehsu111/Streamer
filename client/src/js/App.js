import React from 'react';
import UploadPage from './containers/UploadPage';
import { makeStyles, withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Layout of the page

const globalTheme = createMuiTheme({
  overrides: {
    MuiGrid: {
      root: {
        outline: "5px dotted red"
      }
    }
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  headRow: {
    height: "10vh"
  }
}));


export default function App(){
  const classes = useStyles();

	return(
    <ThemeProvider theme={globalTheme}>
      <Grid container className={classes.root} spacing={3}>
        <Grid container className={classes.headRow} xs={12}> 
        </Grid>
		<Grid container alignItems="stretch" justify="center" xs={12} spacing={3}>
		  <Grid item xs>
		  </Grid>
          <Grid item xs={6}>
		  	<UploadPage />
          </Grid>
          <Grid item xs>
          </Grid>
		</Grid>
      </Grid>
    </ThemeProvider>
	);
}
