import GlobalStyles from './components/ui/GlobalStyles'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Pages from './pages'

function App() {
	return (
		<>
			<GlobalStyles />
			<Pages />
			<ToastContainer />
		</>
	)
}

export default App
