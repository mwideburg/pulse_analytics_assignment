import React from 'react'

const SingleResult = ({objData}) => {
        // extract data to display
        let member = objData['member']
        let influencerType = objData["influencerType"]
        let category = objData["indicationCategory"]
        let affiliation = objData["affiliation"]
        let position = objData["affiliationPosition"]
        let state = objData['primaryState']
        let priority = objData['priority']

        return (
            
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
            
        )
}

export default SingleResult