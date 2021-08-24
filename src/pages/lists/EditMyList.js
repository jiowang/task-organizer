import React from 'react';
import { useParams } from 'react-router';

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

const EditMyList = props => {
    const userId = useParams().userId;
    const listId = useParams().listId;

    const wantedList = MASTERLIST.find(item => (
        item.userId === userId && item.listId === listId
    ));


    if (!wantedList) {
        return <h1>The list does not exist.</h1>;
    };

    if (wantedList.listItems.length === 0) {
        return <h1>There are no items in this list.</h1>;
    }

    return (
        <React.Fragment>
        <form>
            <ul>
            {wantedList.listItems.map(item => (
                <li>
                    {item.content}
                </li>
            ))}
            </ul>
        </form>
        </React.Fragment>
    );
};

export default EditMyList;