# NextServ

App mobile para encontrar estabelecimentos próximos e agendar serviços. Feito com React Native e Expo.

## Stack

- [Expo SDK 57](https://docs.expo.dev/versions/v57.0.0/) com [Expo Router](https://docs.expo.dev/router/introduction/) (rotas por arquivos em `src/app`)
- React Native 0.86, React 19, TypeScript
- Ícones: `lucide-react-native` · Fontes: DM Sans e Manrope (`@expo-google-fonts`)

## Telas

| Rota | Tela |
|---|---|
| `/` | Boas-vindas |
| `/login` | Login |
| `/signup` | Cadastro |
| `/home` | Início: locais próximos |
| `/schedule` | Agenda: calendário do mês e agendamentos do dia |
| `/search` | Busca de serviços e locais |

As três últimas ficam em `src/app/(tabs)` e são navegadas pela `TabBar`.

**Acesso:** o login e o cadastro só validam os campos no app (email válido, senha com 6+ caracteres, nome de usuário com 3+ e senhas iguais). Qualquer dado nesse formato entra. Também há o botão **Entrar como visitante**. Ainda não existe backend: os dados das telas vêm de `src/mocks.ts`.

## Estrutura

```
src/
├── app/                 páginas (rotas do Expo Router)
├── components/          componentes no padrão Atomic Design
│   ├── atoms/           Button, Badge, DismissKeyboard
│   ├── molecules/       InputGroup, GoogleAuthButton, EstablishmentCard
│   └── organisms/       LoginForm, SignUpForm, TabBar
├── mocks.ts             dados de exemplo
├── theme.ts             cores, fontes e assets
├── types.ts             tipos (DTOs)
└── validation.ts        validação dos formulários
assets/nextserv/         logo, ícones, splash e imagens do app
```

Use o alias `@/` nos imports, por exemplo `@/components/atoms/Button`.

## Como rodar

Instale as dependências:

```bash
npm install
```

### No navegador

```bash
npm run web
```

### No celular Android (development build)

O projeto usa o SDK 57. O Expo Go da Play Store é para o SDK 58, então ele **não** abre este projeto. Use uma development build.

Requisitos (Windows):

- [Android Studio](https://developer.android.com/studio) com Android SDK, Platform-Tools e Build-Tools
- **JDK 21.** O JDK 25 que vem com o Android Studio quebra a compilação do CMake das bibliotecas nativas.
- **CMake 3.30 ou mais novo** (SDK Manager → SDK Tools → CMake). O 3.22.1 entra em ciclo (`build.ninja still dirty`) no Windows. Depois do primeiro `prebuild`, aponte o build para ele em `android/local.properties`:

  ```properties
  cmake.dir=C\:\\Users\\<usuario>\\AppData\\Local\\Android\\Sdk\\cmake\\3.31.6
  ```

Com o celular conectado por USB e a depuração USB ativa:

```powershell
$env:JAVA_HOME = "C:\Program Files\Java\jdk-21"; npm run android
```

Isso instala o app no celular. Depois disso, só é preciso recompilar quando mudar alguma dependência nativa, o ícone ou o splash. No dia a dia, basta subir o Metro e encaminhar a porta pelo USB:

```bash
npx expo start --dev-client
```

```bash
adb reverse tcp:8081 tcp:8081
```

### APK de release (sem depender do computador)

Gera um APK com o código embutido, assinado com a chave de teste (`debug.keystore`):

```powershell
$env:JAVA_HOME = "C:\Program Files\Java\jdk-21"; npx expo run:android --variant release
```

O APK fica em `android/app/build/outputs/apk/release/app-release.apk`. Para publicar na Play Store, é preciso configurar uma chave de assinatura própria.

A pasta `android/` é gerada pelo Expo (`npx expo prebuild`) e não é versionada.

## Pendências conhecidas

- `assets/nextserv/gray-map.png` (fundo das telas de boas-vindas, login e cadastro) tem marca d'água do Adobe Stock e precisa ser trocado por uma imagem licenciada antes de publicar.
- O mapa das telas Início e Busca é uma imagem estática.
- "Esqueceu a senha?" ainda não tem ação, e a Agenda mostra só o mês atual.
