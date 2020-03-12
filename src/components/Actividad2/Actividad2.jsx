//Import
import React,{useState} from 'react'
import styled from 'styled-components'
import styles from './Actividad2_styles'
import Ilex from '../../App/variables'
// styles from styled
import { UiButtonsContainer } from '../Actividad1/Actividad_styles'
// Components
import Container from '../Container'
import MainTitle, { Subtitle } from '../MainTitle'
import { IRow, ICol } from '../Grid'
import ButtonUi from '../ButtonControlUI'
import {BubbleInfo} from '../BubbleInstructions'
import {ButtonAudio2, ButtonAudioLight} from '../ButtonAudio'
import {DraggableClean} from '../Draggable'
import AreaDrop from '../AreaDrop/AreaDrop'
import {AreaClean} from '../ImageArea'
import ButtonCheck from '../ButtonCheck'
import Modal from '../Generales/Modal'
// Componente base
const Actividad2_base = ({...props}) => {

    const [visible, setVisible] = useState(false)
    const [results, setresults] = useState(false)
    let [values, setValues] = useState([])
    
    const check = (val) => {
        if(val.indexOf(false)===-1 && val.length > 1){
            setVisible(true)
            setresults(true)
            
        } else {
            setVisible(true)
            setresults(false)
        }
    }

    const feedback = (result) => {
        let resultCollection = [...values]
        resultCollection[result.index] = result.result
        setValues(resultCollection)
        console.log(values)
    }

    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} h={36}>

            <UiButtonsContainer top={1.9} right={1.9}>
                <ButtonUi icon='ilx-ayuda' tooltip='Click on the button below to listen to the audio of the video once again, then organize the sentences' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer>

            <IRow w={90} align='center' justify='center' pt={2.3} pb={1} px={2}>
                <ICol>
                    <MainTitle color={Ilex.violeta2} size={1.5}> ORGANIZE THE SENTENCES IN THE RIGHT ORDER</MainTitle>
                </ICol>
            </IRow>
            
            <IRow justify='center' gutters={1} id="draggingArea">
                <ICol w={20}>
                    <Subtitle color={Ilex.violeta2} size={1.4}>
                    PRACTICE PLACES IN YOUR NEIGHBORHOOD
                    </Subtitle>
                    <IRow>
                        <ICol>
                            <ButtonAudioLight py={0.4} mx={0.2} my={0.5} src='./media/audio.mp3'> House </ButtonAudioLight>
                            <BubbleInfo py={0.4} mx={0.2} my={0.5}>House</BubbleInfo>
                            <BubbleInfo py={0.4} mx={0.2} my={0.5}>Bus Stop</BubbleInfo>
                            <BubbleInfo py={0.4} mx={0.2} my={0.5}>Shop</BubbleInfo>
                            <BubbleInfo py={0.4} mx={0.2} my={0.5}>Bakery</BubbleInfo>
                            <BubbleInfo py={0.4} mx={0.2} my={0.5}>Drug Store</BubbleInfo>
                            <BubbleInfo py={0.4} mx={0.2} my={0.5}>Apartament</BubbleInfo>
                        </ICol>
                    </IRow>
                    <ButtonAudio2 src='./media/audio.mp3' mt={2} px={2} py={2}>
                        <IRow pb={1}>
                            <ICol className='bocina'>
                                <i className='ilx-bocina'></i>
                            </ICol>
                        </IRow>
                        <Subtitle color={'#fff'} size={1}>CLICK HERE TO LISTEN THE VIDEO’S AUDIO</Subtitle>
                    </ButtonAudio2>
                </ICol>
                <ICol w={30}>
                    <DraggableClean name='I leave my flat to go to work' target="#area5" activeareas={["#area1", "#area2", "#area3", "#area4", "#area5", "#area6", "#area7", "#area8", "#area9", "#area10"]} send={(result, index) => feedback(result)} index={0}/>
                    <DraggableClean name='She likes to know about everything and everybody' target="#area8" activeareas={["#area1", "#area2", "#area3", "#area4", "#area5", "#area6", "#area7", "#area8", "#area9", "#area10"]} send={(result, index) => feedback(result)} index={1}/>

                    <DraggableClean name='Edward lives on apartment 309' target="#area4" activeareas={["#area1", "#area2", "#area3", "#area4", "#area5", "#area6", "#area7", "#area8", "#area9", "#area10"]} send={(result, index) => feedback(result)} index={2}/>
                    <DraggableClean name='I think her daughter is always there with her' target="#area10" activeareas={["#area1", "#area2", "#area3", "#area4", "#area5", "#area6", "#area7", "#area8", "#area9", "#area10"]} send={(result, index) => feedback(result)} index={3}/>

                    <DraggableClean name='I can say that I have nice neighbors' target="#area2" activeareas={["#area1", "#area2", "#area3", "#area4", "#area5", "#area6", "#area7", "#area8", "#area9", "#area10"]} send={(result, index) => feedback(result)} index={4}/>
                    <DraggableClean name='The shopping mall “El Progreso” and the “Megabus” station are in front of my apartment' target="#area1" activeareas={["#area1", "#area2", "#area3", "#area4", "#area5", "#area6", "#area7", "#area8", "#area9", "#area10"]} send={(result, index) => feedback(result)} index={5}/>

                    <DraggableClean name='She is very old' target="#area9" activeareas={["#area1", "#area2", "#area3", "#area4", "#area5", "#area6", "#area7", "#area8", "#area9", "#area10"]} send={(result, index) => feedback(result)} index={6}/>
                    <DraggableClean name='sometimes he asks me to take care of it' target="#area7" activeareas={["#area1", "#area2", "#area3", "#area4", "#area5", "#area6", "#area7", "#area8", "#area9", "#area10"]} send={(result, index) => feedback(result)} index={7}/>

                    <DraggableClean name='I have two neighbors' target="#area3" activeareas={["#area1", "#area2", "#area3", "#area4", "#area5", "#area6", "#area7", "#area8", "#area9", "#area10"]} send={(result, index) => feedback(result)} index={8}/>
                    <DraggableClean name='We go ahead with our duties' target="#area6" activeareas={["#area1", "#area2", "#area3", "#area4", "#area5", "#area6", "#area7", "#area8", "#area9", "#area10"]} send={(result, index) => feedback(result)} index={9}/>
                </ICol>
                <ICol w={30}>
                    <AreaDrop w={22} h={27} p={1}>
                        <AreaClean id="area1"/>
                        <AreaClean id="area2"/>
                        <AreaClean id="area3"/>
                        <AreaClean id="area4"/>
                        <AreaClean id="area5"/>
                        <AreaClean id="area6"/>
                        <AreaClean id="area7"/>
                        <AreaClean id="area8"/>
                        <AreaClean id="area9"/>
                        <AreaClean id="area10"/>
                    </AreaDrop>

                </ICol>
                <IRow>

                    <ICol pt={5}> <ButtonCheck onClick={() => check(values)} /> </ICol>
                </IRow>
                <Modal visible={visible} ok={results} err={!results} nxtUrl='/actividad2' repeatUrl='/actividad1' />
            </IRow>



        </Container>

    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2
