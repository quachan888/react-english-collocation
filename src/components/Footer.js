import React from 'react';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className="bg-light text-center text-white mt-3">
            <div className="container p-2 pb-0">
                <section className="mb-4">
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: '#3b5998' }}
                        href="https://www.facebook.com/quachan888/"
                        role="button"
                    >
                        <MDBIcon fab icon="facebook-f" />
                    </a>

                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: '#0082ca' }}
                        href="https://www.linkedin.com/in/an-h-quach-96a81484/"
                        role="button"
                    >
                        <MDBIcon fab icon="linkedin-in" />
                    </a>

                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: '#333333' }}
                        href="https://github.com/quachan888"
                        role="button"
                    >
                        <MDBIcon fab icon="github" />
                    </a>
                </section>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8' }}>
                © 2022 Copyright: &nbsp;
                <a className="text-white" href="https://www.linkedin.com/in/an-h-quach-96a81484/">
                    An Quach
                </a>
            </div>
        </MDBFooter>
    );
}
