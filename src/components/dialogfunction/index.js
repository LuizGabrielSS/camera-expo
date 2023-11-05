import React from 'react'
import {AlertDialog,AlertDialogBackdrop,AlertDialogContent,AlertDialogHeader,AlertDialogCloseButton,AlertDialogFooter,AlertDialogBody,Icon,ButtonGroup,Button,ButtonText} from '@gluestack-ui/themed';

export default function DialogFunction({Fechar=true,FecharDialog={},ConfirmarDialog={},OpcoesBotoes=false,DialogInformativo=false}){

    return(
        <AlertDialog
        isOpen={DialogOpen}
        onClose={() => {
            Fechar === true
            ? FecharDialog()
            : null
          }}
        >
           <AlertDialogBackdrop />
            <AlertDialogContent>
                 <AlertDialogHeader>
                    <Heading size="lg">{DialogTitulo}</Heading>
                    {
                        Fechar === true
                        ?   <AlertDialogCloseButton>
                                <Icon as={CloseIcon} />
                            </AlertDialogCloseButton>
                        : null
                    }
                </AlertDialogHeader>
                <AlertDialogBody>
                    <Text size="sm">
                    {DialogTexto}
                    </Text>
                </AlertDialogBody>
            </AlertDialogContent>
            {
                OpcoesBotoes === true
                ?   <>
                        {
                            DialogInformativo === true
                            ? <AlertDialogFooter>
                                    <ButtonGroup space="lg">
                                        <Button
                                        variant="outline"
                                        action="positive"
                                        onPress={() => {
                                            FecharDialog()
                                        }}
                                        >
                                            <ButtonText>OK</ButtonText>
                                        </Button>
                                    </ButtonGroup>
                                </AlertDialogFooter>
                            : <AlertDialogFooter>
                            <ButtonGroup space="lg">
                                <Button
                                    bg="$error600"
                                    action="negative"
                                    onPress={() => {
                                        Fechar === true
                                        ? FecharDialog()
                                        : null
                                      }}
                                    >
                                    <ButtonText>Cancelar</ButtonText>
                                </Button>
                                <Button
                                    variant="outline"
                                    action="positive"
                                    onPress={() => {
                                    ConfirmarDialog()
                                    }}
                                >
                                    <ButtonText>Confirmar</ButtonText>
                                </Button>
                            </ButtonGroup>
                                </AlertDialogFooter>
                        }
                    </>
                :null
            }
      </AlertDialog>
    )

}