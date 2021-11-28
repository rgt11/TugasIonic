import React, {useState} from 'react';
import FriendsContext, {Friend} from "./friend-context";

const FriendsContextProvider: React.FC = props => {
    const [ friends, setFriends ] = useState<Friend[]>([
        {
            id: 'f1',
            name: 'Thor',
            src: '/../assets/images/thor.jpg'
        },
        {
            id: 'f2',
            name: 'Tony Stark',
            src: '/../assets/images/iron.jpg'
        },
        {
            id: 'f3',
            name: 'Peter Parker',
            src: '/../assets/images/tom.jpg'
        }
    ]);

    const addFriend = (name: string, src: string) => {
        const newFriend: Friend = {
            id: Math.random().toString(),
            name: name,
            src: src
        };

        setFriends((currFriends) => {
            return currFriends.concat(newFriend);
        });
    };

    const updateFriend = () => {};
    const deleteFriend = () => {};

    return(
        <FriendsContext.Provider value={{
            friends,
            addFriend,
            updateFriend,
            deleteFriend
        }}>
            {props.children}
        </FriendsContext.Provider>
    );
};

export default FriendsContextProvider;