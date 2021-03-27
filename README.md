# MARVEL COMICS API  
#### Link do apk:  

##### Projeto simples para listagem e buscas de Comics (Hqs) da marvel utilizando a api oficial !

#### Instalação 
##### Configurando ambiente de desenvolvimento
###### Intalação do Node js
Windows: você pode simplesmente baixar o node js do site oficial e instalá-lo em um processo simples https://nodejs.org/en/download/ 
Linux: no linux estarei disponibilizando um tutorial de como fazer a instalação https://nodejs.org/en/download/package-manager/
###### Instalação do Yarn caso não queira usar o npm
com node js instalado você já deve poder usar o npm e executando o comando abaixo poderá instalar o yarn para ambos os sistemas

```npm install --global yarn```

###### instalação do Expo 
provavelmente com o processo acima concluído você já seja capaz de iniciar o projeto utilizando ```yarn start``` mais em caso de dúvida
você poderá está instalar o expo cli por meio desse comando para ambos sistemas ```yarn add global expo-cli``` ou ```npm add global expo-cli```



##### Configurando Aplicação
Inicialmente você deverá que fazer 2 configurações básicas para conseguir rodá lo uma que é necessário para fazer as buscas
utilizando a api da marvel e a segunda e caso crie o apk ele reconheça o maps sem ser no expo!

##### Api Marvel

acesse e crie sua conta api da marvel estarei deixando os links abaixo para poder ter acesso a suas chaves 
a pública e a privada , após obter a chaves privada e públicas basta substituir os valores das variáveis 
```PUBLIC_KEY:Sua Chave Pública e PRIVATE_KEY:sua chave privada ```
ambos ficam na pasta ```src/configs/index.json``` basta modificá-lo, apois isso podemos dar continuidade veja a documentação abaixo:
api: https://developer.marvel.com
documentação: https://developer.marvel.com/docs


##### Api Google Maps

seguindo o tutorial do expo como gerar a sua api key da google que estou deixando abaixo:
MapView: https://docs.expo.io/versions/latest/sdk/map-view/
após obter sua api key do google maps faça a seguinte configuração 
no app.json :
  ```"android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#EC1D24"
      },
      "package": "com.JuniorSilva.MarvelComics",

      "useNextNotificationsApi": true,
      "config": {
        "googleMaps": {
          "apiKey": "SUA API DA GOOGLE MAPS"
        }
      }
    }
```



##### Iniciando
concluindo as configurações acima você pode dar o comando :
yarn ou npm i para instalar as dependências e rodas o app no expo utilizando o comando:
```yarn start ou npm start```

