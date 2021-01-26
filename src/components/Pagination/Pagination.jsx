import React from 'react'

const Pagination = ({ lastPage,  onPageChanged, currentPage })  => {


const previousHandler = () => {
  if( (currentPage - 1) > 0) {
    onPageChanged(currentPage - 1)
  }  
}

const nextHandler = () => {
  if(currentPage !== lastPage) {
    onPageChanged(currentPage + 1)
  }
}

  return (
    <div>
      <button onClick={ previousHandler }>Prev</button>
      {`${currentPage} of ${lastPage}`}
      <button onClick={ nextHandler }>Next</button>
    </div>
  )
}
  

export default Pagination