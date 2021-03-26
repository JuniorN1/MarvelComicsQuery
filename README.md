# MARVEL COMICS API  
#### Link do apk:  https://expo.io/artifacts/293b0e68-ce36-41fc-a373-b3c4c6b3cbf4

##### Projeto simples para listagem e buscas de Comics (Hqs) da marvel utilizando a api oficial !

#### Instalação 
##### Configurando ambiente de desenvolvimento
###### Intalação do Node js
Windows: voce pode simplesmente baixar o node js do site oficial e instalalo em um processo simples  https://nodejs.org/en/download/
Linux: no linux estarei disponibilizando um tutorial de como fazer a instalação https://nodejs.org/en/download/package-manager/
###### Instalação do Yarn caso nao queira usar o npm
com node js instalado voce ja deve poder usar o npm e execultando o comando abaixo poderar instalar o yarn para ambos os sistemas
```npm install --global yarn```

###### instalação do Expo 
provavelmente com o processo acima comcluido voce ja seja capais de iniciar o projeto ultilizando ```yarn start``` mais em caso de duvida
voce poderar esta instalar o expo cli por meio desse comando para ambos sistemas ```yarn add global expo-cli``` ou ```npm add global expo-cli```


##### Configurando Aplicação
Inicialmente você deverá que fazer 2 configurações básicas para conseguir rodá lo uma que é necessário para fazer as buscas
utilizando a api da marvel e a segunda e caso crie o apk ele reconheça o maps sem ser no expo!

##### Api Marvel

acesse e crie sua conta api da marvel estarei deixando os links abaixo para poder ter acesso a suas chaves 
a pública e a privada , após obter a chaves privada e públicas basta substituir os valores das variáveis 
```PUBLIC_KEY:Sua Chave Pública e PRIVATE_KEY:sua chave privada ```
ambos ficam na pasta ```src/configs/index.json``` basta modificalo, apois isso podemos da continuidade veja a documentação abaixo:
api: https://developer.marvel.com
documentação: https://developer.marvel.com/docs

##### Api Google Maps

seguindo o tutoria do expo como gerar a sua api key da google que estou deixando abaixo:
MapView: https://docs.expo.io/versions/latest/sdk/map-view/
apois obter sua api key do google maps faça a seguinte comfiguraçao 
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

