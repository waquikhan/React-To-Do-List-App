import React, {useState} from 'react';

const Form = ({addToList}) => {

    const [text, setText] = useState('');

    const addItem = () => {
        addToList(text);
        setText('');
    }

    return (
        <div>
            <input type="text" onChange={e => setText(e.target.value)} value={text} />
            <br />
            <button onClick={addItem}>ADD</button>
        </div>
    )
}

export default Form;