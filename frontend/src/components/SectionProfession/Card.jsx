function Card (props){
    const {
		profession = "",
	} = props;
    return (
        <button type="button" className="list-group-item list-group-item-action text-center">{profession}</button>
    )
}

export default Card