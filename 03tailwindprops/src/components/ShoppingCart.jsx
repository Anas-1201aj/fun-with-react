import React,{useState} from 'react'

function Formtoaddproduct() {
    const[product,setProduct] = useState("");
    const[price,setPrice] = useState();
    const[category,setCategory] = useState("");
    const[display,setDisplay] = useState([])

  
    const submitHandler = (e)=>{
    e.preventDefault()
      const newProduct = {
        product: product,
        price: price,
        category: category
    }
    setDisplay((prev)=> [...prev,newProduct]);

    //clear the form after submitting it 
    setProduct("")
    setPrice("")
    setCategory("")
    
    };
  return (
    <>
    
<div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-2xl font-bold text-slate-800 text-center">
            Add Product
        </h2>

        <p className="text-sm text-slate-500 text-center mt-2 mb-8">
            Enter the product details below
        </p>

        <form onSubmit={submitHandler} className="space-y-5">

            {/* Product Name */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Product Name
                </label>

                <input
                    type="text"
                    placeholder="Enter product name"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3
                    text-slate-800 placeholder-slate-400
                    outline-none transition
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
            </div>

            {/* Price */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Price
                </label>

                <input
                    type="number"
                    placeholder="Enter product price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3
                    text-slate-800 placeholder-slate-400
                    outline-none transition
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
            </div>

            {/* Category */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Category
                </label>

                <input
                    type="text"
                    placeholder="Enter product category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3
                    text-slate-800 placeholder-slate-400
                    outline-none transition
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
            </div>

            {/* Button */}
            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold
                py-3 rounded-lg mt-3
                hover:bg-blue-700
                active:scale-[0.98]
                transition duration-200
                cursor-pointer"
            > 
                Add Product
            </button>

        </form>
    </div>
</div>

   {/* display details */}

    <div className="max-w-full">
            {display.map((item,index)=>(
            <div key={index}>
                 <p> product: {item.product}
                    </p>
                    <p> price: {item.price}
                    </p>
                    <p> category: {item.category}
                    </p>
            </div>

            ))}
        </div>
    
    </>
  )
}

export default Formtoaddproduct