function PresidentChild(props) {
    let deathAge = props.presidents.passed - props.presidents.year
    return (<div>
        {props.presidents.first} {props.presidents.last} {props.showDeathAge ? deathAge : ""}
    </div>)
}

export default PresidentChild