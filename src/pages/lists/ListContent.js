import React from 'react';

import listStyles from './ListTemplate.module.css';

const indicator = [
    <div className={`${listStyles['todo-indicator']} ${listStyles['bg-warning']}`}></div>,
    <div className={`${listStyles['todo-indicator']} bg-primary`}></div>,
    <div className={`${listStyles['todo-indicator']} bg-info`}></div>,
    <div className={`${listStyles['todo-indicator']} bg-success`}></div>
    // <div className={`${listStyles['todo-indicator'] bg-focus'}></div>,
];

// Requires: props.heading
// Optional: props.badge, props.subheading

const ListContent = props => {
    return (
        <body className={'list-body'}>
            <li className={listStyles['list-group-item']}>
                {indicator[Math.floor(Math.random() * 4)]}
                <div className={`${listStyles['widget-content']} p-0`}>
                    <div className={listStyles['widget-content-wrapper']}>
                        <div className="widget-content-left mr-2">
                            <div className="custom-checkbox custom-control">
                                <input
                                    className="custom-control-input"
                                    id="exampleCustomCheckbox12"
                                    type="checkbox"
                                />
                                    <label className="custom-control-label" for="exampleCustomCheckbox12">
                                        &nbsp;
                                    </label>
                            </div>
                        </div>
                        <div className="widget-content-left">
                            <div className="widget-heading">
                                {props.heading} {props.badge && <div className="badge badge-danger ml-2">{props.badge}</div>}
                            </div>
                            {props.subheading && <div className={listStyles['widget-subheading']}><i>{props.subheading}</i></div>}
                        </div>
                        <div className={listStyles['widget-content-right']}>
                            <button className={`border-0 btn-transition btn btn-outline-success`}>
                                <i className={`fa fa-edit`}></i>
                            </button>
                            <button className={`border-0 btn-transition btn btn-outline-danger`}>
                                <i className={`fa fa-trash`}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </body>
    );
};

export default ListContent;