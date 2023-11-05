import React, {useState, useEffect, useRef} from 'react';
import { Camera } from 'expo-camera' 
import { Box,Button,ButtonIcon } from '@gluestack-ui/themed'

import ContainerFunction from '../components/containerfunction'
import NaoAutorizado from './components/naoautorizado'
import ModalVisualizar from './components/modalvisualizer'

export default function CameraFunction(){

    const camRef = useRef(null)

    const[hasPermission,setHasPermission] = useState(null)

    const[CapturedPhoto, setCapturedPhoto] = useState(null)

    useEffect(() => {
        (async ()=>{
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    },[])

    if(hasPermission === false){
        return (
            <NaoAutorizado
            setHasPermission={setHasPermission}
            />
        )
    }

    async function takepicture(){
        if(camRef){
            const data = await camRef.current.takePictureAsync({base64:true,quality:0.5});
            // console.log(data.base64)
            setCapturedPhoto(data)
        }
    }

    return(
        <ContainerFunction>
            { CapturedPhoto &&
                <ModalVisualizar
                CapturedPhoto={CapturedPhoto}
                />
            }
            <Camera 
            style={{
            width:'100%',
            height:'100%',
            }}
            type={Camera.Constants.Type.back}
            ref={camRef}
            >
                <Box
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}
                >
                    <Button
                    borderRadius="$full"
                    size="lg"
                    p="$3.5"
                    bg="$indigo600"
                    borderColor="$indigo600"
                    onPress={() => takepicture()}
                    >
                    {/* EditIcon is imported from 'lucide-react-native' */}
                    <ButtonIcon as={Camera} />
                    </Button>
                </Box>
            </Camera> 
        </ContainerFunction>
    )

}