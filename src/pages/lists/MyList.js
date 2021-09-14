import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import ListContent from './ListContent';
import SpacingWrapper from '../../shared/components/UIElements/SpacingWrapper';
import listStyles from './ListTemplate.module.css';

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
        return (
        <SpacingWrapper>
            <h1>The list does not exist.</h1>
            <Link to={`/${userId}/myLists`}>
                <input type='button' value='Back'></input>
            </Link>
        </SpacingWrapper>
        );
    };

    if (wantedList.listItems.length === 0) {
        return (
        <SpacingWrapper>
            <h1>There are no items in this list.</h1>
            <Link
                to={`/${userId}/myLists/${wantedList.listId}/new`}
                className="btn btn-primary btn-sm rounded-0"
                type="button"
                data-toggle="tooltip"
                data-placement="top"
                title="Add">
                    <i className="fa fa-plus"></i>
            </Link>
            <Link to={`/${userId}/myLists`}>
                <input type='button' value='Back'></input>
            </Link>
        </SpacingWrapper>
        );
    }

    return (
    <React.Fragment>
        <SpacingWrapper>
            <body className={listStyles['list-body']}>
                <div className={`row d-flex justify-content-center ${listStyles.container}`}>
                <div className="col-md-8">
                    <div className={`card-hover-shadow-2x mb-3 ${listStyles.card}`}>
                        <div className={`${listStyles['card-header-tab']} ${listStyles['card-header']}`}>
                            <div className={`${listStyles['card-header-title']} font-size-lg ${listStyles['text-capitalize']} font-weight-normal`}>
                                <i className={`fa fa-tasks ${listStyles['list-i']}`}></i>&nbsp;{wantedList.title}</div>
                        </div>
                        <div className={listStyles['scroll-area-sm']}> {/* makes the scroll area bigger */}
                            <perfect-scrollbar className="ps-show-limits">
                                <div /*style={{position: "static"}} className="ps ps--active-y" */>
                                    <div className="ps-content">
                                        <ul className={`${listStyles['list-group']} list-group-flush`}>
                                            {wantedList.listItems.map(item => (
                                                    <ListContent heading={item.content} />
                                                    /* <Link
                                                        to={`/${userId}/myLists/${wantedList.listId}/${item.contentId}`}
                                                        className="btn btn-success btn-sm rounded-0"
                                                        type="button"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Edit">
                                                            <i className="fa fa-edit"></i>
                                                    </Link>
                                                    <button 
                                                        className="btn btn-danger btn-sm rounded-0"
                                                        type="button"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Delete"
                                                        onClick={deleteListHandler}>
                                                            <i className="fa fa-trash"></i>
                                                    </button> */
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </perfect-scrollbar>
                        </div>
                        <div class={`d-block text-right ${listStyles['card-footer']}`}>
                            <Link
                                to={`/${userId}/myLists`}
                                className={`mr-2 ${listStyles.btn} btn-link btn-sm`}
                            >
                                Cancel
                            </Link>
                            <Link
                                to={`/${userId}/myLists/${wantedList.listId}/new`}
                                className={`${listStyles.btn} btn-primary`}
                            >
                                Add
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
            </body>
        </SpacingWrapper>
    </React.Fragment>
    );
};

export default MyList;