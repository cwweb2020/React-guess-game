import styled from 'styled-components';

export const GridDiv = styled.div`
    display: grid;
    grid-template-columns: ${props => props.gtc || '1fr'};
    grid-column-gap: ${props => props.gcg || '0'};

`