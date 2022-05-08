import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBCardHeader,
    MDBCardSubTitle
} from 'mdb-react-ui-kit';
import { sample } from '../utils/response';

const Collocation = (data) => {
    const { collocation, relation, examples } = data.data;

    return (
        <MDBCol lg="6" className="my-4 ">
            <MDBCard>
                <MDBCardHeader className="bg-primary py-3">
                    <MDBCardTitle className="text-white">{collocation}</MDBCardTitle>
                    <MDBCardSubTitle className="text-warning">{relation}</MDBCardSubTitle>
                </MDBCardHeader>
                <MDBCardBody>
                    {examples.map((example, index) => (
                        <MDBCardText key={index}>
                            <span dangerouslySetInnerHTML={{ __html: example }} key={example} />
                        </MDBCardText>
                    ))}
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};

export default function SearchResult() {
    return (
        <MDBRow>
            <p className="fs-2 fw-bold">Result for xxxxxx</p>
            {sample.map((each) => (
                <Collocation data={each} key={each.id} />
            ))}
        </MDBRow>
    );
}
