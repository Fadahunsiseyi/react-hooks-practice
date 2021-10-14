import React, {useContext} from 'react'
import ComponentThree from './ComponentThree'
import {UserContext, ChannelContext} from '../App'

function ComponentTwo() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <div>
      {user} - {channel}
    </div>
  )
}

export default ComponentTwo
