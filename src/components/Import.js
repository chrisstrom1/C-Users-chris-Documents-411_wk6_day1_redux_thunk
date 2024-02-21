import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Container from '@material-ui/core/Container';
import { MoreVert } from '@material-ui/icons'; // Import MoreVert icon from Material-UI

const Import = (props) => {
    const [anchorEl, setAnchorEl] = useState(null); // State for anchor element of the menu

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = (index) => {
        props.deleteMake(index);
        handleMenuClose();
    };

    return (
        <Container>
            <Button variant="contained" color="primary" onClick={props.fetchMakes}>
                Import
            </Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, index) => (
                        <TableRow key={index}>
                            <TableCell>{make.MakeId}</TableCell>
                            <TableCell>{make.MakeName}</TableCell>
                            <TableCell>
                                <MoreVert onClick={handleMenuClick} />
                                {/* Add menu component for actions */}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <h2>COUNT: {props.makes.length}</h2>
        </Container>
    );
};

export default Import;