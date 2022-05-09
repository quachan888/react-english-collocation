import React from 'react';
import { useEffect, useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBContainer,
    MDBCol,
    MDBCardHeader,
    MDBCardSubTitle,
    MDBRow
} from 'mdb-react-ui-kit';
import axios from 'axios';
import env from 'react-dotenv';
import LoadingSpinner from '../components/LoadingSpinner';

const Collocation = (data) => {
    const { collocation, relation, examples } = data.data;

    return (
        <MDBCol lg="6" className="my-4">
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

const SearchPage = () => {
    const [result, setResult] = useState([]);
    const queryParams = new URLSearchParams(window.location.search);
    const search = queryParams.get('s');

    useEffect(() => {
        // Fetch all products data from FakeStoreAPI
        const options = {
            method: 'GET',
            url: 'https://linguatools-english-collocations.p.rapidapi.com/bolls/',
            params: { lang: 'en', query: search, max_results: '20' },
            headers: {
                'X-RapidAPI-Host': env.RapidAPIHost,
                'X-RapidAPI-Key': env.RapidAPIKey
            }
        };

        const getData = async () => {
            await axios
                .request(options)
                .then((response) => {
                    setResult(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        getData().catch(console.error);
        // console.log('GET DATA =====', result);
    }, []);

    if (result) {
        return (
            <MDBContainer className="mt-4">
                <MDBRow className="mt-4">
                    <h2>
                        Result for <span className="text-danger">{search}</span>
                    </h2>
                    {result.map((each) => (
                        <Collocation data={each} key={each.id} />
                    ))}
                </MDBRow>
            </MDBContainer>
        );
    }

    return (
        <MDBContainer className="mt-4">
            <LoadingSpinner />
        </MDBContainer>
    );
};

export default SearchPage;
