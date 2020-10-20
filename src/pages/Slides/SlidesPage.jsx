import React, {useEffect, useState} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Chart } from "react-google-charts";

import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Logo from "components/Logo/Logo.jsx";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

import { Grid, TableFooter, TableRow } from "@material-ui/core"
import Table                           from "@material-ui/core/Table"
import TableHead                       from "@material-ui/core/TableHead"
import TableCell                       from "@material-ui/core/TableCell"
import TableBody                       from "@material-ui/core/TableBody"
import classNames                      from "classnames"

const SlidesPage = props => {

  const { classes } = props;

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const [ intro, setIntro ] = useState( [] );
  const [ team, setTeam ] = useState( [] );
  const [ taskGroup, setTaskGroup ] = useState( [] );
  const [ subTasks, setSubTasks ] = useState( [] );
  const [ otherCost, setOtherCost ] = useState( [] );
  const [chartItems, setChartItems] = useState([]);
  const [ isChartLoadingstate, setIsChartLoadingstate ] = useState( true );
  const [ test, setTest ] = useState( null );


  useEffect(() => {

    // Pull Data
      fetch('/.netlify/functions/team/team')
        .then(res => res.json())
        .then(data =>setTeam(data.team))

      fetch('/.netlify/functions/intro/intro')
        .then(res => res.json())
        .then(data =>setIntro(data.intro))

      fetch('/.netlify/functions/otherTask/otherTask')
        .then(res => res.json())
        .then(data =>setOtherCost(data.otherCost))

      fetch('/.netlify/functions/subTask/subTask')
        .then(res => res.json())
        .then(data =>setSubTasks(data.subTask))

      fetch('/.netlify/functions/airtable/airtable')
        .then(res => res.json())
        .then(data =>setTaskGroup(data.taskGroup))

    // gsap.registerPlugin(ScrollTrigger);
    //
    // gsap.utils.toArray("section").forEach((panel) => {
    //   ScrollTrigger.create({
    //     trigger: panel,
    //     start: "top top",
    //     pin: true,
    //     pinSpacing: false
    //   });
    // });
    //
    //
    // ScrollTrigger.create({
    //   snap: 1 / 2 // snap whole page to the closest section!
    // });

  }, []);

  const buildChartData = () => {
    if (taskGroup.length > 0) {
      let allItems = []

      taskGroup.map( ( group ) => {

        subTasks.map((subTask) =>{
          if(subTask.fields["Task"][0] === group.id){
            let subTaskName = subTask.fields["Name"];
            let taskName = group.fields["Task/Feature"];
            const taskId = subTaskName.replace(/[^A-Z0-9]/ig, "");
            const resource = taskName;
            let startDate = new Date(subTask.fields["Start"]);
            let dueDate = new Date(subTask.fields["Due"]);
            let newItem;
            newItem = [taskId, subTaskName,resource,startDate,dueDate, null, 0, null];
            allItems.push(newItem)
            // setChartItems(newItem);
          }
        })
      } )
      setIsChartLoadingstate(false)
      setChartItems(allItems)
    }
  }

  useEffect( () => {
      buildChartData()
  }, [ taskGroup ] )

  useEffect( () => {
      setTest([
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
        chartItems
      ])

  }, [ chartItems ] )


  const moneyFormat= (amount) =>{
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formatter.format(amount);
  }
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
                    <h2>{intro.Client}</h2>
                    <h3>Proposal</h3>
                    <h4>As requested by {intro["Contact Name"]}, {intro["Contact Role"]}</h4>
                  </GridItem>
                  {/* CONTACT */}
                  <GridItem xs={12}>
                    <GridContainer alignItems="flex-end" className="slide--wrapper">
                        <GridItem xs={4} sm={6} md={4}>
                          <h5>
                            <strong>
                              Valerie Phoenix
                            </strong>
                          </h5>
                          <h5>
                            Founder/CEO
                          </h5>
                        </GridItem>
                      { intro["Team Contact Name"] && (
                          <GridItem xs={12} md={4}>
                            <h5>
                              <strong>
                                {intro["Team Contact Name"]}
                              </strong>
                            </h5>
                            <h5>
                              {intro["Team Contact Name"]}
                            </h5>
                          </GridItem>
                        )
                      }
                      { intro["Company Address Line 1"] && (
                          <GridItem xs={12} md={4}>
                            <h5>
                              <strong>
                                {intro["Company Address Line 1"]}
                              </strong>
                            </h5>
                            <h5>
                              {intro["Company Address Line 2"]}
                            </h5>
                          </GridItem>
                        )
                      }
                      { intro["Company Website"] && (
                          <GridItem xs={12} md={4}>
                            <h5> </h5>
                            <h5>
                              {intro["Company Website"]}
                            </h5>
                          </GridItem>
                        )
                      }
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
                It was wonderful speaking you and learning a little about {intro["Client Name"]}, goals and
                challenges. {intro["Meeting Reference"]}. Within the following pages, we’ve outlined how we will approach this
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
                At Phoenixing we're focused on creating user-centered digital
                experiences that are centered around our cour values; ethical,
                security, and accessibility. Through these values, we're
                looking to change the way the industry looks and operates. As a
                remote-first diversity-centered agency we are able to build
                products beyond the limitation of default homogeneous tech teams
              </p>
              <p>
                We are a new company, yet we have a growing team with decades of
                combined experience in design and development. We’ve worked with
                a handful of highly satisfied clients, big and small, and
                created tools to help their business and we are confident you
                will be satisfied with the tools and expertise we provide.
              </p>
            </GridItem>
          </GridContainer>
        </section>
        {/* TEAM SLIDE */}
        <section className="slides">
          <GridContainer className="teamProfile slide bg--white" justify="center" alignItems="center">
              <GridItem xs={12}
                        sm={12}>
              {/*          className="slide bg--white">*/}
                <h1>
                  Your Team
                </h1>
              </GridItem>
                {team && team.map((member) => (
                  <GridItem className="teamProfile slide bg--white" sm={12} md={4}>
                    <img src={member.fields["Photo"][0].url}
                         alt="..."
                         className={imageClasses} />
                    <h2>
                      {member.fields["Name"]}
                    </h2>
                    <h3>
                      {member.fields["Title"]}
                    </h3>
                    <p>
                      {member.fields["Description"]}
                    </p>
                  </GridItem>
                ))}
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
                  Professional fees for the services are estimated to total between <strong>{moneyFormat(intro["Total Cost"])} - {moneyFormat(intro["Value Cost"])}</strong> for the
                  project approach outlined in this proposal. Services will be billed on a flat value based price or time
                  & material estimate. Estimates are based on the objectives, scope of work, activities, deliverables, and
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
        {/* BUDGET */}
        { taskGroup && taskGroup.map((groupName) => (
          <section className="slide bg--black">
            <div className="slide--wrapper">
              <GridContainer>
                <GridItem sm={12}>
                  <h1>
                    Budget
                  </h1>
                  <h2>
                    {groupName.fields["Task/Feature"]}
                  </h2>
                </GridItem>
                <GridItem key={groupName.fields["Task/Feature"]} sm={12} md={7}>
                  <table className='table__breakdown'>
                    {/*<caption>A basic table example with a caption</caption>*/}
                    <thead>
                    <tr>
                      <th style={ { 'width': '10ch' } }>Task</th>
                      <th style={ { 'width': '15ch' } }>Dev Hours</th>
                      <th style={ { 'width': '15ch' } }>Design Hours</th>
                    </tr>
                    </thead>
                    <tbody>
                    { subTasks && subTasks.map(subTask =>{
                      if(subTask.fields["Task"][0] === groupName.id){
                        return(
                          <tr>
                            <td style={ { 'width': '50ch' } }>{subTask.fields["Name"]}</td>
                            <td style={ { 'width': '15ch' } }>{subTask.fields["Dev Hours"] ? subTask.fields["Dev Hours"] : 0}</td>
                            <td style={ { 'width': '15ch' } }>{subTask.fields["Design Hours"] ? subTask.fields["Design Hours"] : 0}</td>
                          </tr>
                        )
                      }
                    })}
                    </tbody>
                    <tfoot>
                    <tr>
                      <td style={ { 'width': '10ch' } }>
                      </td>
                      <td style={ { 'width': '15ch' } }>
                        <strong>
                          {groupName.fields["dev-hours"]}
                        </strong>
                      </td>
                      <td style={ { 'width': '15ch' } }>
                        <strong>
                          {groupName.fields["design-hours"]}
                        </strong>
                      </td>
                    </tr>
                    </tfoot>
                  </table>
                </GridItem>
                <GridItem sm={12} md={4}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell className="text--white">
                          <p>
                            *Value Based Price
                          </p>
                        </TableCell>
                        <TableCell className="text--white">
                          <p>
                            Total Cost
                          </p>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text--white">
                          { moneyFormat(groupName.fields["Value Cost"]) }
                        </TableCell>
                        <TableCell className="text--white">
                          { moneyFormat(groupName.fields["Total Costs"]) }
                        </TableCell>
                      </TableRow>
                    </TableBody>
                    <TableFooter>
                      <TableRow>
                        <TableCell colSpan={2}>
                          <p className='text--white'>
                            *Value based prices are locked in. In other words, even if it takes us 30 more hours than the estimate to complete the agreed upon tasks, your price doesn’t change. To protect against unforeseen costs on our end, we offer this at 130% of our Time & Material Estimate
                          </p>
                        </TableCell>
                      </TableRow>
                    </TableFooter>
                  </Table>
                </GridItem>
              </GridContainer>
              </div>
            </section>
        ))}
        {/* TIMELINE */}
        <section style={{height: "1100px"}} className="slide bg--white">
          <GridContainer alignItems="center" className="slide-wrapper">
            <GridItem sm={12}>
              <h1>Timeline</h1>
              {test &&  (
              <Chart
                width={'100%'}
                height={'800px'}
                chartType="Gantt"
                loader={<div>Loading Chart</div>}
                data={[test[0], ...test[1]]}
                options={{
                  height: 900,
                  gantt: {
                    trackHeight: 30,
                  },
                }}
                rootProps={{ 'data-testid': '2' }}
              />
              )}
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

export default withStyles(profilePageStyle)(SlidesPage);
