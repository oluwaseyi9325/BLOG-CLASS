import React from 'react'
import NewsBox from '../../Component/NewsBox';

function Category() {
  return (
    <div className='container'>
      <div className="mt-3">
        <hr/>
    <h4 className='text-center'>Sport News</h4>
    <hr/>
<div className="mt-3 row">
      {[1, 2, 3, 4, 5, 6, 4].map((val, i) => {
         return (
<NewsBox val={val} i={i}/>
        );
      })}
    </div>
</div>
    </div>
  )
}

export default Category
