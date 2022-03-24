import Button from "@mui/material/Button";
import ViewDocumentsIcon from "../../../icons/ViewDocumentsIcon";

const ViewDocumentsButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      startIcon={<ViewDocumentsIcon stroke="white" />}
      onClick={onClick}
    >
      View Documents
    </Button>
  );
};

export default ViewDocumentsButton;
