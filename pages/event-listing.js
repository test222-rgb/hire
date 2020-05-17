import Head from 'next/head'
import React from 'react'
import Container from 'components/Container'
import Progress from 'components/Progress'
import Link from 'components/Link'
import PublicLayout from 'containers/PublicLayout'

import EventsMockData from '../mocks/eventsMock.js'

import './event-listing.scss'

const EventListing = () =>{
  console.log(EventsMockData().events, 'EventsMockData')
  return (
  <div className="EventListing">
    <Head>
      <title>Event Listing</title>
    </Head>
    <Progress />
    <PublicLayout>
      <Container>
        <div className="row EventListing-Content">
          <div className="col-md-12">
            <h1>Events Mock Data</h1>
          </div>
          <div className="col-md-12">
            <h2>Public Events</h2>
          </div>
          {
            EventsMockData()
              .events
              .filter(i => i.public)
              .map(item => (
                <div className="col-md-4" key={item.id}>
                  <h3>{item.name}</h3>
                  <div>
                    <p>
                      {item.description}
                    </p>
                  </div>
                  <div>
                    <strong>Location -</strong>
                    {item.location}
                  </div>
                  <div>
                    <strong>Date -</strong>
                    {item.eventDate}
                  </div>
                  <h4>Attenders</h4>
                  <div>
                    {item.payload.map(el => (
                      <p key={el.email}>{`${el.attendee} (${el.email}), `}</p>
                    ))}
                  </div>
                </div>
          ))}
          <div className="col-md-12">
            <h2>Private Events</h2>
          </div>
          {
            EventsMockData()
              .events
              .filter(i => !i.public)
              .map(item => (
                <div className="col-md-4" key={item.id}>
                  <h3>{item.name}</h3>
                  <div>
                    <p>
                      {item.description}
                    </p>
                  </div>
                  <div>
                    <strong>Location -</strong>
                    {item.location}
                  </div>
                  <div>
                    <strong>Date -</strong>
                    {item.eventDate}
                  </div>
                  <h4>Attenders</h4>
                  <div>
                    {item.payload.map(el => (
                      <p key={el.email}>{`${el.attendee} (${el.email}), `}</p>
                    ))}
                  </div>
                </div>
          ))}
        </div>
      </Container>
    </PublicLayout>
  </div>
)}

export default EventListing


