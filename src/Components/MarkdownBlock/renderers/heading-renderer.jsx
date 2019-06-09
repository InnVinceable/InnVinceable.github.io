import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import Markdown from 'react-markdown';
let Wrapper = styled.div`
    text-align: center;
`

const headingRenderer = (props) => {
    if (props.level) {
        switch (props.level) {
            case 1:
                return <Wrapper level={props.level}><h1>{props.children}</h1></Wrapper>
                break;
            case 2:
                return <Wrapper level={props.level}><h2>{props.children}</h2></Wrapper>
                break;
            case 3:
                return <Wrapper level={props.level}><h3>{props.children}</h3></Wrapper>
                break;
            case 4:
                return <Wrapper level={props.level}><h4>{props.children}</h4></Wrapper>
                break;
            case 5:
                return <Wrapper level={props.level}><h5>{props.children}</h5></Wrapper>
                break;
            case 6:
                return <Wrapper level={props.level}><h6>{props.children}</h6></Wrapper>
                break;

            default: 
                return <Wrapper level={props.level}><h1>{props.children}</h1></Wrapper>
        }
        
    } else {
        const Heading = Markdown.renderers.heading
        return <Heading {...props} />
    }
}

export default headingRenderer;
