import { BrowserRouter as Router } from 'react-router-dom'
import Loading from './components/molecules/Loading'
import useLoadingStore from './store/slices/useLoadingStore'
import { MainApp } from './components/templates/main-app/MainApp'

function App() {
    const { loading } = useLoadingStore()
    return (
        <>
            <Router>
                {loading
                    ? (<Loading />)
                    : (<MainApp />)
                }
            </Router>
        </>
    )
}

export default App