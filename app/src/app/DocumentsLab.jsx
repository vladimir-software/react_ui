import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { GREY_1, STATUS } from "../constants";
import { activeDocuments, trashDocuments } from "../data/documents";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


console.log("*****************")
console.log("****** activeDocuments ***********", activeDocuments)
console.log("*****************")
const useStyles = makeStyles({
    root: {
        background: GREY_1,
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        width: "100%",
        height: "100%",
    },
    left: {
        backgroundColor: "blue",
        width: "60%",
    },
    right: {
        backgroundColor: "orange",
        width: "100%",
    }
});

const DocumentLab = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={classes.root}>
                <div className={classes.left}>2</div>
                <div className={classes.right}>

                    <Box sx={{ width: 500, minHeight: 253 }}>
                    <Masonry columns={{ xs: 3, sm: 4 }} spacing={2}>
                        {heights.map((height, index) => (
                        <Item key={index} sx={{ height }}>
                            {index + 1}
                        </Item>
                        ))}
                    </Masonry>
                    </Box>
                </div>
            </div>
        </>
    );
};

export default DocumentLab;
