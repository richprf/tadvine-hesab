"use client"

import React from 'react'
import CommonInput from '../common/CommonInput'
import FilterAutocomplete from '../common/AutoCompleted'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '@/redux/slices/search'

const FilterSection = () => {

  const dispatch = useDispatch()
 
  return (
    <div className='bg-red-200 flex justify-between'>
        <div>
        <CommonInput  placeholder="Search for a country..." type="text" onChange={(e:any) => dispatch(setSearch(e.target.value))}  />

        </div>
        <div>
        <FilterAutocomplete  />
        </div>
   </div>
  )
}

export default FilterSection
