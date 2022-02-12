import styled from 'styled-components';

export const Heading = styled.h3`
    font-size: ${props => props.fs || "1rem"};
    text-transform : capitalize;
`