import React, { useState, useEffect } from 'react'

import { getTime } from './getTime'
import { Container, Content, Header } from './styles'

const Watch = () => {
  const [time, setTime] = useState(null)

  setTimeout(() => {
    setTime(getTime())
  }, 1000)

  useEffect(() => {
    setTime(getTime())
  }, [])

  return (
    <Container>
        <Header>
            <p>it's always time to make something<h2>great</h2></p>
        </Header>
        <Content>
            {time}
        </Content>
    </Container>
  )
}

export default Watch
