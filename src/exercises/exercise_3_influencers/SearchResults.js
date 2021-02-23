import React from 'react'
import SingleResult from './SingleResult'

const SerachResults = ({data, sort}) => {
    // if sort is active then we sort the data based on priority
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

        // rebuild data array

        sorted.forEach(arr => {
            res.push(...arr)
        })
        data = res
    }

    // Map data for each result in search

    let key = 0
    const result = data.map(objData => {
        key++
        return(
            <li key={key}>
                <SingleResult objData={objData}/>
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