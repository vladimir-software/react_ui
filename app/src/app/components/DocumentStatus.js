import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import clsx from "clsx";
import GeneratedIcon from "../../icons/GeneratedIcon";
import { MAGENTA, MAGENTA_BACKGROUND } from "../../constants";

const useStyles = makeStyles((theme) => ({
  queryStatus: {
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    fontSize: "12px",
    padding: "3px 8px",
    background: MAGENTA_BACKGROUND,
  },
}));

const DocumentStatus = ({ status = "Generated" }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.queryStatus)}>
      <GeneratedIcon stroke={MAGENTA} />
      <Box component="span" marginLeft={1}>
        {status}
      </Box>
    </div>
  );
};

export default DocumentStatus;
