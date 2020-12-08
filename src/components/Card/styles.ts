import styled from 'styled-components'
import { Card } from 'primereact/card'

export const Image = styled.img`
    width: 350px;
    height: 250px;
`

export const StyledCard = styled(Card)`
    max-width: 400px;
    & .p-card-content{
        height: 200px;
        overflow-y: scroll; 
        ::-webkit-scrollbar {
            width: 8px;     /* Tamaño del scroll en vertical */
            height: 8px;    /* Tamaño del scroll en horizontal */
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
    }
`

export const CardTitle = styled.p`
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
`

export const CardDescription = styled.p`
    font-size: 15px;
    text-align: justify;
`