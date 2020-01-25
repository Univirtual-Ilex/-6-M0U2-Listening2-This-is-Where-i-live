
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './BubbleInstructions_styles'

// Componente base
const BubbleInstructions_base = ({align, p, ...props}) => {
    return (
        <div {...props}>
            <div className='message'>
                { props.children }
            </div>
        </div>
    )
}
const BubbleInstructions = styled(BubbleInstructions_base)`${ styles }`
export default BubbleInstructions
