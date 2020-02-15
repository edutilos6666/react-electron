import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const usePaperStyles = ()=> {
    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(1),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));

      const classes = useStyles();

      return {
          classes
      };
}

export default usePaperStyles;