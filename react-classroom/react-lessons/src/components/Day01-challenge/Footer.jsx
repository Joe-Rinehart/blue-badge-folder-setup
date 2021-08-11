const getCurrentYear = () => {
    return new Date().getFullYear()
}

function Footer() {
    return <div>
        <footer>Copyright EFA {getCurrentYear()}</footer>
    </div>
}

export default Footer