import { IonBadge, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendar, personCircle, map, informationCircle, call, person, settings } from 'ionicons/icons';
import { Route, Redirect } from 'react-router';
import './Tab3.css';
import Tab31 from './Tab31';
import Tab32 from './Tab32';
import Tab33 from './Tab33';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><h1>Plan</h1></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/Tab1">
                <Tab31 />
              </Route>
              <Route exact path="/tab2">
                <Tab32 />
              </Route>
              <Route path="/tab3">
                <Tab33 />
              </Route>
              <Route exact path="/">
                <Redirect to="/tab1" />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="top">
              <IonTabButton tab="tab1" href="/tab1">
                <IonLabel>Explore</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tab2">
                <IonLabel>Search</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/tab3">
                <IonLabel>Plan</IonLabel>
              </IonTabButton>

            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
