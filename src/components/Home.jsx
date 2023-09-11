import React from 'react';
import { IonFooter, IonHeader, IonTitle, IonToolbar,IonContent,IonGrid,IonRow,IonCol } from '@ionic/react';

function Home() {
  return (
    <>
     <IonContent className="ion-padding">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Header Toolbar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonGrid>
        <IonRow>
         
          <IonCol>Desayuno/Merienda</IonCol>
        
          <IonCol>Bebidas</IonCol>
          
          <IonCol>Comidas</IonCol>
          
        
        </IonRow>
      </IonGrid>

      
    
      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer Toolbar</IonTitle>
        </IonToolbar>
      </IonFooter>
      </IonContent>
    </>
  );
}
export default Home;