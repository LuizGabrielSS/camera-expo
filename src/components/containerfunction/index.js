import React from 'react'
import {AlertDialog,AlertDialogBackdrop,AlertDialogContent,AlertDialogHeader,AlertDialogBody,Heading,Text} from '@gluestack-ui/themed';
import LottieView from 'lottie-react-native';

function Dialog({DialogTitulo,DialogTexto}){

    return(
        <AlertDialog
        isOpen={true}
      >
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading size="lg">{DialogTitulo}</Heading>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text size="sm">
              {DialogTexto}
            </Text>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    )

}

function CarregandoScreen(){

    return(
        <>
        <LottieView 
        source={require('./lottieviews/loading.json')} 
        autoPlay 
        loop/>
        </>
    )

}

function Erro(){

    return(
        <>
        <LottieView 
        source={require('./lottieviews/error.json')} 
        autoPlay 
        loop/>
        <Dialog
        DialogTitulo = "Erro inesperado"
        DialogTexto = "Olá, parece ter ocorrido um erro com a aplicaçao, tente novamente mais tarde, caso o problema continue, entre em contato"
        />
        </>
    )

}

function ErroConexao(){

    return(
        <>
        <LottieView 
        source={require('./lottieviews/error_connection.json')} 
        autoPlay 
        loop/>
        <Dialog
        DialogTitulo= "Erro de conexao"
        DialogTexto = "Olá, parece que ocorreu um erro de conexao com a plataforma, por favor, verifique sua conexao com a internet e tente novamente mais tarde"
        />
        </>
    )

}

export default function ContainerFunction({Loading=false,Status=200,children}){

    return(
        <>
            {
                Loading === true
                ? <CarregandoScreen/>
                : <>
                    {
                        Status === 200
                        ? null
                        : <>
                            {
                                Status === "ERR_NETWORK"
                                ? <ErroConexao/>
                                : <Erro/>       
                            }
                        </>
                    }
                    </>
            }
        </>
    )

}