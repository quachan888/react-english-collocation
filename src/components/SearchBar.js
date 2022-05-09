import React from 'react';
import { MDBContainer, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function SearchBar() {
    return (
        <MDBContainer className="mt-4">
            <h2 className="text-primary">Search for Collocation</h2>
            <form className="d-flex input-group w-auto" action="/search" method="GET">
                <input type="search" className="form-control" placeholder="Search..." aria-label="Search" name="s" />
                <MDBBtn className="btn-success">
                    <MDBIcon fas icon="search" />
                </MDBBtn>
            </form>
        </MDBContainer>
    );
}
