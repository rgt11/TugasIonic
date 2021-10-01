import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><h1>Review</h1></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Review</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard className="imagecard">
          <IonCardContent>
            <IonButton className="buttoncenter" color="dark" shape="round">Write a review</IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard className="imagecard">
          <IonCardContent>
            <IonButton className="buttoncenter" color="dark" shape="round"><IonText>Upload a photo</IonText></IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
