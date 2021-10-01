import { IonAvatar, IonButton, IonCard, IonContent, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { bed, chatbubbles, restaurant, ticket } from 'ionicons/icons';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonCard className="card">
          <IonToolbar>
            <IonItem>
              <IonTitle>
                <h1>Explore</h1>
              </IonTitle>
              <IonAvatar>
                <img className="avatar" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </IonAvatar>
            </IonItem>
          </IonToolbar>
          
          <IonItemSliding>
            <IonItem>
              <IonButton color="dark" shape="round">
                <IonIcon icon={bed}>
                </IonIcon>
                <IonLabel>
                  <IonText>
                    <p>Hotels</p>
                  </IonText>
                </IonLabel>
              </IonButton>
              <IonButton color="dark" shape="round">
                <IonIcon icon={ticket}>
                </IonIcon>
                <IonLabel>
                  <IonText>
                    <p>Things to do</p>
                  </IonText>
                </IonLabel>
              </IonButton>
              <IonButton color="dark" shape="round">
                <IonIcon icon={restaurant}>
                </IonIcon>
                <IonLabel>
                  <IonText>
                    <p>Restaurants</p>
                  </IonText>
                </IonLabel>
              </IonButton>
              <IonButton color="dark" shape="round">
                <IonIcon icon={chatbubbles}>
                </IonIcon>
                <IonLabel>
                  <IonText>
                    <p>Forums</p>
                  </IonText>
                </IonLabel>
              </IonButton>
            </IonItem>
          </IonItemSliding>
        </IonCard>
        <IonCard className="card">
          <IonToolbar className="leftcorner">
            <IonText>
              <h1>Goodbye to crushing heat and crushing crowds</h1>
            </IonText>
            <IonText>
              <h3>Why fall is the best time to visit our national parks</h3>
            </IonText>
            <IonButton shape="round" color="dark">
              Get the intel
            </IonButton>
          </IonToolbar>
        </IonCard>
        <IonText>
          <h2>Small Batch Stays</h2>
        </IonText>
        <IonText>
          <h5>Cool cities, cooler boutique hotels</h5>
        </IonText>
        <IonItemSliding>
          <IonItem>
            <IonCard className="card">
              <IonText>
                <h1 className="corner">Austin</h1>
              </IonText>
            </IonCard>
            <IonCard className="card">
              <IonText>
                <h1 className="corner">Nashville</h1>
              </IonText>
            </IonCard>
            <IonCard className="card">
              <IonText>
                <h1 className="corner">New York City</h1>
              </IonText>
            </IonCard>
            <IonCard className="card">
              <IonText>
                <h1 className="corner">Washington DC</h1>
              </IonText>
            </IonCard>
          </IonItem>
        </IonItemSliding>
        <IonText>
          <h2>Plan your next escape</h2>
        </IonText>
        <IonText>
          <h5>Family-friendly spots to explore</h5>
        </IonText>
        <IonItemSliding>
          <IonItem>
            <IonCard className="card">
              <IonText>
                <h1 className="corner">Fredericksburg</h1>
              </IonText>
            </IonCard>
            <IonCard className="card">
              <IonText>
                <h1 className="corner">Palisade</h1>
              </IonText>
            </IonCard>
            <IonCard className="card">
              <IonText>
                <h1 className="corner">Middleburg</h1>
              </IonText>
            </IonCard>
            <IonCard className="card">
              <IonText>
                <h1 className="corner">Traverse City</h1>
              </IonText>
            </IonCard>
          </IonItem>
        </IonItemSliding>
        <IonCard className="card">
          <IonToolbar className="leftcorner">
            <IonText>
              <h1>Explore Las Vegas, fork first</h1>
            </IonText>
            <IonText>
              <h3>Our guide to the top celebrity chef restaurants in vegas</h3>
            </IonText>
            <IonButton shape="round" color="dark">
              Check them out
            </IonButton>
          </IonToolbar>
        </IonCard>
        <IonCard className="card">
          <IonToolbar className="leftcorner">
            <IonText>
              <h1>Pack that weekender bag</h1>
            </IonText>
            <IonText>
              <h3>Our guide to last-minute road trips you can do right now</h3>
            </IonText>
            <IonButton shape="round" color="dark">
              Read the guide
            </IonButton>
          </IonToolbar>
        </IonCard>
        <IonCard className="card">
          <IonToolbar className="leftcorner">
            <IonText>
              <h1>From dream trips to Michelin meals</h1>
            </IonText>
            <IonText>
              <h3>All the ways we're celebrating Hispanic Heritage Month</h3>
            </IonText>
            <IonButton shape="round" color="dark">
              Read the guide
            </IonButton>
          </IonToolbar>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;