import React,{Component} from 'react'
import Card from "./Card"

class SectionProfession extends Component {

	constructor () {
		super(),
		this.state = {
			professions: [ ]
		}

	}

	async componentDidMount(){
		const response = await fetch('http://localhost:3000/profesion');
		const data = await response.json()
        this.setState({professions: data.data})
	 }
	 render () { 
    return (
        <section className="content profesiones">
				<h2 className="mt-3">Profesiones</h2>
				<div className="list-group shadow-sm p-3 mb-5 rounded">
					<h4 className="list-group-item list-group-item-action active text-center"
						aria-current="true">
						Listado de Profesiones
					</h4>
					{
				      this.state.professions.map((profession, i) => <Card key={i + profession.profession_name} profession={profession.profession_name}/>)  
                    }
				</div>
			</section>
    )
  }
}

export default SectionProfession