function ChildComponent(props) {
    const {name, count} = props.votes
    return <div>
        {name} had a total vote count of {count}.
    </div>
}

export default ChildComponent