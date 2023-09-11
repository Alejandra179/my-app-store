import React from 'react';
import { IonInput,IonButton,IonContent } from '@ionic/react';
import { Redirect, Route, useHistory} from 'react-router-dom';
function Login() {
    const history = useHistory();
    const nextPage = ()=>{
        history.push("/home")
    }
  return (
    <>
    
    <IonContent className="ion-padding">
      <IonInput
        id="custom-input"
        label="Custom Counter Format"
        labelPlacement="floating"
        counter={true}
        maxlength={11}
        counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}
      ></IonInput>
       <IonButton onClick={nextPage} color="light">Light</IonButton>
       </IonContent>
    </>
  );
}
export default Login;