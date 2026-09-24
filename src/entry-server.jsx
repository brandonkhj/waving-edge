import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export { routes } from './routes.js';
export { faqs } from './data.jsx';

export function render(path) {
  return renderToString(<App path={path} />);
}
