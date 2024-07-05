// css imports
import './App.css';

// module imports
import { Routes, Route } from 'react-router-dom';

// import icons globally
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// component imports
import { Home, Job } from './components';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/job/:jobId' element={<Job />} />
            </Routes>
        </div>
    );
}

export default App;
library.add(fas)