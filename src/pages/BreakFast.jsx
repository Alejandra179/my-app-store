import React from 'react'
import Card from '../components/Card'
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import {caretBackOutline, fastFoodOutline, cafeOutline,beerOutline } from 'ionicons/icons';
import Menu from '../components/Menu';
export default function BreakFast() {
  return (
    <div>
          <IonCard>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>$1500</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>Heres a small text description for the card content. Nothing more, nothing less.</IonCardContent>
        </IonCard> 
        <Menu/>
    </div>
  )
}
