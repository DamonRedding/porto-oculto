import React, {component} from 'react'
import Link from 'gatsby-link'
import ImageFeed from '../components/ImageFeed'

const IndexPage = () => (
  <div>
    <ImageFeed src="https://placeimg.com/327/172/any" alt="Alternate Text">This is a Title</ImageFeed>
  </div>
)

export default IndexPage
