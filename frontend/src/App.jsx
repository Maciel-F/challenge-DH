import { useState } from 'react'
import './assets/css/style.css';
import './assets/css/normalize.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Preview from './components/Preview/Preview';
import SectionApplicant from './components/SectionApplicant/SectionApplicant';
import SectionProfession from './components/SectionProfession/SectionProfesion';


function App() {

  return (
    <div className="dashboard">
		   < Header />
	       < Sidebar />
		<main className="content-wrap">
		   < Preview />
           < SectionApplicant />
           < SectionProfession />
		</main>
	</div>
  )
}

export default App
