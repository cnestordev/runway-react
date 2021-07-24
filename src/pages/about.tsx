import React, { useEffect, useState } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import IPage from '../interfaces/page'
import { hero } from '../interfaces/hero'

import axios from 'axios'

const AboutPage: React.FC<IPage & RouteComponentProps<any>> = props => {
  const [data, setData] = useState(hero)

  useEffect(() => {
    let number = props.match.params.number

    const fetcher = async () => {
      const data = await axios.get(
        `https://akabab.github.io/superhero-api/api/id/${number}.json`
      )
      console.log(data.data)
      setData(data.data)
    }

    fetcher()
  }, [])

  if (!Object.keys(data).length) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="container">
      <Link to="/">Home</Link>
      <div className="box">
        <div className="intro">
          <h2>{data.name}</h2>
          <h2>{data.biography.fullName}</h2>
        </div>
        <div className="appearance heroProp">
          <p>Eye color: {data.appearance.eyeColor}</p>
          <p>gender: {data.appearance.gender}</p>
          <p>Hair color: {data.appearance.hairColor}</p>
          <p>Height: {data.appearance.height}</p>
          <p>Race: {data.appearance.race}</p>
          <p>Weight: {data.appearance.weight}</p>
        </div>
        <div className="biography heroProp">
          <p>Aliases: {data.biography.aliases}</p>
          <p>Alignment: {data.biography.alignment}</p>
          <p>Alter ego: {data.biography.alterEgos}</p>
          <p>First appearance: {data.biography.firstAppearance}</p>
          <p>Full name: {data.biography.fullName}</p>
          <p>Place of birth: {data.biography.placeOfBirth}</p>
          <p>Publisher: {data.biography.publisher}</p>
        </div>
        <div className="connections heroProp">
          <p>Group affiliation: {data.connections.groupAffiliation}</p>
          <p>Relatives: {data.connections.relatives}</p>
        </div>
        <div className="powerstats heroProp">
          <p>Combat: {data.powerstats.combat}</p>
          <p>Durability: {data.powerstats.durability}</p>
          <p>Intelligence: {data.powerstats.intelligence}</p>
          <p>Power: {data.powerstats.power}</p>
          <p>Speed: {data.powerstats.speed}</p>
          <p>Strength: {data.powerstats.strength}</p>
        </div>
        <div className="work heroProp">
          <p>Occupation: {data.work.occupation}</p>
        </div>
      </div>
    </div>
  )
}

export default withRouter(AboutPage)
