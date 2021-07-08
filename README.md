# TransportNSW

There are two folders in this directory, backend and transport-incident-alert

backend using node.js with axios library is responsible to extract API from Open data for Incident and alert from Transport network

transport-incident-alert is the front-end, with three sections, Filter, Calender and Details.

Axios, React-bootstrap, useState, useEffect, there are also implementation using redux.

To run this app:

1. backend: run npm i to install all the dependencies and npm start to start the app
2. frontend: run npm i to install all the dependencies and npm start to start the app

The datasets has three section current, historic, affected. I use current dataset for the demo.

Currently, the filter only for priority, if selected, the details section will reflect the change.

details section shows priority, subtitle and timestamps.available from and to.
