import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonHeader, IonImg, IonPage, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <IonToolbar>
          <IonTitle><h1>Search</h1></IonTitle>
        </IonToolbar>
        <IonSearchbar placeholder="Where to?"></IonSearchbar>
        <IonCard className="cardfront">
          <IonCardContent>
            <IonText className="text1"><h1>
              See what's good nearby
            </h1></IonText>
            <IonButton color="dark" shape="round" fill="outline" className="button2"><IonText>turn on location settings</IonText></IonButton>
          </IonCardContent>
        </IonCard>
        <IonText><h1>Destinations travelers love</h1></IonText>
        <IonRow>
          <IonCol>
            <IonCard className="card">
              <IonText>
                <h1 className="corner">New York</h1>
              </IonText>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="card">
              <IonText>
                <h1 className="corner">Singapore</h1>
              </IonText>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonCard className="card">
              <IonText>
                <h1 className="corner">Rome</h1>
              </IonText>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard className="card">
              <IonText>
                <h1 className="corner">Paris</h1>
              </IonText>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
