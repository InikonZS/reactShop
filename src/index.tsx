import ReactDOM from 'react-dom/client';
import Application from './application';
import { Provider } from 'react-redux';
import { Action, createStore } from 'redux'
const store = createStore<number, Action<any>, unknown, unknown>((state=0, action)=>{
    console.log(state, action);
    if (action.type=='q'){
        return state + 10;
    }
    return state + 1;
});

(window as any).store = store;

const rootContainer = document.querySelector('#root');
if (!rootContainer){
    throw new Error('Root container is not found.');
}

const root = ReactDOM.createRoot(rootContainer);
root.render(
    <Provider store={store}>
        <Application />
    </Provider>
)

type GetFirstArgumentOfAnyFunction<T> = T extends (
    first: infer FirstArgument,
    ...args: any[]
  ) => any
    ? FirstArgument
    : never
  
  type t = GetFirstArgumentOfAnyFunction<(name: string, age: number) => void> // string

  function a(b:number, c:string){
    const w:t = 4;
  }