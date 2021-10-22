import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Page from '../components/page';
import HomePage from './home-page';
import AboutPage from './about-page';
// import ToolsPage from './tools-page';
import ProjectsPage from './projects-page';
import ContactPage from './contact-page';

export default function Site() {
  return (
    <Page>
      <Switch>
        <Route path="/about" component={AboutPage} />
        {/* <Route path="/tools" component={ToolsPage} /> */}
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </Page>
  );
}
