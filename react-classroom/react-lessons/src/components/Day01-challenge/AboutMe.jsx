const styleColor = {
    color: 'red'
}

const listStyle = {
    listStyle: 'none'
}

function AboutMe() {
    return <div>
        <h1 style = {styleColor}>Joe Rinehart</h1>
        <p>I grew up in Danville, IN</p>
        <ul style = {listStyle}>
            <li>Boston</li>
            <li>Pensacola</li>
            <li>Cincinnati</li>
        </ul>
    </div>
}

export default AboutMe