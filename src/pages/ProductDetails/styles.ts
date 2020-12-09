import styled from 'styled-components'

export const ProductDetailsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
`

export const Title = styled.p`
    font-size: 32px;
    font-weight: bold;
    width: 100%;
    text-align: center;
    margin-bottom: 25px;
`

export const LeftSection = styled.div`
    width: 45%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 750px){
        width: 90%;
        height: 300px;
    }
`

export const Image = styled.img`
    width: 80%;
    height: 100%;
`

export const RightSection = styled.div`
    width: 45%;
    height: 500px;
    padding: 15px;
    overflow-y: scroll;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    text-align: justify;

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background:#fff;;
        border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #fff;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    }
    ::-webkit-scrollbar-track {
        background: #2A323D;
        border-radius: 4px;
    }

    @media(max-width: 750px){
        width: 90%;
    }
`

export const InfoHeadContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const Subtitle = styled.p`
    font-size: 22px;
    font-weight: bold;
`

export const Info = styled.p`
    font-size: 20px;
    font-weight: 500;
`

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & > button{
        width: 250px;
    }
`