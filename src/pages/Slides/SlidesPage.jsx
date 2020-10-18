import React, {useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Chart } from "react-google-charts";

import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Logo from "components/Logo/Logo.jsx";

import { Grid }         from "@material-ui/core"

const SlidesPage = () => {

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray("section").forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false
      });
    });


    ScrollTrigger.create({
      snap: 1 / 4 // snap whole page to the closest section!
    });


  });
    // const imageClasses = classNames(
    //   classes.imgRaised,
    //   classes.imgRoundedCircle,
    //   classes.imgFluid
    // );


    return (
      <main>
        <section className="slides">
          <GridContainer alignItems="center">
              <GridItem xs={12}
                        sm={12}
                        md={6}
                        className="slide bg--black">

                <GridContainer>
                  {/* HEADER */}
                  <GridItem xs={12}>
                    <Logo heigh={50}/>
                  </GridItem>
                  <GridItem xs={12}>
                    <h2>Client Name</h2>
                    <h3>Proposal</h3>
                    <h4>As requested by Person Name, Job Title</h4>
                  </GridItem>
                  {/* CONTACT */}
                  <GridItem xs={12}>
                    <GridContainer alignItems="flex-end" className="slide--wrapper">
                        <GridItem xs={4} sm={6} md={4}>
                          <h5>
                            <strong>
                              CEO Name
                            </strong>
                          </h5>
                          <h5>
                            Founder/CEO
                          </h5>
                        </GridItem>
                        <GridItem xs={12} md={4}>
                          <h5>
                            <strong>
                              CEO Name
                            </strong>
                          </h5>
                          <h5>
                            Founder/CEO
                          </h5>
                        </GridItem>
                        <GridItem xs={12} md={4}>
                          <h5>
                            <strong>
                              CEO Name
                            </strong>
                          </h5>
                          <h5>
                            Founder/CEO
                          </h5>
                        </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>

              </GridItem>
              <GridItem xs={12}
                        sm={12}
                        md={6}
                        style={{
                          background: "" +
                            "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), " +
                            "url(https://images.unsplash.com/photo-1568160277762-0224a391b5a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"
                        }}
                        className="slide bg--black">

                  <GridContainer justify="flex-end">
                    <h5>
                      <strong>
                        Last updated: May 25, 1993
                      </strong>
                    </h5>
                  </GridContainer>
              </GridItem>
          </GridContainer>
        </section>
        {/* WELCOME SLIDE */}
        <section className="slides">
          <GridContainer alignItems="center">
              <GridItem xs={12}
                        sm={12}
                        md={6}
                        style={{
                          background: "" +
                            "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), " +
                            "url(https://images.unsplash.com/photo-1568160277762-0224a391b5a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"
                        }}
                        className="slide bg--black">
              </GridItem>
            <GridItem xs={12}
                      sm={12}
                      md={6}
                      className="slide bg--black">
              <h1 className='text-align__left'>
                Hello
              </h1>
              <p className='text-align__left'>
                It was wonderful speaking you and learning a little about Client, goals and
                challenges. Meeting Reference Within the following pages, we’ve outlined how we will approach this
                project, how long it will take, and a detailed breakdown of your investment. I’m looking forward to
                reviewing this proposal with you in detail, but please don’t hesitate to reach out with any questions.
              </p>

            </GridItem>
          </GridContainer>
        </section>
        {/* WHAT WE DO */}
        <section className="slides">
          <GridContainer alignItems="center">
              <GridItem xs={12}
                        sm={12}
                        md={12}
                        className="slide bg--white">
                <h1>
                  What We Do
                </h1>
                <h2>
                  Our Services and Capabilities
                </h2>
                <p>
                  As requested by Person Name, Job Title
                </p>
              </GridItem>
            <GridItem xs={12}
                      sm={12}
                      md={3}>
             <div>
               <h3>
                 Business Automation
               </h3>
               <ul>
                 <li>test</li>
                 <li>test</li>
                 <li>test</li>
               </ul>
             </div>
            </GridItem>
          </GridContainer>
        </section>
        {/* ABOUT SLIDE */}
        <section className="slides">
          <GridContainer justify="center" alignItems="center">
              <GridItem xs={12}
                        sm={12}
                        md={6}
                        className="slide bg--black">
                <h1>
                  About Us
                </h1>
              </GridItem>
            <GridItem xs={12}
                      sm={12}
                      md={6}
                      className="slide bg--white">
              <p className='text-align__left'>
                At Phoenixing we're focused on creating user-centered ethical secure and accessible experiences for
                organizations. As a remote-first diversity-centered agency we are able to build products beyond the
                limitation of the tech default homogeneous team.
              </p>
              <p className='text-align__left'>
                We are a new company, yet we have a growing team with decades of combined experience in design and
                development. We’ve worked with a handful of highly satisfied clients, big and small, and created tools
                to help their business and we are confident you will be satisfied with the tools and expertise we
                provide.
              </p>

            </GridItem>
          </GridContainer>
        </section>
        {/* INVESTED */}
        <section className="slides">
          <GridContainer justify="center" alignItems="center">
              <GridItem xs={12}
                        sm={12}
                        md={6}
                        className="slide bg--black">
                <h1>
                  Total Invested
                </h1>
              </GridItem>
            <GridItem xs={12}
                      sm={12}
                      md={6}
                      className="slide bg--white">
                <p>
                  Professional fees for the services are estimated to total between $26,100.00 - $33,930.00 for the
                  project approach outlined in this proposal. Services will be billed on a flat value based price or time
                  & material estimate. Estimates are based on the objectives, scope of work, activities, deliverable and
                  timeline as described in this proposal.
                </p>
                <p>
                  Our goal is to collaborate with your team on a milestone basis that allows for maximum feedback. Small
                  milestone approvals will build towards the final deliverable. Scope will be measured by rounds of
                  revisions (we typically allow three rounds per feedback stage).
                </p>
                <p>
                  Once this proposal is approved, we will submit a master creative services agreement to your legal point
                  of contact that outlines each deliverable in great detail.
                </p>

            </GridItem>
          </GridContainer>
        </section>
        {/* BUDGET AND TITLE */}
        <section className="slide bg--white">
          <div className="slide--wrapper">
          <GridContainer>
            <GridItem sm={12}>
              <h1>
                Budget and Title
              </h1>
            </GridItem>
            <GridItem sm={12}>
            <div>
              <h2>Table Title</h2>
              <table className='table__breakdown'>
                <caption>A basic table example with a caption</caption>
                <thead>
                <tr>
                  <th style={ { 'width': '10ch' } }>Task</th>
                  <th style={ { 'width': '15ch' } }>Dev Hours</th>
                  <th style={ { 'width': '15ch' } }>Design Hours</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td style={ { 'width': '10ch' } }>Jill</td>
                  <td style={ { 'width': '15ch' } }>50</td>
                  <td style={ { 'width': '15ch' } }>50</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                  <td style={ { 'width': '10ch' } }/>
                  <td style={ { 'width': '15ch' } }>
                    <strong>
                      Total Cost
                    </strong>
                  </td>
                  <td style={ { 'width': '15ch' } }>
                    <strong>
                      80,000.00
                    </strong>
                  </td>
                </tr>
                </tfoot>
              </table>
            </div>
            </GridItem>
          </GridContainer>
          </div>
        </section>
        <section className="slide bg--white">
          <GridContainer alignItems="center" className="slide-wrapper">
            <GridItem sm={12}>
              <h1>Timeline</h1>
            <Chart
            width={'100%'}
            height={'400px'}
            chartType="Gantt"
            loader={<div>Loading Chart</div>}
            data={[
              [
                { type: 'string', label: 'Task ID' },
                { type: 'string', label: 'Task Name' },
                { type: 'string', label: 'Resource' },
                { type: 'date', label: 'Start Date' },
                { type: 'date', label: 'End Date' },
                { type: 'number', label: 'Duration' },
                { type: 'number', label: 'Percent Complete' },
                { type: 'string', label: 'Dependencies' },
              ],
              [
                '2014Spring',
                'Spring 2014',
                'spring',
                new Date(2014, 2, 22),
                new Date(2014, 5, 20),
                null,
                100,
                null,
              ],
              [
                '2014Summer',
                'Summer 2014',
                'summer',
                new Date(2014, 5, 21),
                new Date(2014, 8, 20),
                null,
                100,
                null,
              ],
              [
                '2014Autumn',
                'Autumn 2014',
                'autumn',
                new Date(2014, 8, 21),
                new Date(2014, 11, 20),
                null,
                100,
                null,
              ],
              [
                '2014Winter',
                'Winter 2014',
                'winter',
                new Date(2014, 11, 21),
                new Date(2015, 2, 21),
                null,
                100,
                null,
              ],
              [
                '2015Spring',
                'Spring 2015',
                'spring',
                new Date(2015, 2, 22),
                new Date(2015, 5, 20),
                null,
                50,
                null,
              ],
              [
                '2015Summer',
                'Summer 2015',
                'summer',
                new Date(2015, 5, 21),
                new Date(2015, 8, 20),
                null,
                0,
                null,
              ],
              [
                '2015Autumn',
                'Autumn 2015',
                'autumn',
                new Date(2015, 8, 21),
                new Date(2015, 11, 20),
                null,
                0,
                null,
              ],
              [
                '2015Winter',
                'Winter 2015',
                'winter',
                new Date(2015, 11, 21),
                new Date(2016, 2, 21),
                null,
                0,
                null,
              ],
              [
                'Football',
                'Football Season',
                'sports',
                new Date(2014, 8, 4),
                new Date(2015, 1, 1),
                null,
                100,
                null,
              ],
              [
                'Baseball',
                'Baseball Season',
                'sports',
                new Date(2015, 2, 31),
                new Date(2015, 9, 20),
                null,
                14,
                null,
              ],
              [
                'Basketball',
                'Basketball Season',
                'sports',
                new Date(2014, 9, 28),
                new Date(2015, 5, 20),
                null,
                86,
                null,
              ],
              [
                'Hockey',
                'Hockey Season',
                'sports',
                new Date(2014, 9, 8),
                new Date(2015, 5, 21),
                null,
                89,
                null,
              ],
            ]}
            options={{
              height: 400,
              gantt: {
                trackHeight: 30,
              },
            }}
            rootProps={{ 'data-testid': '2' }}
          />
            </GridItem>
          </GridContainer>
        </section>

        {/* THANK YOU */}
        <section className="slide bg--primary">
          <GridContainer style={{height: "100%", width: "100%", textAlign: "center"}}
                         justify="center"
                         direction="row"
                         alignItems="center">
            <GridItem>
              <h1>
                Thank You
              </h1>
            </GridItem>
          </GridContainer>
        </section>
      </main>
    );
}

export default (SlidesPage);
