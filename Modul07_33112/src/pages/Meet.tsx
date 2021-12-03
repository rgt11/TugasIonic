import { isPlatform } from '@ionic/core';
import { IonAlert, IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonMenuButton, IonModal, IonPage, IonRow, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { ban, trash, create, addOutline } from 'ionicons/icons';
import React, { useContext, useRef, useState } from 'react';
import FriendsContext from '../data/friend-context';

const Meet: React.FC = () => {
    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
    const nameRef = useRef<HTMLIonInputElement>(null);
    const [ startDeleting, setStartDeleting ] = useState(false);
    const [ startBlocking, setStartBlocking ] = useState(false);
    const [ toastMessage, setToastMessage ] = useState('');
    const [ isEditing, setIsEditing ] = useState(false);
    const [ selectedFriend, setSelectedFriend ] = useState<{ id: string, name: string, src: string } | null>();
    const friendsCtx = useContext(FriendsContext);

    const startBlockFriendHandler = () => {
        setStartBlocking(true);
        slidingOptionsRef.current?.closeOpened();
    }

    const blockFriendHandler = () => {
        setStartBlocking(false);
        setToastMessage('Blocked Friend!');
    };

    const startDeleteFriendHandler = () => {
        setStartDeleting(true);
        slidingOptionsRef.current?.closeOpened();
    }

    const deleteFriendHandler = () => {
        setStartDeleting(false);
        setToastMessage('Deleted Friend!');
    };

    const startEditFriendHandler = (friendId: string) => {
        slidingOptionsRef.current?.closeOpened();
        console.log("Editing...");
        const friend = friendsCtx.friends.find(f => f.id === friendId);
        setSelectedFriend(friend);
        setIsEditing(true);
    }

    const cancelEditFriendHandler = () => {
        setIsEditing(false);
    }

    // const editFriendHandler = () => {
    //     slidingOptionsRef.current?.closeOpened();
    //     console.log("Editing...");
    // };

    const callFriendHandler = () => {
        console.log("Calling...");
    };

    const startAddFriendHandler = () => {
        console.log("adding friend...");
        setIsEditing(true);
        setSelectedFriend(null);
    };

    const saveFriendHandler = () => {
        const enteredName = nameRef.current!.value;
        if(!enteredName) return;
        if(selectedFriend === null){
            friendsCtx.addFriend(enteredName.toString(), '');
        }
        setIsEditing(false);
    };

    return(
    <React.Fragment>
        <IonAlert isOpen={startDeleting}
                header="Are you sure"
                message="Do you want to delete your friend? This cannot be undone."
                buttons={[
                    {text: 'No', role: 'cancel', handler: () => {setStartDeleting(false)}},
                    {text: 'Yes', handler: deleteFriendHandler}
                ]} />

        <IonAlert isOpen={startBlocking}
                header="Are you sure"
                message="Do you want to block your friend? This cannot be undone."
                buttons={[
                    {text: 'No', role: 'cancel', handler: () => {setStartBlocking(false)}},
                    {text: 'Yes', handler: blockFriendHandler}
                ]} />
        
        <IonToast isOpen={!!toastMessage}
                message={toastMessage}
                duration={2000}
                onDidDismiss={() => {setToastMessage('')}} />
                
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    {!isPlatform('android') && (
                    <IonButtons slot="end"> 
                        <IonButton onClick={startAddFriendHandler}>
                            <IonIcon icon={addOutline} />
                        </IonButton>
                    </IonButtons>
                    )}
                    <IonTitle>Meet</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonList>
                    {friendsCtx.friends.map(friend => (
                        <IonItemSliding key={friend.id} ref={slidingOptionsRef} >
                            <IonItemOptions side="start">
                                <IonItemOption color="danger" onClick={startBlockFriendHandler}>
                                    <IonIcon slot="icon-only" icon={ban} />
                                </IonItemOption>

                                <IonItemOption color="warning" onClick={startDeleteFriendHandler}>
                                    <IonIcon slot="icon-only" icon={trash} />
                                </IonItemOption>
                            </IonItemOptions>

                            <IonItemOptions side="end">
                                <IonItemOption color="warning" onClick={startEditFriendHandler.bind(null, friend.id)}>
                                    <IonIcon slot="icon-only" icon={create} />
                                </IonItemOption>
                            </IonItemOptions>

                            <IonItem lines="full"
                                     button onClick={callFriendHandler}>
                                    <IonAvatar slot="start">
                                        <img src={friend.src} />
                                    </IonAvatar>
                                <IonLabel>{friend.name}</IonLabel>
                            </IonItem>
                        </IonItemSliding>

                        
                    ))}
                </IonList>
                {!isPlatform('ios') && (
                <IonFab horizontal="end" vertical="bottom" slot="fixed">
                    <IonFabButton color="secondary" onClick={startAddFriendHandler}>
                        <IonIcon icon={addOutline} />
                    </IonFabButton>
                </IonFab>
                )}
            </IonContent>

            <IonModal isOpen={isEditing}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Edit Friend</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="floating">Friend Name</IonLabel>
                                    <IonInput type="text" value={selectedFriend?.name} />
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-text-center">
                            <IonCol>
                                <IonButton fill="clear" color="dark" onClick={cancelEditFriendHandler}>Cancel</IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton color="dark" expand="block" onClick={saveFriendHandler}>Save</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonModal>
        </IonPage>
    </React.Fragment>
    );
};

export default Meet;