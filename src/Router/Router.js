import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import pathes from './pathes';

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
            <p>3</p>
          </Route>
          <Route path={pathes.patientDetails}>
            <p>details</p>
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}
