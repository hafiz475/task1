import React from "react";
import styled from "styled-components";
import { cardShadow, hoverEffect, themeColor } from "../utils";
import avathar2 from '../assets/Avathar2.jpeg';
import avathar3 from '../assets/Avathar3.jpeg';


function Projects() {
    return <YourProjects>
                <Project>
                    <Avathar>
                        <img src = { avathar2 } alt = "" />
                    </Avathar>
                    <Details>
                        <Title>Logo design for bakery</Title>
                        <SubTitle>1 day remaining</SubTitle>
                    </Details>
                </Project>

                <Project>
                    <Avathar>
                        <img src = { avathar3 } alt = "" />
                    </Avathar>
                    <Details>
                        <Title>Personal Branding project</Title>
                        <SubTitle>5 days remaining</SubTitle>
                    </Details>
                </Project>

                <AllProjects>See all projects</AllProjects>

           </YourProjects>;
}

const YourProjects = styled.div`
    background-color: white;
    height: 70%;
    margin: 0;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: ${ cardShadow };
    transition: 0.4s ease-in-out;
    &:hover {
        box-shadow: ${hoverEffect};
    }

    @media screen and (min-width: 320px) and (max-width: 1080px){
    height: max-content;
    margin-top: 1rem;
    width: 75%;
    };
`;

const Project = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.4rem;
`;
const Avathar = styled.div`
    img {
        height: 4rem;
        width: 4rem;
        border-radius: 4rem;
    }
`;
const Details = styled.div`
    margin-left: 1rem;
`;
const Title = styled.h3`
    font-weight: 500;

    @media screen and (min-width: 320px) and (max-width: 1080px){
    font-size: 1rem;
    };
`;
const SubTitle = styled.h5`
    font-weight: 300;
`;
const AllProjects = styled.h5`
    text-align: end;
    color: ${themeColor};
    cursor: pointer;
`;

export default Projects ;
