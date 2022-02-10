import React, {useState} from 'react';

const Form = ({getObject}) => {
    let [value, setValue] = useState({name: '', username: '', email: ''});

    const getHandler = (e) => {
        const eventData = {...value, [e.target.name]: [e.target.value]}
        setValue({...value, ...eventData});
        getObject(eventData);
    }

    return (
        <div>
            <form>
                <label>Name: <input type="text" name={'name'} value={value.name} onChange={getHandler}/></label>
                <label>Username: <input type="text" name={'username'} value={value.username} onChange={getHandler}/></label>
                <label>Email: <input type="text" name={'email'} value={value.email} onChange={getHandler}/></label>

            </form>

        </div>
    );
};

export default Form;