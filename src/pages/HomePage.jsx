import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const HomePage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Atrás</IonTitle>
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
       Atrás
      </div>
    </IonContent>
  </>
);

export default HomePage;