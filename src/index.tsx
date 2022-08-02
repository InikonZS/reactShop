import ReactDOM from 'react-dom/client';
import Application from './application'

const rootContainer = document.querySelector('#root');
if (!rootContainer){
    throw new Error('Root container is not found.');
}
const something: Element = null;
const root = ReactDOM.createRoot(rootContainer);
root.render(<Application />)
