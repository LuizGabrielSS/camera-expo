import React from 'react'

//Para o estilo
import { GluestackUIProvider} from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme
import TelaPadrao from './src/components/screen'

//Aplicacao
import RotasPrincipais from './src/routes';

export default function App() {
  return (
    // <Provider store={Store}>
      <GluestackUIProvider config={config}>
        <TelaPadrao>
          <RotasPrincipais/>
        </TelaPadrao>
      </GluestackUIProvider>
    // </Provider>
  );
}
