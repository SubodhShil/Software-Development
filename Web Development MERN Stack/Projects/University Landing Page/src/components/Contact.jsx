import React from 'react'

function Contact() {
    return (
        <div>
            <h1 className='text-5xl text-center'>Admission Form</h1>
            <div className='flex flex-row justify-center mt-10'>
                <form action="">

                    <label htmlFor="">Name</label>
                    <input type="text" name='text' className='ml-2 border border-3 rounded-lg border-blue-600' />

                    <br />

                    <label htmlFor="Age">Age</label>
                    <input type="text" name='text' className='ml-2 border border-3 rounded-lg border-blue-600' />

                    <div>
                        <label htmlFor="">Give message</label>
                        <textarea name="" id="" className='ml-2 border border-3 rounded-lg border-blue-600'></textarea>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Contact