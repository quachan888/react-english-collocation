import React from 'react';
import { MDBInput, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

export default function SearchBar() {
    return (
        <MDBRow tag="form" className="align-items-center my-4">
            <p className="fs-2 fw-bold">Search for Collocation</p>
            <MDBCol size="auto">
                <MDBInput id="search" label="Search text..." />
            </MDBCol>
            <MDBCol size="2">
                <MDBBtn type="submit" rounded className="btn-success">
                    Search
                </MDBBtn>
            </MDBCol>
        </MDBRow>
    );
}
