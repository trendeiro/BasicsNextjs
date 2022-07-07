import Head from "next/head";
import { Fragment } from 'react';
import NewMeetUpForm from '../../components/meetups/NewMeetupForm';

function NewMeetUpPage() {
  const addMeetupHandler = async (enteredMeetUpData) =>{
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetUpData),
      headers:{
        "Content-Type": "application/json"
      }
    })
    const data = response.json();

    console.log(data);
  }

  return (
    <Fragment>
      <Head>
        <title>Add a new Meetup</title>
        <meta name="description" content="Add your owne meetup"/>

      </Head>
      <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
    </Fragment>
    )
}

export default NewMeetUpPage