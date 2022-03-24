import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import Fade from "@mui/material/Fade";
import DocumentsCard from "./components/DocumentsCard";
import { PAGE_WIDTH, PAGE_HEIGHT, PAGE_DISPLAY_WIDTH } from "../constants";

const useStyles = makeStyles((theme) => ({
  documentViewRoot: {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    width: "calc(100vw - 90px)",
    display: "flex",
    justifyContent: "flex-end",
    zIndex: 1000,
  },
  documentRoot: {
    height: "100%",
    width: "1040px",
    boxShadow: "-4px 6px 20px rgba(0, 0, 0, 0.15)",
    borderLeft: "1px solid #D5DCE5",
    backgroundColor: "#FFFFFF",
    overflow: "scroll",
  },
  documentViewCardBackdrop: {
    height: "100%",
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
}));

const Document = ({ pageCount }) => {
  const classes = useStyles();

  const [pages, setPages] = useState(Array(pageCount).fill(null));

  const pageHeight = (PAGE_DISPLAY_WIDTH / PAGE_WIDTH) * PAGE_HEIGHT;

  const pageStyle = {
    width: PAGE_DISPLAY_WIDTH,
    height: pageHeight,
    background: "lightGrey",
  };

  useEffect(() => {
    for (let i = 0; i < pageCount; i++) {
      const page = <div style={pageStyle} />;

      setPages((prev) => {
        const newPages = prev.slice();
        newPages[i] = page;

        return newPages;
      });
    }
  }, []);

  const pageViews = pages.map((page) => {
    return (
      <Paper elevation={3} style={{ marginBottom: "16px" }}>
        {page}
      </Paper>
    );
  });

  return (
    <div className={classes.documentRoot} onClick={(e) => e.stopPropagation()}>
      {pageViews}
    </div>
  );
};

const DocumentView = ({
  open,
  onClose,
  pageCount,
  counterpartyName,
  invoiceNumber,
  amount,
  status,
}) => {
  const classes = useStyles();

  return (
    <Fade in={open} timeout={250}>
      <div className={classes.documentViewRoot}>
        <div className={classes.documentViewCardBackdrop} onClick={onClose}>
          <DocumentsCard
            counterpartyName={counterpartyName}
            invoiceNumber={invoiceNumber}
            amount={amount}
            status={status}
          />
          <Document pageCount={pageCount} />
        </div>
      </div>
    </Fade>
  );
};

export default DocumentView;
