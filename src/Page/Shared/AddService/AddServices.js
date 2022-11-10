import React from 'react';
import toast from 'react-hot-toast';
import UseTitle from '../../../hooks/UseTitle';

const AddServices = () => {
    UseTitle('Add service')

    const handelSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const title = form.title.value
        const price = form.price.value
        const image = form.image.value
        const description = form.description.value

        const newService = {
            title,
            price,
            image,
            description
        }

        fetch('https://happy-toast-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Your product successfully added!!!')
                    form.reset()
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='my-10 lg:p-6 w-3/4 mx-auto bg-orange-200 shadow-sm rounded-xl '>
            <div className="flex flex-col p-8  rounded-xl lg:p-4 bg-gray-100">
                <form onSubmit={handelSubmit} className="flex flex-col items-center w-full">
                    <div className="flex flex-col items-center pb-2 ">
                        <span className="text-center">Hello user!! </span>
                    </div>
                    <h2 className="text-3xl font-semibold text-center">You can ADD Products!</h2>

                    <div className="flex flex-col w-full">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="relative z-0">
                                <input type="text" name="title" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder="Title" required />
                            </div>

                            <div className="relative z-0">
                                <input type="text" name="price" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder="price" required />
                            </div>
                            <div className="relative z-0">
                                <input type="url" name="image" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder="image URL" required />
                            </div>
                        </div>
                        <input type="text" name='description' rows="3" placeholder="description"
                            className="p-4 mt-4 focus:outline-none rounded-md resize-none " required></input>


                        <div className='w-1/2 mx-auto'>
                            <button className=" tracking-wider px-6 font-semibold py-2.5 mt-6 text-sm text-white  bg-orange-700 rounded-md lg:w-full hover:bg-purple-500 focus:outline-none focus:bg-purple-500">
                                ADD product</button>
                        </div>
                        {/* <p className='mt-4'> Don't have an account? <Link to={`/services/${_id}`}><span className='cursor-pointer text-sm text-blue-600'> Sign up</span></Link></p> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServices;