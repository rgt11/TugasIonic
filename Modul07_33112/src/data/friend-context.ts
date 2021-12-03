import React from 'react';
export interface Friend {
    id: string,
    name: string,
    src: string
}

interface Context {
    friends: Friend[];
    addFriend: (friendName: string, friendSrc: string) => void,
    updateFriend: () => void,
    deleteFriend: () => void
}

const FriendsContext = React.createContext<Context>({
    friends: [],
    addFriend: () => {},
    updateFriend: () => {},
    deleteFriend: () => {}
});

export default FriendsContext;