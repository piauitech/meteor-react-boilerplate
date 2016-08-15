import { Meteor } from 'meteor/meteor'
import React from 'react'
import { render } from 'react-dom'
import renderRoutes from '/imports/client/Router';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('react-root'))
})
