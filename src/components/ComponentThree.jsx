import React from 'react'
import {UserContext, ChannelContext} from '../App'

function ComponentThree() {
  return (
    <div>
      <UserContext.Consumer>
          {user => {
              return (
                  <ChannelContext.Consumer>
                      {channel => {
                          return (
                              <div>This is the first {user} and second {channel}</div>
                          )
                      }}
                  </ChannelContext.Consumer>
              )
          }}
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentThree
