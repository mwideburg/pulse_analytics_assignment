import React from 'react'


const SerachResults = ({data, sort}) => {

    
    if(sort){
        let priority = {
            'High': [],
            'Medium': [],
            'Low': []
        };
        data.forEach(objData => {
            switch (objData['priority']) {
                case "High":
                    priority["High"].push(objData)
                    break;
                case "Medium":
                    priority["Medium"].push(objData)
                    break;
                case "Low":
                    priority["Low"].push(objData)
                    break;
                default:
                    break;
            }
        })
        let sorted = Object.values(priority)
        let res = []
        sorted.forEach(arr => {
            res.push(...arr)
        })
        data = res
    }
    const result = data.map(objData => {
        let member = objData['member']
        let influencerType = objData["influencerType"]
        let category = objData["indicationCategory"]
        let affiliation = objData["affiliation"]
        let position = objData["affiliationPosition"]
        let state = objData['primaryState']
        let priority = objData['priority']
        return(
            <li>
            <div className="info-container">
                <div className="member-priority">
                    <p>
                    Member: <b>{member}</b>
                    </p>
                    Priority : {priority}
                    
                </div>
                <div className="member-data">
                    <ul>
                        <li>
                        Title : {position}
                        </li>
                        <li>
                        State : {state}
                        </li>
                        <li>
                        Type : {influencerType}
                        </li>
                        <li>
                        Category : {category}
                        </li>
                        <li>
                        Affiliation : {affiliation}
                        </li>
                        
                    </ul>
                </div>
                
                
            </div>
            </li>
        )
    })
    return(
        <div className="result-container">
            <ul>
                {result}
            </ul>
        </div>
    )


}

export default SerachResults