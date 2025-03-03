import './App.css'
import Layout from './components/Layout'
import Resources from './components/Resources'

function App() {


  return (
    <body>
      <Layout />
      <Rutes>
        <Route path="/" element={<Resources category="html" />} />
        <Route path="css" element={<Resources category="css" />} />
        <Route path="javascript" element={<Resources category="javascript" />} />
        <Route path="react" element={<Resources category="react" />} />
        <Route path="headless-cms" element={<Resources category="headless-cms" />} />
      </Rutes>
    </body>
  )
}

export default App
