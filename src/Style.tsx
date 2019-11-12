import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import DiaImg from "./dia.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      background: "transparent",
      boxShadow: "none"
    },
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    mainCopy: {
      color: "#ffffff"
    },
    landingImg: {
      height: 500,
      backgroundImage: `url(${DiaImg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      textAlign: "center",
      verticalAlign: "middle"
    }
  })
);

export default useStyles;
