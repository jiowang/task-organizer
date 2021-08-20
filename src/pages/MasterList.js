import React from 'react';
import { useParams } from 'react-router';
import MyLists from './users/MyLists.js';

let MASTERLIST = [
    {
        id: 'l1',
        userId: 'u1',
        name: 'TheChosenWang',
        title: 'Costco Shopping List',
        listItems: [
            {
                key: '#1',
                content: 'A carton of eggs.',
            },
            {
                key: '#2',
                content: 'Chicken Breasts.'
            },
            {
                key: '#3',
                content: 'Milk.'
            }
        ]
    },
    {
        id: 'l2',
        userId: 'u2',
        name: 'NotChosenWang',
        title: 'Walmart Shopping List',
        listItems: [
            {
                key: '#1',
                content: 'Cheese.',
            },
            {
                key: '#2',
                content: 'Flour.'
            },
            {
                key: '#3',
                content: 'Water Filters.'
            }
        ]
    }
]

const MasterList = props => {
    
    const userId = useParams().userId;

    const userMasterList = MASTERLIST.filter(eachMasterList => (
        eachMasterList.userId === userId
    ));

    if (!userMasterList || userMasterList.length === 0) {
        return <h1>No user found.</h1>;
    }

    return (
    <React.Fragment>
        <h2>Name: {userMasterList[0].name}</h2>
        <h2>Number of lists: {userMasterList.length}</h2>
        <ul>
            {userMasterList.map(eachWholeList => (
                <MyLists eachWholeList={eachWholeList}/>
            ))}
        </ul>
   </React.Fragment>);
};

export default MasterList;