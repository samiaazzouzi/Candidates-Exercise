import { ClientApp } from '@application/components/app';
import { render } from 'react-dom';

// const rootElement = document.getElementById('root');
// const renderMethod = (rootElement?.childElementCount ?? 0) === 0 ? render : hydrate;
// console.log(rootElement);

render(<ClientApp />, document.getElementById('root'));
