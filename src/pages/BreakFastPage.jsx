import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const BreakFastPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Desayunos</IonTitle>
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
        desayunos
      </div>
    </IonContent>
  </>
);

export default BreakFastPage;