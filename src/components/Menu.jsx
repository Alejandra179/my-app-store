import React from 'react'
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';

import {caretBackOutline, fastFoodOutline, cafeOutline,beerOutline } from 'ionicons/icons';
export default function Menu() {
  return (
    <>
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
    </>
  )
}
