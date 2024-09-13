## Requirements

| Name                          | Version  |
|-------------------------------|----------|
| [Node.js](https://nodejs.org) | v16.4.2+ |
| NPM                           | v8.5.x   |

## How to run

### Create a `.env` file in the root of the project and add the following:

| name                 | value                                                                                                                                                                                                         | required |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| REACT_APP_API_JOKES  | https://api.chucknorris.io/jokes                                                                                                                                                                              | yes      |
| REACT_APP_API        | https://dummyjson.com                                                                                                                                                                                         | yes      |
| REACT_APP_SENTRY_DSN | secret                                                                                                                                                                                                        | no       |
| SKIP_PREFLIGHT_CHECK | true                                                                                                                                                                                                          | no       |
| SRC_PATH             | ./src                                                                                                                                                                                                         | no       |
| EXCLUDED_FILES       | **/*.test.*,**/*.stories.*,**/interfaces/**,**/constants/**,**/i18n/**,**/mocks/**,**/store/tags/**,**/store/types/**,App.tsx,index.tsx,react-app-env.d.ts,reportWebVitals.ts,setupTests.ts,**/store/store.ts | no       |

### Install the dependencies:

```bash
npm istall
#or 
yarn install
```

### Run the development server:

```bash
npm run start
# or
yarn dev
```

#### Development server will run on [http://localhost:3000](http://localhost:3000)

## How to build

```bash
npm run build
#or
yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## How to run eject

```bash
npm run storybook
#or
yarn storybook
```

## How to run eject

```bash
npm run eject
#or
yarn eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## How to run tests

```bash
npm run test
#or
yarn test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

## Libs/API Documentation

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). - learn more.
- [React documentation](https://reactjs.org/) - learn about React.js features and API.


