import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import pathes from './pathes';
import AddPatient from '../Components/AddPatient/AddPatient';
import PatientDetails from '../Components/PatientDetails/PatientDetails';
export default function Router() {
  return (
    <>
      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Switch>
          <Route exact path={pathes.home}>
            <p>1</p>
          </Route>
          <Route path={pathes.statictic}>
            <p>2</p>
          </Route>
          <Route path={pathes.addPatient}>
            <AddPatient/>
          </Route>
          <Route path={pathes.patientDetails} component={PatientDetails} />           
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}
