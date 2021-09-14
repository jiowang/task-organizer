import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import SpacingWrapper from '../shared/components/UIElements/SpacingWrapper';

let MASTERLIST = [
    {
        listId: 'l1',
        userId: 'u1',
        name: 'TheChosenWang',
        title: 'Costco Shopping List',
        listItems: [
            {
                contentId: 'c1',
                content: 'A carton of eggs.',
            },
            {
                contentId: 'c2',
                content: 'Chicken Breasts.'
            },
            {
                contentId: 'c3',
                content: 'Milk.'
            }
        ]
    },
    {
        listId: 'l2',
        userId: 'u1',
        name: 'TheChosenWang',
        title: 'Costco Shopping List 2',
        listItems: [
            {
                contentId: 'c1',
                content: 'Cleaning Wipes.',
            },
            {
                contentId: 'c2',
                content: 'Frozen Pizza.'
            },
            {
                contentId: 'c3',
                content: 'Salad Mix.'
            }
        ]
    },
    {
        listId: 'l3',
        userId: 'u2',
        name: 'NotChosenWang',
        title: 'Walmart Shopping List',
        listItems: [
            {
                contentId: 'c1',
                content: 'Cheese.',
            },
            {
                contentId: 'c2',
                content: 'Flour.'
            },
            {
                contentId: 'c3',
                content: 'Water Filters.'
            }
        ]
    },
    {
        listId: 'l4',
        userId: 'u2',
        name: 'NotChosenWang',
        title: 'Walmart Shopping List 2',
        listItems: [
            {
                contentId: 'c1',
                content: 'Dumplings.',
            },
            {
                contentId: 'c2',
                content: 'Perogies.'
            },
            {
                contentId: 'c3',
                content: 'Potatoes.'
            }
        ]
    },
    {
        listId: 'l5',
        userId: 'u3',
        name: 'Someone',
        title: 'Stuff',
        listItems: []
    }
]

const MyLists = props => {
    
    const userId = useParams().userId;

    const userMasterList = MASTERLIST.filter(eachMasterList => (
        eachMasterList.userId === userId
    ));

    if (!userMasterList || userMasterList.length === 0) {
        return (
        <SpacingWrapper>
            <h1>No user found.</h1>
        </SpacingWrapper>
        );
    };

    return (
    <React.Fragment>
        <SpacingWrapper>
            <h2>Name: {userMasterList[0].name}</h2>
            <h2>Number of lists: {userMasterList.length}</h2>
            <ul>
                {userMasterList.map(eachWholeList => (
                    <h3><Link to={`/${userId}/myLists/${eachWholeList.listId}`}>{eachWholeList.title}</Link></h3>
                ))}
            </ul>

        </SpacingWrapper>
    </React.Fragment>);
};

export default MyLists;