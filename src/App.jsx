import React from 'react';
import { setupIonicReact, IonApp, IonRouterOutlet, IonTabBar,IonTabButton,IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, useHistory} from 'react-router-dom';
import {cafeOutline,fastFoodOutline,caretBackOutline,beerOutline } from 'ionicons/icons';
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

import BreakFast from './pages/BreakFastPage';
import Food from './pages/FoodPage';
import Drink from './pages/DrinkPage';
import HomePage from './pages/HomePage';
setupIonicReact({ mode: 'md' });
function App() {
  

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/login" component={Login}  exact={true}/>
          <Route path="/home" component={HomePage} />
          <Route path="/desayunos" exact component={BreakFast}  />
          <Route path="/comidas" exact component={Food}/>
          <Route path="/bebidas" exact component={Drink}/>

        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={caretBackOutline} />
            <IonLabel>Atrás</IonLabel>
          </IonTabButton>

          <IonTabButton tab="desayunos" href="/desayunos">
            <IonIcon icon={cafeOutline} />
            <IonLabel>Desayunos</IonLabel>
          </IonTabButton>

          <IonTabButton tab="comidas" href="/comidas">
            <IonIcon icon={fastFoodOutline} />
            <IonLabel>Comidas</IonLabel>
          </IonTabButton>

          <IonTabButton tab="bebidas" href="/bebidas">
            <IonIcon icon={beerOutline} />
            <IonLabel>Bebidas</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
