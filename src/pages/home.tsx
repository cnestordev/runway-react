import React, { useEffect, useState } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import IPage from '../interfaces/page'

import { Link } from 'react-router-dom'

import axios from 'axios'

const HomePage: React.FC<IPage & RouteComponentProps<any>> = props => {
  const [heroData, setHeroData] = useState([] as any[])

  useEffect(() => {
    const fetcher = async () => {
      const data = await axios.get(
        'https://akabab.github.io/superhero-api/api/all.json'
      )
      console.log(data.data)
      setHeroData(data.data)
    }
    fetcher()
  }, [])

  if (!heroData.length) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h2>Welcome!</h2>
      {heroData.map(hero => {
        return (
          <Link key={hero.id} to={`/${hero.id}`}>
            <div style={{ border: '1px solid red', margin: '5px' }}>
              <h3>{hero.name}</h3>
              <h4>{hero.work.occupation}</h4>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default withRouter(HomePage)
