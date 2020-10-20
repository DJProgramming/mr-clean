import React, { setGlobal, useGlobal } from 'reactn';
import './App.scss';
import { AppContainer } from './components/app-container/app-container.component';

export interface Global {
  theme: string;
}

setGlobal({
  theme: "default"
});

export const App: React.FC = () => {
  const [ theme ] = useGlobal<Global>('theme');
  return (
    <div id="app" className={`full--width ${theme}`}>
      <AppContainer/>
    </div>
  );
}

export default App;
