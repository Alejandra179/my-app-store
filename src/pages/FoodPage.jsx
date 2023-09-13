import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const FoodPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Comidas</IonTitle>
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
       comidas content
      </div>
    </IonContent>
  </>
);

export default FoodPage;