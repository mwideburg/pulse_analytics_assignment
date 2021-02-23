import React, { useState } from 'react'
import styled from 'styled-components'

import data from '../../data.json'
import './styles.css'

import uniqueBy from '../exercise_1_uniqueBy'
import filterBy from '../exercise_2_filterBy'

import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
const Container = styled.div({
  border: '1px solid black',
  borderRadius: 4,
  padding: 24,
  margin: 24,
  background: '#E8EBEC',
})

/*
  TODOs:
    1. Wire in our influencers display on line 44
    2. Wire in a click handler to the button on line 43 that will sort 
       our data by priority
*/

const Influencers = () => {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)
  const [buttonStyle, setButton] = useState('unsort')
  const uniqueData = uniqueBy(data, 'member') // use the uniqueBy util to unique our data by the "member" values

  const filteredData = filterBy(uniqueData, search, [
    'indicationCategory',
    'affiliation',
    'affiliationPosition',
  ]) // use the filterBy util to filter our data by the given search term

  function changeSort(e){
      e.preventDefault()
      let bool = (sort === true) ? false : true
      let nextButton = (buttonStyle === 'unsort') ? 'sort' : 'unsort'
      setButton(nextButton)
      setSort(bool)
  }

  return (
    <Container>
      <h1>Pulse Analytics Take Home Assignment ✏️ </h1>
      <SearchBar setSearch={setSearch} search={search} />
      <button onClick={changeSort} className={buttonStyle}>Sort by Priority</button>
      <SearchResults data={filteredData} sort={sort}/>
    </Container>
  )
}

export default Influencers
