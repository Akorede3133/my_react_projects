import React, { useState } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Form from './components/Form';
import Template from './components/Template';
import {nanoid} from 'nanoid';
import headShot from './julian.jpg';
import avatar from './avatar.jpg'
import { defaultWorks, defaultEducations, defaultPersonal} from './data';

function App() {
  const [works, setWorks] = useState([]);
  const [imgUrl, setImgUrl] = useState(avatar);
  const [educations, setEducations] = useState([]);
  const [personal, setPersonal] = useState({
    firstName: '',
    lastName: '',
    title: '',
    address: '',
    phoneNumber: '',
    email: '',
    description: ''
  });
  console.log(works);
  const [educationField, setEducationField] =  useState([]);
  const [workField, setWorkField] = useState([])
  function handlePicture(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setImgUrl(url);
  }
  function handlePersonalChange(e) {
    const {name, value} = e.target;
    setPersonal({...personal, [name]: value});
  }
  function loadExample() {
    setWorks(defaultWorks)
    setEducations(defaultEducations)
    setWorkField([{id: 1}, {id: 2}, {id: 3}]);
    setEducationField([{id: 1}, {id: 2}, {id: 3}]);
    setPersonal(defaultPersonal);
    setImgUrl(headShot);
  }
  return <>
    <Header />
    <main>
        <Form 
          educations={educations}
          setEducations={setEducations}
          educationField={educationField}
          setEducationField={setEducationField}
          works={works} 
          setWorks={setWorks}
          workField={workField}
          setWorkField={setWorkField}
          handlePersonalChange={handlePersonalChange}
          handlePicture={handlePicture}
          personal={personal}
        />
        <button onClick={loadExample} className='load-example'>Load example</button>
      </main>
      <Template 
          workField={workField} 
          works={works} 
          educations={educations}
          educationField={educationField}
          personal={personal}
          imgUrl={imgUrl}
      />
  </>
}

export default App;
