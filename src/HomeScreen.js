import React from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import requests from './Requests'
import Footer from './Footer'
 

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav />
       <Banner />
         

        <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchTopActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchTopComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchTopHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchTopRomanceMovies} />
      <Row title="Documentarires" fetchUrl={requests.fetchTopDocumentaries} />
      <Footer />
    </div>
  )
}

export default HomeScreen