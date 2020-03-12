import { css } from 'styled-components'
import Ilex from '../../App/variables'
import {margin, padding } from '../Grid/Grid_styles'
// import Ilex from '../../App/variables'
const styles = css`
button{
    background: linear-gradient(90deg, #1B1E5A, #863FFD);
    box-shadow: 0 0.5em 0 0 ${Ilex.verde};
    color: #fff;
    padding: 0.615em 3em;
    border-radius:1em;
    transition: all 0.4s ease-out;
    cursor:pointer;
    &:hover{
        background-image: linear-gradient(90deg, ${Ilex.color_amarilloOscuro}, ${Ilex.rosa});
        box-shadow: 0 0.5em 0 0 ${Ilex.violeta}; 
    }
    img.img-play{
        width:0.78em;
        height:auto;
    }

}
`
export const buttonAudio2 = css`
.bocina{
    font-size: 1.8em
}
button{
    box-shadow: 0 0.5em 0 0 ${Ilex.dragItem};
    padding: ${props => padding(props)};
    margin : ${props => margin(props)};
}
button.running{
    box-shadow: 0 0.5em 0 0 ${Ilex.verde};
}


`

export const buttonAudioLight = css`
    display: inline-block;
    color: ${Ilex.color_gris};
    text-align: ${props => props.align || 'center'};
    font-weight: lighter;
button{
    cursor:pointer;
    border: 0.2em solid ${Ilex.dragItem};
    color: ${Ilex.violeta2};
    background:#fff;
    border-radius: 0.5em;
    box-shadow: 0 0.5em 0 0 ${Ilex.dragItem};
    font-size: 0.9em;
    padding: ${(props)=>(padding(props))};
    min-width: 7em;
    margin: ${(props)=>(margin(props))};
    &.running{
        box-shadow: 0 0.5em 0 0 ${Ilex.verde};
        border: 0.2em solid ${Ilex.verde};
        color: ${Ilex.rosa};
    }
}

`

export default styles
    