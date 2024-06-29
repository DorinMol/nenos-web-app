import Http from './config/http'
import Router from './config/router'
import UI from './config/ui'

function App() {
  return (
    <UI>
      <Http>
        <Router />
      </Http>
    </UI>
  )
}

export default App
