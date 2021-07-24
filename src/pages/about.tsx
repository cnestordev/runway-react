import React, { useEffect, useState } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import axios from 'axios'

import IPage from '../interfaces/page'
import { hero } from '../interfaces/hero'

import '../styles/about.scss'

const AboutPage: React.FC<IPage & RouteComponentProps<any>> = props => {
  const [data, setData] = useState(hero)

  useEffect(() => {
    let number = props.match.params.number

    // fetch data from API using the number from the params
    const fetcher = async () => {
      const data = await axios.get(
        `https://akabab.github.io/superhero-api/api/id/${number}.json`
      )
      setData(data.data)
    }

    fetcher()
  }, [])

  // If state contains empty object, render loading
  if (!Object.keys(data).length) {
    return <h2>Loading...</h2>
  }

  // Will load when state is populated with an object
  return (
    <div className="container">
      <Link className="link" to="/">
        {'< Back'}
      </Link>
      <div className="boxDetails">
        <div className="intro">
          <div
            style={{ backgroundImage: `url(${data.images.sm})` }}
            className="heroImg"
          ></div>
          <div className="nameDetails">
            <h2 className="name">{data.name}</h2>
            <h2 className="bio">{data.biography.fullName}</h2>
          </div>
        </div>
        <div className="appearance heroProp">
          <h3>APPEARANCE</h3>
          <p>
            <span>Eye color:</span> {data.appearance.eyeColor}
          </p>
          <p>
            <span>gender:</span> {data.appearance.gender}
          </p>
          <p>
            <span>Hair color:</span> {data.appearance.hairColor}
          </p>
          <p>
            <span>Height:</span> {data.appearance.height}
          </p>
          <p>
            <span>Race:</span> {data.appearance.race}
          </p>
          <p>
            <span>Weight:</span> {data.appearance.weight}
          </p>
        </div>
        <div className="biography heroProp">
          <h3>BIOGRAPHY</h3>
          <p>
            <span>Aliases:</span> {data.biography.aliases}
          </p>
          <p>
            <span>Alignment:</span> {data.biography.alignment}
          </p>
          <p>
            <span>Alter ego:</span> {data.biography.alterEgos}
          </p>
          <p>
            <span>First appearance:</span> {data.biography.firstAppearance}
          </p>
          <p>
            <span>Full name:</span> {data.biography.fullName}
          </p>
          <p>
            <span>Place of birth:</span> {data.biography.placeOfBirth}
          </p>
          <p>
            <span>Publisher:</span> {data.biography.publisher}
          </p>
        </div>
        <div className="connections heroProp">
          <h3>CONNECTIONS</h3>
          <p>
            <span>Group affiliation:</span> {data.connections.groupAffiliation}
          </p>
          <p>
            <span>Relatives:</span> {data.connections.relatives}
          </p>
        </div>
        <div className="powerstats heroProp">
          <h3>POWER STATS</h3>
          <p>
            <span>Combat:</span> {data.powerstats.combat}
          </p>
          <p>
            <span>Durability:</span> {data.powerstats.durability}
          </p>
          <p>
            <span>Intelligence:</span> {data.powerstats.intelligence}
          </p>
          <p>
            <span>Power:</span> {data.powerstats.power}
          </p>
          <p>
            <span>Speed:</span> {data.powerstats.speed}
          </p>
          <p>
            <span>Strength:</span> {data.powerstats.strength}
          </p>
        </div>
        <div className="work heroProp">
          <h3>WORK</h3>
          <p>
            <span>Occupation:</span> {data.work.occupation}
          </p>
        </div>
      </div>
    </div>
  )
}

export default withRouter(AboutPage)
