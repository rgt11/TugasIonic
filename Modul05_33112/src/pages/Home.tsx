import React from "react";
import {
  IonButton, IonCol,
  IonContent, IonGrid,
  IonHeader,
  IonList,
  IonPage, IonRow,
  IonTitle, IonToolbar
} from "@ionic/react";

import './Home.css'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className={'ion-padding'}>
        <IonRow className={'ion-justify-content-center'}>
          <IonCol size-sm={'8'} size-md={'8'}>
            <IonGrid className={'ion-no-padding'}>
              <IonButton expand={'block'} routerLink={'/bmi'}>Bmi Calculator</IonButton>
              <IonButton expand={'block'} routerLink={'/bmr'}>Bmr Calculator</IonButton>
              <IonList>
              </IonList>
            </IonGrid>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Home;