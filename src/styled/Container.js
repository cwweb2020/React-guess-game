import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    min-height: ${props => props.h || ''};
    background: ${props => props.bg || ''};
`