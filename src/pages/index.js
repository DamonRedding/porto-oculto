// import React from 'react'
import React, { Component } from 'react'
import Link from 'gatsby-link'
import Post from '../components/Post'

const IndexPage = () => (
  <div>
    <div>
      <Post address="Rua de Costa Cabral,400" state="Bad" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg"/>
      <Post address="Rua de Alegrya, 245" state="Good" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg"/>
    </div>
  </div>
)

export default IndexPage;
