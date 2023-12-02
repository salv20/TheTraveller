import React from 'react'

const Notification = ({ notify }) => {
    return (
        <div
            className={`${!notify ? 'hidden' : 'block'} absolute px-2 py-5 bg-heading font-semibold w-3/5 mt-10 right-5 text-center`}>
            <p>Thank you for choosing us.</p>
        </div>
    )
}

export default Notification
