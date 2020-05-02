import React from 'react'

import { useRSS } from './hooks'

const rssUrls = ['https://www.seangroff.dev/rss.xml']

function App() {
  const rssFeed = useRSS({ rssUrls })
  console.log(rssFeed)
  return <div>Hello, world!</div>
}

export default App
