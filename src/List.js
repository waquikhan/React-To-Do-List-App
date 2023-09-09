import React, {useState} from 'react';

const List = ({list, markDone}) => {

    return (
        <div>
            <ul>
                {
                    list.map((item, index) => (
                        <li >
                            <span style={{color: item.isDone ? 'red': 'black'}}>
                            {item.label}

                            </span>
                            <button onClick={() => markDone(index)}>Done</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List;