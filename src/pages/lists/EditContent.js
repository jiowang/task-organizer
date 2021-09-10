import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

import Input from '../../shared/components/Input'
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
    }
]

const EditContent = props => {

    const userId = useParams().userId;
    const listId = useParams().listId;
    const contentId = useParams().contentId;

    const wantedList = MASTERLIST.find(item => (
        item.userId === userId && item.listId === listId
    ));


    if (!wantedList) {
        return <h1>The list does not exist.</h1>;
    };

    if (wantedList.listItems.length === 0) {
        return <h1>There are no items in this list.</h1>;
    }

    const updateContentHandler = event => {
        event.preventDefault();
        alert("submit")
    }

    let editList = []

    for (let i = 0; i < wantedList.listItems.length; i++) {
        if (wantedList.listItems[i].contentId === contentId) {
            editList.push(
                <React.Fragment>
                    <Input id={wantedList.listItems[i].contentId} initialValue={wantedList.listItems[i].content} isValid={true} />
                    <input type="submit" value="Submit" />
                <NavLink to={`/${userId}/myLists/${wantedList.listId}`}>
                    <input type="button" value="Cancel" />
                </NavLink>
                </React.Fragment>)  
        } else {
            editList.push(<li>{wantedList.listItems[i].content}</li>);
        }
    }

    return (
        <React.Fragment>
            <SpacingWrapper>
                <form onSubmit={updateContentHandler}>
                    {editList}
                </form>
            </SpacingWrapper>
        </React.Fragment>
    );
};

export default EditContent;