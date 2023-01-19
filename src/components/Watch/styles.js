import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 2fr;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grit-template-rows: 1fr 2fr;
    }
`
export const Header = styled.header`
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    padding: 20px;

    color: #a68c69;
    font-size: 56px;

    h2 {
        background-color: #9ba657;
        color: #f4f4f4;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 20px;

    background-color:#594433;
    color: #f0e5c9;

    font-size: 140px;


`