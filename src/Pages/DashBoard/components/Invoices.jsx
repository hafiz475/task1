import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import { cardShadow, hoverEffect } from "../utils";
import avathar2 from '../assets/Avathar2.jpeg';
import avathar3 from '../assets/Avathar3.jpeg';


function Invoices(){
    return <InvoiceContainer>
                <CardContent>
                    <Invoice>
                        <Info>
                            <Avatar>
                                <img src = { avathar2 } />
                            </Avatar>

                            <TextContainer>
                                <Title>John philips</Title>
                                <SubTitle>ABC company</SubTitle>
                            </TextContainer>
                        </Info>

                        <Container>
                            <Badge content = "Paid" paid />
                            <Price>$ 1254.8</Price>
                        </Container>
                    </Invoice>

                    <Invoice>
                    <Info>
                            <Avatar>
                                <img src = { avathar3 } />
                            </Avatar>

                            <TextContainer>
                                <Title>Peter Parker</Title>
                                <SubTitle>XYZ holding</SubTitle>
                            </TextContainer>
                        </Info>

                        <Container>
                            <Badge content = "Late" late />
                            <Price>$ 354.8</Price>
                        </Container>
                    </Invoice>
                </CardContent>
           </InvoiceContainer>
}

const InvoiceContainer = styled.div`
    height: 140%;
    width: 35rem;
    border-radius: 1rem;
    margin-top: 1rem;
    box-shadow: ${ cardShadow };
    background-color: white;
    transition: 0.4s ease-in-out;
    &:hover {
        box-shadow: ${hoverEffect};
    }

    @media screen and (min-width: 320px) and (max-width: 1080px){
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    };
`;
const CardContent = styled.div`

    @media screen and (min-width: 320px) and (max-width: 1080px){
    margin: 2rem 0;
    };
`;
const Invoice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0.4rem;
    padding-top: 0.6rem;

    @media screen and (min-width: 320px) and (max-width: 1080px){
    flex-direction: column;
    gap: 1rem;
    };
`;
const Info = styled.div`
    display: flex;
    align-items: center;
    width: 50%;

    @media screen and (min-width: 320px) and (max-width: 1080px){
    flex-direction: column;
    width: 100%;
    text-align: center;
    };
`;
const Avatar = styled.div`
    img {
        height: 3.5rem;
        width: 3.5rem;
        border-radius: 3.5rem;
    }
`;
const TextContainer = styled.div`
    margin-left: 1rem;
`;

const Title = styled.h4``;

const SubTitle = styled.h5`
    font-weight: 400;
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;

    @media screen and (min-width: 320px) and (max-width: 1080px){
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
    };
`;
const Price = styled.div``;

export default Invoices;