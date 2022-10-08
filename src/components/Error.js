import React from 'react'

function Error({ error }) {
    return (
        <div className='error'>
            <p>Error : {error}</p>
        </div>
    )
}

export default Error