import React, {useState} from 'react';

const Form = ({filter}) => {
    const [form, setForm] = useState({name: '', username: '', email: ''});

    const formHandler = (e) => {
        const data = {...form, [e.target.name]: e.target.value}
        setForm({...form, ...data});
    }

    const check = (e) => {
        e.preventDefault()
        filter(form)
    }

    return (
        <>
            <form>
                <div className={'form'}>
                    <label>Name: <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
                    <label>Username: <input type="text" name={'username'} value={form.username} onChange={formHandler}/></label>
                    <label>Email: <input type="text" name={'email'} value={form.email} onChange={formHandler}/></label>
                </div>
                <button onClick={check}>Check</button>
            </form>
        </>
    );
};

export default Form;