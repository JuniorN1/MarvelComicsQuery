# MARVEL COMICS API  
## Link do apk: https://expo.io/artifacts/e9a477fe-6f6d-4bbe-9750-f0eaa30725b0

### Projeto simples para listagem e buscas de Comics (Hqs) da marvel utilizando a api oficial !

### Configurando
Inicialmente você deverá que fazer 2 configurações básicas para conseguir rodá lo uma que é necessário para fazer as buscas
utilizando a api da marvel e a segunda e caso crie o apk ele reconheça o maps sem ser no expo!

### Api Marvel

acesse e crie sua conta api da marvel estarei deixando os links abaixo para poder ter acesso a suas chaves 
a pública e a privada , após obter a chaves privada e públicas basta substituir os valores das variáveis 
```PUBLIC_KEY = Sua Chave Pública e PRIVATE_KEY = sua chave privada ```
em ambos os index.tsx da pasta que fica em ```src/models/load/index.tsx e src/models/seach/index.tsx``` , pois isso podemos da continuidade veja a documentação abaixo:
api: https://developer.marvel.com
documentação: https://developer.marvel.com/docs

###Api Google Maps:

seguindo o tutoria do expo como gerar a sua api key da google que estou deixando abaixo
MapView: https://docs.expo.io/versions/latest/sdk/map-view/



va em app.json e adicione assim:
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



### Iniciando
concluindo as configurações acima você pode dar o comando :
yarn ou npm i para instalar as dependências e rodas o app no expo utilizando o comando:
```yarn start ou npm start```

