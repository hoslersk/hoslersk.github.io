import React, { Fragment } from 'react';

import PageTitle from '../components/page-title';
import Heading from '../components/heading';
import ContentWrapper from '../components/content-wrapper';

export default function AboutPage() {
  return (
    <Fragment>
      <PageTitle title="About - Schyler Hosler" />
      <Heading>
        About <small aria-hidden="true">- スカイラーについて</small>
      </Heading>
      <div className="row">
        <div className="column column--lg">
          <ContentWrapper>
            <p>Hi, my name is Schyler ("SKY-LER") and I'm a Web Developer.</p>
            <p>(Insert obligatory "I like to make stuff" line here.)</p>
            <p>
              Check out my{' '}
              <a href="/schyler-hosler-resume.pdf" target="_blank" rel="noreferrer noopener">
                resume
              </a> for more information.
            </p>

            <h2>Current Interests</h2>
            <ul>
              <li>
                Web Accessibility
                <ul>
                  <li>Certified Professional in Accessibility Core Competency (CPACC)</li>
                  <li>Working toward Web Accessibility Specialist (WAS)</li>
                  <li>Finding or developing tools</li>
                </ul>
              </li>
              <li>
                SVG
                <ul>
                  <li>Animations</li>
                  <li>Drawing</li>
                </ul>
              </li>
              <li>
                UI/UX Design
                <ul>
                  <li>Sketch</li>
                  <li>UI Kits</li>
                </ul>
              </li>
              <li>Video Game HUD/UI Design</li>
            </ul>
          </ContentWrapper>
        </div>

        <aside className="column column--sm">
          <ContentWrapper>
            {/*
              <h2>Currently Playing:</h2>
              <ul>
                <li>Control (PS4)</li>
                <li>Octopath Traveler (Switch)</li>
                <li>Romancing Saga 3 (PSV)</li>
                <li>Dragon Quest II (Android)</li>
              </ul>
            */}

            <h2>Games completed in 2019</h2>
            <ol>
              <li>428: Shibuya Scramble (PS4)</li>
              <li>Ys VIII: Lacrimosa of Dana (PSV)</li>
              <li>Kingdom Hearts 3 (PS4)</li>
              <li>Yo-kai Watch 3 (3DS)</li>
              <li>Devil May Cry 5 (PS4)</li>
              <li>Judgement (PS4)</li>
              <li>Death Mark (PSV)</li>
              <li>AI: Somnium Files (PS4)</li>
              <li>Final Fantasy XIV: Shadowbringers (PS4)</li>
              <li>Dragon Quest (Android)</li>
              <li>Dragon Quest VIII (3DS)</li>
              <li>Xenoblade Chronicles 3D (3DS)</li>
              <li>Pokémon Sword (Switch)</li>
              <li>Luigi's Mansion 3 (Switch)</li>
              <li>Tales of Vesperia (PS4)</li>
              <li>Final Fantasy XII: The Zodiac Age (PS4)</li>
              <li>Untitled Goose Game (PS4)</li>
            </ol>
          </ContentWrapper>
        </aside>
      </div>
    </Fragment>
  );
}
