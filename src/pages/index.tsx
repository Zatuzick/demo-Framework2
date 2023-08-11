
import { Link } from 'react-router-dom'
import { useFetchProductQuery, useRemoveProductMutation } from '../api/product'

const Index = () => {
    const { data, isLoading } = useFetchProductQuery()
    const [removeProduct] = useRemoveProductMutation()
    const handleDelete = (id?: number) => {
        if (id) {
            console.log(id);

            removeProduct(id);
            alert("Xóa sản phẩm thành công")
        }
    }
    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200 max-w-7xl mx-auto">
            <h1 className='font-bold text-2xl p-5'>Products List</h1>
            {isLoading && <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
            </div>}
            <Link to="/add" className='bg-teal-300 p-2 font-medium '>Add Product</Link>
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            ###
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Name
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Price
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Description
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">

                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {data?.map((item, index) =>
                        <tr key={item.id}>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {index + 1}
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 text-gray-700">{item.name}</th>
                            <th className="whitespace-nowrap px-4 py-2 text-gray-700">{item.price}</th>
                            <th className="whitespace-nowrap px-4 py-2 text-gray-700">{item.description}</th>
                            <th className="whitespace-nowrap px-4 py-2 text-gray-700">
                                <button onClick={() => handleDelete(item.id)} className='mx-3 bg-red-500 p-2'>Delete</button>
                                <button className='bg-teal-400 p-2'>
                                    <Link to={`/update/${data.id}`}>Update</Link>
                                </button>
                            </th>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Index