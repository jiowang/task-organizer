import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

import SpacingWrapper from '../../shared/components/UIElements/SpacingWrapper';

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

const deleteListHandler = props => {
    alert('Deleting list to be implemented...');
}

const MyList = props => {
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
        <SpacingWrapper>
            <ul>
                {wantedList.listItems.map(item => (
                    <li>
                        {item.content}
                        <NavLink
                            to={`/${userId}/myLists/${wantedList.listId}/${item.contentId}`}
                            className="btn btn-success btn-sm rounded-0"
                            type="button"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Edit">
                                <i className="fa fa-edit"></i>
                        </NavLink>
                        <button 
                            className="btn btn-danger btn-sm rounded-0"
                            type="button"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Delete"
                            onClick={deleteListHandler}>
                                <i className="fa fa-trash"></i>
                        </button>
                    </li>
                ))}
            </ul>

            <button
                className="btn btn-primary btn-sm rounded-0"
                type="button"
                data-toggle="tooltip"
                data-placement="top"
                title="Add">
                    <i className="fa fa-plus"></i>
            </button>
       </SpacingWrapper>
    </React.Fragment>
    );
};

export default MyList;