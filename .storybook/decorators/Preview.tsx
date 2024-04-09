import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import i18n from '../../src/i18n';
import auth from '../../src/mocks/auth';
import { makeStore, persistor, store } from '../../src/store/store';

import type { ComponentType, ReactElement } from 'react';

function Preview(Story: ComponentType): ReactElement {
  const state = store.getState();
  const mockStore = makeStore({ ...state, auth });
  return (
    <HashRouter basename="/">
      <Provider store={mockStore}>
        <I18nextProvider i18n={i18n}>
          <PersistGate loading={null} persistor={persistor}>
            <Story />
          </PersistGate>
        </I18nextProvider>
      </Provider>
    </HashRouter>
  );
}

export default Preview;
