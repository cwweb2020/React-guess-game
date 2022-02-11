import styled from 'styled-components';

export const Wrapper = styled.div`
   width: ${props => props.w || '100%'};
   display: flex;
   flex-direction: ${props => props.fd || 'row'};
   justify-content: ${props => props.jc || 'center'};
   align-items: ${props => props.ai || 'center'};
   margin: ${props => props.m || ''};
   background-color: ${props => props.bgc || ''};
`