import { useForm } from "react-hook-form"
import { useAddProductMutation } from "../api/product"
import { useNavigate } from "react-router-dom"


type AddProductForm = {
    name: string,
    price: number,
    description: string
}


const Add = () => {
    const { handleSubmit, formState: { errors }, register } = useForm<AddProductForm>()
    const [addProduct] = useAddProductMutation()
    const navigate = useNavigate()
    const onSubmit = (data: AddProductForm) => {
        console.log(data);
        addProduct(data)
        alert("Thêm sản phẩm thành công ")
        navigate("/")
    }
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Add Product Page</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <label className="sr-only">Name</label>

                    <div className="relative">
                        <input
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter name"
                            {...register("name")}
                            required
                            minLength={3}
                        />

                    </div>
                </div>

                <div>
                    <label className="sr-only">Price</label>

                    <div className="relative">
                        <input
                            type="number"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter Price"
                            {...register("price")}
                            required
                        />


                    </div>
                </div>

                <div>
                    <label className="sr-only">Description</label>

                    <div className="relative">
                        <textarea

                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter Description"
                            {...register("description")}
                            required
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">


                    <button
                        type="submit"
                        className="inline-block  rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        ADD Product
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Add