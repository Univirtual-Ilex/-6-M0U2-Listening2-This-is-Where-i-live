import { css } from 'styled-components'
import Ilex from '../../App/variables'
import {padding} from '../Grid/Grid_styles'

const styles = css`
border: 0.2em solid ${Ilex.dragItem};
color: ${Ilex.color_gris};
border-radius: 1.2em;
text-align: ${props => props.align || 'center'};
padding: ${(props)=>(padding(props))};
box-shadow: 0 1em 0 0 ${Ilex.dragItem};
font-weight: lighter;
`

export default styles
    