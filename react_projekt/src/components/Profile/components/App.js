import React, { useState } from 'react';
import FormikForm from './FormikForm';
import './App.css';

function App() {
  const [fields, updateFields] = useState(
    {
      
      name: 'Clementine Bauch',
      city: 'New York',
      job: 'Partner',
      email: 'humbertaswift@gmail.com',
      mobile_no: '+33 (0)6 12 34 56 78',
      

      expertise: 'mergers and acquisition',
      specialist: 'Cross border operation',
      admission: 'Paris bar association',
      counties: 'Tunisia',
      

      hourly: '610$/hour (Negociated)',
      terms: 'Monthly 10k$ retainer - see with Jeanny Smith',
      services: 'Corporate M&A and international acquisitions',
      internal: 'Clementine Bauch',
      
      name1: 'Operation Ti...',
      name2: 'Op. Prometh..',
      name3: 'Op. Latandre',
      entity1: 'Renault Co...',
      entity2: 'Renault HQ.',
      entity3: 'Renault Br..',
      location1: 'France',
      location2: 'USA',
      location3: 'Italia',
      expertise1: '#Tax',
      expertise2: '#M&A',
      expertise3: '#Socials',
      date1: '20/01/2018',
      date2: '18/02/2019',
      date3: '18/02/2019',
      firm1: 'Racine',
      firm2: 'Clifford',
      firm3: 'SVZZz',
      
      year1: '2019',
      year2: '2018',
      year3: '2017',
      year4: '',
      year5: '',
      cost1: 'CS 153',
      cost2: 'CS 153',
      cost3: 'CS 47',
      cost4: 'CS 153',
      cost5: 'CS 32',
      total1: '3 500$',
      total2: '9 500$',
      total3: '10 500$',
      total4: '18 500$',
      total5: '15 500$',
      law1: 'Clifford chance',
      law2: 'Linklaters',
      law3: 'Linklaters',
      law4: 'Linklaters',
      law5: 'Linklaters',
    }
  );

  return (
    <div className="container">
      <FormikForm fields={fields} updateFields={updateFields} />
    </div>
  );
}

export default App;