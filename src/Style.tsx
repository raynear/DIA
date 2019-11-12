import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import DiaMain from "./dia_main.jpg";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      background: "transparent",
      boxShadow: "none"
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    container: {
      width: "100%",
      spacing: theme.spacing(0),
      margin: theme.spacing(0),
      padding: theme.spacing(0),
      display: "flex",
      flexwrap: "wrap"
    },
    grid: {
      margin: theme.spacing(0),
      padding: theme.spacing(1)
    },
    img: {
      width: "100%"
    },
    title: {
      flexGrow: 1
    },
    mainCopy: {
      color: "#ffffff"
    },
    landingImg: {
      height: 500,
      backgroundImage: `url(${DiaMain})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      textAlign: "center",
      verticalAlign: "middle"
    }
  })
);

export default useStyles;
