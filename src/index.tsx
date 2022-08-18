import ReactDOM from 'react-dom/client';
import Application from './application';
import { Provider, connect } from 'react-redux';
import { Action, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const changeSeedAndFetch = (seed:any) => (dispatch: any) => {
    setTimeout(()=>{
        dispatch({type: 'seed', seed});
    }, 3000);
  };

const store = createStore<number, Action<any>, unknown, unknown>((state=0, action)=>{
    console.log(state, action);
    if (action.type=='q'){
        return state + 10;
    }
    if (action.type=='seed'){
        console.log('seed', (action as any).seed);
        return state;
    }
    return state + 1;
}, applyMiddleware(thunkMiddleware));

(window as any).store = store;

function SuperButton(props:any){
    return <button onClick={()=>props.changeSeedAndFetch(2)}>gfgd</button>
}

const SButton = connect(null, {changeSeedAndFetch})(SuperButton);

const rootContainer = document.querySelector('#root');
if (!rootContainer){
    throw new Error('Root container is not found.');
}

const root = ReactDOM.createRoot(rootContainer);
root.render(
    <Provider store={store}>
        <Application />
        <SButton></SButton>
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
   // const w:t = 4;
  }