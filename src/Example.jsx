import React, { useState } from 'react'

function Example({subject,age}) {
  const [concept,setConcept] = useState('Hooks Concept')
  console.log(concept);
  
  return (
    <><div>Example</div>
    {subject=='REACT'?<p>The passed property is: {subject}</p>:
    <p className='text-danger fs-3 fw-bolder'>The passed property is: {subject}</p>}
    {age==27 && <p>The passed property is: {age}</p>}
    <p>Concept: {concept}</p>
    <button className='btn btn-dark' onClick={()=>setConcept('Next.js')}>Click Me</button>
    </>
  )
}

export default Example 
// rfce for loading basic style