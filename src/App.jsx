import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}