import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

let MASTERLIST = [
    {
        listId: 'l1',
        userId: 'u1',
        name: 'TheChosenWang',
        title: 'Costco Shopping List',
        listItems: [
            {
                contentId: '#1',
                content: 'A carton of eggs.',
            },
            {
                contentId: '#2',
                content: 'Chicken Breasts.'
            },
            {
                contentId: '#3',
                content: 'Milk.'
            }
        ]
    },
    {
        listId: 'l2',
        userId: 'u2',
        name: 'NotChosenWang',
        title: 'Walmart Shopping List',
        listItems: [
            {
                contentId: '#1',
                content: 'Cheese.',
            },
            {
                contentId: '#2',
                content: 'Flour.'
            },
            {
                contentId: '#3',
                content: 'Water Filters.'
            }
        ]
    }
]

const MyLists = props => {
    
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
                <NavLink to={`/${userId}/myLists/${eachWholeList.listId}`}>{eachWholeList.title}</NavLink>
            ))}
        </ul>
   </React.Fragment>);
};

export default MyLists;