import { useRef } from 'react';

import Card from '../common/Card';
import css from './NewMeetupForm.module.css';

function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const descInputRef = useRef();
    const addressInputRef = useRef();

    function submitHandler(evt) {
        evt.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredDescription = descInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;

        const newMeetup = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }
        props.addMeetup(newMeetup);
    }

    return (
    <Card>
        <form className={css.form} onSubmit={submitHandler}>
            <div className={css.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id="title" ref={titleInputRef}/>
            </div>
            <div className={css.control}>
                <label htmlFor="image">Meetup Image Url</label>
                <input type="url" required id="image" ref={imageInputRef}/>
            </div>
            <div className={css.control}>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" required ref={addressInputRef}/>
            </div>
            <div className={css.control}>
                <label htmlFor="description">Description</label>
                <textarea id="description" required rows="5"  ref={descInputRef}></textarea>
            </div>
            <div className={css.actions}>
                <button onClick={props.addNewMeetup}>Save</button>
            </div>
        </form>
    </Card>);

}

export default NewMeetupForm;