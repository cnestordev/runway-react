import React, { useEffect, useState } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import IPage from '../interfaces/page'

import { Link } from 'react-router-dom'

import axios from 'axios'

import '../styles/home.scss'

const HomePage: React.FC<IPage & RouteComponentProps<any>> = props => {
  // state for ALL data from API
  const [heroData, setHeroData] = useState([] as any[])

  // Fetch data fro API when component first mounts
  useEffect(() => {
    const fetcher = async () => {
      const data = await axios.get(
        'https://akabab.github.io/superhero-api/api/all.json'
      )
      setHeroData(data.data)
    }
    fetcher()
  }, [])

  // If state array is empty, render loading text
  if (!heroData.length) {
    return <h1>Loading...</h1>
  }

  // Render once state array has been populated
  return (
    <div className="homeContainer">
      {heroData.map(hero => {
        return (
          <Link className="heroLink" key={hero.id} to={`/${hero.id}`}>
            <div className="box">
              <div
                style={{ backgroundImage: `url(${hero.images.sm})` }}
                className="boxImg"
              ></div>
              <div className="boxName">
                <h3 className="listName">{hero.name}</h3>
                <h4 className="listName">{hero.work.occupation}</h4>
                <p className="details">Learn more</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default withRouter(HomePage)
