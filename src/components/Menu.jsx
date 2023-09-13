import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import {cafeOutline,fastFoodOutline,caretBackOutline,beerOutline } from 'ionicons/icons';


import BreakFast from '../pages/BreakFast';
import Home from '../pages/Home';
import Food from '../pages/Food';
import Drink from '../pages/Drink';

function Menu() {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          {/*
          Use the render method to reduce the number of renders your component will have due to a route change.

          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
          <Route path="/home" render={() => <Home />} exact={true} />
          <Route path="/desayunos" render={() => <BreakFast/>} exact={true} />
          <Route path="/comidas" render={() => <Food/>} exact={true} />
          <Route path="/bebidas" render={() => <Drink/>} exact={true} />
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
      </IonTabs>
    </IonReactRouter>
  );
}
export default Menu;