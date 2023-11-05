import React from 'react'
import ContainerFunction from '../../../components/containerfunction'
import DialogFunction from '../../../components/dialogfunction'

export default function NaoAutorizado({setHasPermission}){

    async function VerificarPermissao(){

        const {status} = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');

    }

    return(
        <ContainerFunction>
            <DialogFunction
               Fechar={false} 
               DialogTitulo="Permissao negada"
               DialogTexto="A permissao para usar a camera foi negada, caso deseje permitir, clique no botao"
               ConfirmarDialog={()=>VerificarPermissao()}
               OpcoesBotoes={true}
               DialogInformativo={true}
            />
        </ContainerFunction>
    )

}