import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';

import Title from './Components/Title';
import CSVInput from './Components/CSVInput';
import ButtonGroup from './Components/ButtonGroup';
import Display from './Components/Display';

function App() {
  return (
    <Container>
      <Title/>
      <CSVInput/>
      <ButtonGroup/>
      <Display />
    </Container>
  );
}

export default App;
