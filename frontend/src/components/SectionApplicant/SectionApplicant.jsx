import React, {Component} from 'react'

import Card from "./Card"

class SectionApplicant extends Component {

	 constructor(){
		super()
		this.state = {
			applicants: [ ]
		}
	 }

	 async componentDidMount (){
		const response = await fetch('http://localhost:3000/aspirantes');
		const data = await response.json()
        this.setState({applicants: data.data})
	 }
	 render (){
    return (
        <section className="content aspirantes">
				<h2>Aspirantes</h2>
				<article className="person-boxes">
				{
				this.state.applicants.map((applicant, i) => <Card key={i + applicant.first_name} name={applicant.first_name} last={applicant.last_name} profession={applicant.professions.profession_name}/>)  
                }
				</article>
			</section>
    )
  }
}

export default SectionApplicant