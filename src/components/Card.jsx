import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

function Card() {
  return (
    <>
        <IonCard>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <IonCardHeader>
                <IonCardTitle>Card Title</IonCardTitle>
                <IonCardSubtitle>$1500</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>Heres a small text description for the card content. Nothing more, nothing less.</IonCardContent>
        </IonCard>
    </>
    
  );
}
export default Card;