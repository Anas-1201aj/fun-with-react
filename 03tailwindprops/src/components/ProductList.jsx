import React,{useState} from 'react'

function ProductList() {
    const electronincs = ["laptop","mobile","charger"];
    const books = ["science","mathematics","pythonBook"];
    const clothing = ["jeans","shirts","t-shirts"];
    const [category,setCategory] = useState("");

    let products = [];
    if(category === "electronics"){
        products = electronincs;
    }
    if(category === "books"){
        products = books;
    }
    if(category === "clothing"){
        products = clothing;
    }
    if(category === "all"){
        products = [...electronincs,...books,...clothing];
    }
    

    // const handler1 = ()=>{
    // setCategory("electronics");
    // }
    // const handler2 = ()=>{
    //     setCategory("books");
    // }
    // const handler3 = ()=>{
    //   setCategory("clothing")
    // }
    //  const handlerAll = ()=>{
    //     setCategory("all")
    // }
    //another cleaner way to this instead of making 4 different handlers you can do it by making it only one

    const handler = (category)=>{
    setCategory(category)
    }
    
  return (
    <>
    <div className="w-full">
       
         <div className="w-full">
            <h1>ProductList</h1>
             </div>
            <div className='w-full'>
                <button onClick={()=>handler("electronics")}>
                  
                    Electronics</button>

            </div>
            <div className='w-full'>
                <button onClick={()=> handler("books")}>Books</button>
            </div>
            <div className='w-full'>
                <button onClick={()=>handler("clothing")}>Clothing</button>
            </div>
             <div className='w-full'>
                <button onClick={()=>handler("all")}>All Category</button>
            </div>
           
            {products.map((value,index)=>(
                <div key={index}
                 className='w-full'>
                    {value}

                </div>
            ))}

    </div>
   
  </>
  )
}

export default ProductList