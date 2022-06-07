import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Article from '../components/Article'
import Skills from '../components/Skills'
import Why from '../components/Why'
import Form from '../components/Form'

export default function Home() {
  return (
    <div className="Home">
      <Head>
        <title>Guillaume David | Développeur Front End Freelance</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <About />
      <Portfolio />
      <Article />
      <Skills />
      <Why />
      <Form />



    </div>
  )
}
