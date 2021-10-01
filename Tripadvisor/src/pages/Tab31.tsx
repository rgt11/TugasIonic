import { IonAvatar, IonButton, IonChip, IonIcon, IonItem, IonLabel, IonPage, IonSearchbar, IonText } from "@ionic/react";
import { heart, location,document, add } from "ionicons/icons";
import './subtab.css'

const Tab31: React.FC = () => {
    return (
        <IonPage>
            <IonItem>
                <IonAvatar slot="start">
                    <IonIcon className="big" icon={heart}></IonIcon>
                </IonAvatar>
                <IonLabel>Save places you'd like to visit</IonLabel>
            </IonItem>
            <IonItem>
                <IonAvatar slot="start">
                    <IonIcon className="big" icon={location}></IonIcon>
                </IonAvatar>
                <IonLabel>See your saves on a map</IonLabel>
            </IonItem>
            <IonItem>
                <IonAvatar slot="start">
                    <IonIcon className="big" icon={document}></IonIcon>
                </IonAvatar>
                <IonLabel>Keep track of notes, links, and more</IonLabel>
            </IonItem>
            <IonItem>
                <IonAvatar slot="start">
                    <IonIcon className="big" icon={add}></IonIcon>
                </IonAvatar>
                <IonLabel>Share and collaborate on your plans</IonLabel>
            </IonItem>
            <IonText>
                <h4>Trip name</h4>
            </IonText>
            <IonSearchbar placeholder="Ex:Weekend in NYC"></IonSearchbar>
            <IonButton shape="round" color="dark"><IonText><IonLabel>Create a Trip</IonLabel></IonText></IonButton>
        </IonPage >
    );
};
export default Tab31;