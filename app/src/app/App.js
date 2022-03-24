import { useState } from "react";
import { makeStyles } from "@mui/styles";
import ViewDocumentsButton from "./components/buttons/ViewDocumentsButton";
import DocumentView from "./DocumentView";
import { GREY_1, STATUS } from "../constants";

import DocumentLab from "./DocumentsLab";
const useStyles = makeStyles({
  root: {
    background: GREY_1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});

const App = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <DocumentView
        open={open}
        onClose={() => setOpen(false)}
        pageCount={2}
        counterpartyName="Counterparty A"
        invoiceNumber={"INV-A"}
        amount="$1,000,000.00"
        status={STATUS.GENERATED}
      />
      <ViewDocumentsButton onClick={() => setOpen(true)} />
    </div>

  );
};

export default App;
