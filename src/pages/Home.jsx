import React from 'react';
import { IonTabs, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect } from 'react-router';

import { IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';

import {caretBackOutline, fastFoodOutline, cafeOutline,beerOutline } from 'ionicons/icons';
import Menu from '../components/Menu';
export default function Home() {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          {/*
          Use the render method to reduce the number of renders your component will have due to a route change.

          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
        {/*   <Route path="/home" render={() => <HomePage />} exact={true} />
          <Route path="/radio" render={() => <RadioPage />} exact={true} />
          <Route path="/library" render={() => <LibraryPage />} exact={true} />
          <Route path="/search" render={() => <SearchPage />} exact={true} /> */}
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={caretBackOutline} />
            <IonLabel>Atras</IonLabel>
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
  )
}
