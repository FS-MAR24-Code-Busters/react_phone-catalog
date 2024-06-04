import {
  HashRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './app/store';
import { NotFoundPage } from './pages/NotFoundPage';


export const Root = () => (
  <HashRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="/" element={<App />}>
          <Route index element={''} />
          <Route path="phones">
            <Route index element={''} />
            <Route path=":productId" element={''} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          <Route path="tablets">
            <Route index element={''} />
            <Route path=":productId" element={''} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          <Route path="accessories">
            <Route index element={''} />
            <Route path=":productId" element={''} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          <Route path="favourites">
            <Route index element={''} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          <Route path="cart">
            <Route index element={""} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Provider>
  </HashRouter>
);
