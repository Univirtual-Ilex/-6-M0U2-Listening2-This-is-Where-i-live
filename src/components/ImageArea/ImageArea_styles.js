import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
padding:0.5em;
margin-bottom: 0.5em;
background-color: ${Ilex.dragItem};
border-radius:0.5em;

figure{
    img{
        display: block;
        width:100%;
        border-radius:0.5em;
    }
}

.droparea{
    background-color: ${Ilex.color_gris_area};
    width:100%;
    height:2em;
    margin-top:0.5em;
    border-radius:0.5em
}

`


export const areaCleanStyles = css`
padding:0 0;
margin-bottom:0.3em;
background-color: ${Ilex.dragItem};
border-radius:none;
    figure{
        display:none;
    }
    .droparea{
        margin:0;
        padding:0;
        height:2.2em;
    }
`

export default styles
    