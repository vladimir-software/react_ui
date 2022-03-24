import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import DocumentStatus from "./DocumentStatus";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    height: "180px",
    marginRight: "18px",
    border: "1px solid #D5DCE5",
    boxSizing: "border-box",
    borderRadius: "4px",
    backgroundColor: "#FFFFFF",
    boxShadow: "-4px 6px 20px rgba(0, 0, 0, 0.15)",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    height: "160px",
    boxSizing: "border-box",
  },
  text: {
    fontFamily: "DM Sans",
  },
  counterpartyNameText: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "24px",
    color: "#1E2023",
    marginLeft: "24px",
    marginTop: "22px",
    marginBottom: "6px",
  },
  invoiceNumberText: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "18px",
    color: "#565C66",
    marginLeft: "26px",
    marginBottom: "6px",
  },
  amountText: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#565C66",
    marginLeft: "26px",
    marginBottom: "12px",
  },
  statusRoot: {
    marginLeft: "24px",
  },
}));

const DocumentsCard = ({ counterpartyName, invoiceNumber, amount, status }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={(e) => e.stopPropagation()}>
      <div className={classes.content}>
        <h1 className={clsx(classes.text, classes.counterpartyNameText)}>
          {counterpartyName}
        </h1>
        <h2 className={clsx(classes.text, classes.invoiceNumberText)}>
          {invoiceNumber}
        </h2>
        <h3 className={clsx(classes.text, classes.amountText)}>{amount}</h3>
        <div className={classes.statusRoot}>
          <DocumentStatus status={status} />
        </div>
      </div>
    </div>
  );
};

export default DocumentsCard;
