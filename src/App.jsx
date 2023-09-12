import React from 'react';
import { setupIonicReact, IonApp, IonContent, IonRouterOutlet, } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, useHistory} from 'react-router-dom';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './App.css'
import Login from './components/login'

import BreakFast from './pages/BreakFast';
import Food from './pages/Food';
import Drink from './pages/Drink';
import Home from './pages/Home';
setupIonicReact({ mode: 'md' });
function App() {
  

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/login" component={Login}  exact={true}/>
          <Route path="/home" component={Home} />
          <Route path="/desayunos" exact component={BreakFast}  />
          <Route path="/comidas" exact component={Food}/>
          <Route path="/bebidas" exact component={Drink}/>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
