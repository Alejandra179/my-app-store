import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const DrinkPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Bebidas</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        bebidas
      </div>
    </IonContent>
  </>
);

export default DrinkPage;