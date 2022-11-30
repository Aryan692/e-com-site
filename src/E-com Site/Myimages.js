import React, {useState} from 'react';


const Myimages = ({img =[{url:""}]}) =>{

    const[mainImage , setmainImage] = useState(img[0]);

    return (<>
    <div className='flex items-center justify-center gap-3 mt-[3rem]'>
   <div className=' scale-75 md:scale-100 w-[8rem] h-[8rem]  flex flex-col gap-3 items-center'>
    {img.map((curElem , index)=>{

        return (
            <figure>
                <img  src={curElem.url} alt={curElem.filename} 
                key={index} onClick={()=>{setmainImage(curElem)}}/>
            
            </figure>
        )
    })}

   </div>
    <div className='scale-75 md:scale-100 w-[20rem] h-[14rem]'>
        <img className='mt-[8rem]' src={mainImage.url} alt={mainImage.filename} />
    </div>
    </div>

    </>);
}

export default Myimages;