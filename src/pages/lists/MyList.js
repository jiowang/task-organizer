import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';

import Input from '../../shared/Form/Input';
import Modal from '../../shared/components/UIElements/Modal';
import ListContent from './ListContent';
import SpacingWrapper from '../../shared/components/UIElements/SpacingWrapper';
import listStyles from './ListTemplate.module.css';
import '../../shared/Form/PlaceForm.css'


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

const MyList = props => {
    const [openEdit, setOpenEdit ] = useState(false);
    const [openDeleteWarning, setOpenDeleteWarning ] = useState(false);
    const [openAddContent, setOpenAddContent ] = useState(false);

    const [formState, inputHandler, setFormData] = useForm(
        {
            content: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const openEditHandler = useCallback((contentId, listId, userId) => {
        const wantedList = MASTERLIST.find(list => list.listId === listId && list.userId === userId);
        const wantedContent = wantedList.listItems.find(content => content.contentId === contentId);
        if (wantedContent) {
            setFormData(
                {
                    content: {
                        value: wantedContent.content,
                        isValid: true
                    }
                },
                true
            );
        };
        setOpenEdit(true);
    }, [setFormData]);
    
    const closeEditHandler = useCallback((props) => {
        setOpenEdit(false);
    }, []);
    
    const openDeleteWarningHandler = useCallback((props) => {
        setOpenDeleteWarning(true);
    }, []);
    
    const closeDeleteWarningHandler = useCallback((props) => {
        setOpenDeleteWarning(false);
    }, []);
    
    const deleteListHandler = useCallback((props) => {
        alert('Deleting list to be implemented...');
    }, []);

    const openAddContentHandler = useCallback((props) => {
        setOpenAddContent(true);
    }, []);

    const closeAddContentHandler = useCallback((props) => {
        setOpenAddContent(false);
    }, []);

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
            <body className='list-body'>
                <div className={`row d-flex justify-content-center ${listStyles.container}`}>
                <div className="col-md-8">
                    <div className={`card-hover-shadow-2x mb-3 card`}>
                        <div className={`card-header-tab card-header`}>
                            <div className={`card-header-title font-size-lg text-capitalize font-weight-normal`}>
                                <i className={`fa fa-tasks`}></i>&nbsp;{wantedList.title}</div>
                        </div>
                        <div className={listStyles['scroll-area-sm']}> {/* makes the scroll area bigger */}
                            <perfect-scrollbar className="ps-show-limits">
                                <div style={{position: "static"}} className="ps ps--active-y" >
                                    <div className="ps-content">
                                        <ul className={`${listStyles['list-group']} list-group-flush`}>
                                            {wantedList.listItems.map(item => (
                                                    <ListContent
                                                        heading={item.content}
                                                        subheading="testing"
                                                        badge="hello" 
                                                        openEditHandler={() => {openEditHandler(item.contentId, wantedList.listId, wantedList.userId)}}
                                                        openDeleteHandler={openDeleteWarningHandler}
                                                    />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </perfect-scrollbar>
                        </div>
                        <div class="d-block text-right card-footer">
                            <Link
                                to={`/${userId}/myLists`}
                                className={`mr-2 btn btn-link btn-sm`}
                            >
                                Cancel
                            </Link>
                            <button
                                onClick={openAddContentHandler}
                                className='btn btn-primary'
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </body>
        </SpacingWrapper>
        

        <Modal
            title="Are you sure you want to delete?"
            show={openDeleteWarning}
            onCancel={closeDeleteWarningHandler}
        >
            You cannot undo once deleted.
        </Modal>

        <Modal
            title="Content"    
            show={openEdit}
            onCancel={closeEditHandler}    
        >
            <form>
                <Input
                    id="content"
                    element="input"
                    type="text"
                    label="Content"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="The field cannot be empty."
                    onInput={inputHandler}
                    initialValue={formState.inputs.content.value}
                    initialValid={true}
                />
            </form>
        </Modal>

        <Modal
            title="New Content"
            show={openAddContent}
            onCancel={closeAddContentHandler}    
        >
            <form>
                <Input
                    id="content"
                    element="input"
                    type="text"
                    label="Content"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="The field cannot be empty."
                    onInput={inputHandler}
                />
            </form>
        </Modal>

    </React.Fragment>
    );
};

export default MyList;