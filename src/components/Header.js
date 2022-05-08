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

export default function Header() {
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
                            <MDBNavbarItem active>
                                <MDBNavbarLink aria-current="page" href="#">
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#">Features</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#">Pricing</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#">About</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </div>
                </MDBContainer>
            </MDBNavbar>
            <div
                className="p-5 text-center bg-image"
                style={{
                    backgroundImage: "url('https://source.unsplash.com/DUmFLtMeAbQ')",
                    height: 300
                }}
            >
                <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3">English Collocation</h1>
                            <h4 className="mb-3">A ReactJS App from An Quach</h4>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
