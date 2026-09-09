import React,{useState} from 'react';

function Likecounter() {
  const [countLikes,setCountLikes]  = useState(0);
  const [isLiked,setisLiked] = useState(false);

  const toggleHandler = ()=>{
   setisLiked(prev=> !prev)
  }

  const handleClick = ()=>{
  likeHandler();
  toggleHandler();

  }
  const likeHandler = ()=>{
  
  if(isLiked){
  setCountLikes(prev => prev - 1);
  } else{
  setCountLikes(prev => prev + 1);
  }
  }
 
  return (
  <>
  <div className="w-full">
    <h1>total Likes ♥ : {countLikes}</h1>
    {/* <div className="max-w-full">
        <button onClick={likeHandler}
        className='bg-red-300 rounded-md px-1 py-0.5'>
             like♥
        </button>

    </div> */}
    {/* <div className="max-w-full">
        <button onClick={dislikeHandler}
        className='bg-red-300 rounded-md px-1 py-0.5 mt-2'>
            dislike👎
        </button>
    </div> */}
    <div className="max-w-full">
        <button onClick={handleClick}
        className='hover:cursor-pointer'
        >
            {isLiked ? "Liked ♥" : "Like ♡"}
            </button>
    </div>
  </div>
  </>
  )
}

export default Likecounter