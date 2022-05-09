import React from 'react';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon
} from 'mdb-react-ui-kit';
import randomWord from '../utils/randomWord';

export default function Header() {
    let random = randomWord();
    return (
        <header>
            <MDBNavbar expand="lg" light bgColor="white">
                <MDBContainer fluid>
                    <MDBNavbarToggler
                        aria-controls="navbarExample01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <MDBIcon fas icon="bars" />
                    </MDBNavbarToggler>
                    <div className="collapse navbar-collapse" id="navbarExample01">
                        <MDBNavbarNav right className="mb-2 mb-lg-0">
                            <MDBNavbarItem>
                                <MDBNavbarLink href="/">Home</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href={`/search?s=${random}`}>Random word</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </div>
                </MDBContainer>
            </MDBNavbar>
        </header>
    );
}
