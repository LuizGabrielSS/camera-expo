import React from 'react'
import { Box,Button,ButtonText,ButtonIcon } from '@gluestack-ui/themed';

export default function ButtonFunction({TextButton,Desabilitarbotao=false,Aparencia="outline",Color="primary",Pressionado={},Icone=false,IconeIcon={}}){

    "outline"

    "solid"

    "link"

    return(
        <Box>
            <Button
            size="md"
            variant={Aparencia}
            action={Color}
            isDisabled={Desabilitarbotao}
            onPress={() => Pressionado()}
            >
            <ButtonText>{TextButton}</ButtonText>
            {
                Icone === true
                ? <ButtonIcon as={IconeIcon} />
                : null
            }
            </Button>
        </Box>
    )

}