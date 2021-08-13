//President Child is responsible for diplaying the information

//President Parent is responsible for using the map feature and have it call the child

//Bronze: See if you can display all the presidents first and last nameby using the .map

//Silver: Create a filtered array so that the child will only display the presidents that are alive (map and filter)

//Gold: Display all presidents that have died and display the age that they did die

import PresidentChild from "./PresidentChild"
import { presidentsArray } from "./presidents.constant"

function PresidentParent() {
    return(
    <div>
        {presidentsArray.map((president) => (<PresidentChild presidents = {president} />))}
        <h4>Alive prez</h4>
        {presidentsArray.filter(president => president.passed === undefined).map((president) => (<PresidentChild presidents = {president} />))}
        <h4>Dead prez</h4>
        {presidentsArray.filter(president => president.passed !== undefined).map(president => (<PresidentChild presidents = {president} showDeathAge/>))}
    </div>
    )
}

export default PresidentParent