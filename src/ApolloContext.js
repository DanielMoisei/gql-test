import React, {useState, useEffect} from "react"
import { useQuery, gql } from '@apollo/client'

const ApolloContext = React.createContext()

const posts = gql`
  {
    allPosts(count: 2500) {
      createdAt
    }
  }
`

function ApolloContextProvider(props) {

  const [sortedPosts, setSortedPosts] = useState({})
  const {data} = useQuery(posts)

  useEffect(() => {
    const tempPosts = [[], [], [], [], [], [], [], [], [], [], [], []]
    if (data !== undefined) data.allPosts.map(post => {
      switch(true) {
        case new Date("January 1 2019").getTime() < parseInt(post.createdAt) && parseInt(post.createdAt) < new Date("January 31 2019").getTime():
          tempPosts[0].push(post)
        break
        case new Date("February 1 2019").getTime() < parseInt(post.createdAt) && parseInt(post.createdAt) < new Date("February 28 2019").getTime():
          tempPosts[1].push(post)
        break
        case new Date("March 1 2019").getTime() < parseInt(post.createdAt) && parseInt(post.createdAt) < new Date("March 31 2019").getTime():
          tempPosts[2].push(post)
        break
        case new Date("April 1 2019").getTime() < parseInt(post.createdAt) && parseInt(post.createdAt) < new Date("April 30 2019").getTime():
          tempPosts[3].push(post)
        break
        case new Date("May 1 2019").getTime() < parseInt(post.createdAt) && parseInt(post.createdAt) < new Date("May 31 2019").getTime():
          tempPosts[4].push(post)
        break
        case new Date("June 1 2019").getTime() < parseInt(post.createdAt) && parseInt(post.createdAt) < new Date("June 30 2019").getTime():
          tempPosts[5].push(post)
        break
        case new Date("July 1 2019").getTime() < parseInt(post.createdAt) && parseInt(post.createdAt) < new Date("July 31 2019").getTime():
          tempPosts[6].push(post)
        break
        case new Date("August 1 2019").getTime() < parseInt(post.createdAt) && parseInt(post.createdAt) < new Date("August 31 2019").getTime():
          tempPosts[7].push(post)
        break
        case new Date("September 1 2019").getTime() < parseInt(post.createdAt) && parseInt(post.createdAt) < new Date("September 30 2019").getTime():
          tempPosts[8].push(post)
        break
        case new Date("October 1 2019").getTime() < parseInt(post.createdAt) && parseInt(post.createdAt) < new Date("October 31 2019").getTime():
          tempPosts[9].push(post)
        break
        case new Date("November 1 2019").getTime() < parseInt(post.createdAt) && parseInt(post.createdAt) < new Date("November 3 2019").getTime():
          tempPosts[10].push(post)
        break
        case new Date("December 1 2019").getTime() < parseInt(post.createdAt) && parseInt(post.createdAt) < new Date("December 31 2019").getTime():
          tempPosts[11].push(post)
        break
      }
    })
    setSortedPosts(tempPosts)
  }, [data])

  return (
    <ApolloContext.Provider value={sortedPosts}>
      {props.children}
    </ApolloContext.Provider>
  )
}

export {ApolloContextProvider, ApolloContext}
