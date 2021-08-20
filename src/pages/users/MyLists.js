import React from 'react';
import MyList from './MyList';

const MyLists = props => {
    if (props.eachWholeList.length === 0) {
        return <h1>No users found.</h1>;
    };

    return <ul>
        {props.eachWholeList.listItems.map(item => (
            <MyList
                key={item.key}
                id={props.eachWholeList.id}
                name={props.eachWholeList.name}
                content={item.content}
            />
        ))}
    </ul>
};

export default MyLists;