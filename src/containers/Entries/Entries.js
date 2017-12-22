import React from 'react';

import Entry from './Entry';
import './entries.css';

const Entries = ({ entries }) => (
  <div className="entries" id="entries">
    {entries.map(entry => <Entry entry={entry} key={entry.id} />)}
  </div>
);

export default Entries;
