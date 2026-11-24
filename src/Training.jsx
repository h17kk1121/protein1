import { useState } from 'react';
function Training() {
    const [train1,settrain1]=useState({name:'',set:'',rep:'',memo:''})
    const [train,settrain]=useState([])   
    const [memo,setmemo]=useState(false)
    const [memo1,setmemo1]=useState()
    const [memo2,setmemo2]=useState(false)
    const[memo3,setmemo3]=useState(false)
    const[memo4,setmemo4]=useState(false)
return ( <div> 
    
 <h2>トレーニング記録</h2> 

<input type="text"
value={train1.name}
onChange={(e)=> settrain1({ ...train1, name: e.target.value })}
/>
<input type="text"
value={train1.set}
onChange={(e)=> settrain1({ ...train1, set: e.target.value })}
/>
<input  type="text"
value={train1.rep}
onChange={(e)=> settrain1({ ...train1, rep: e.target.value })} ></input>

<button onClick={()=>{settrain([...train,train1]);
settrain1({name:'',set:'',rep:''})}}>
保存
</button>

{train.map((tr)=>
    <div>
        <p>{tr.name}:{tr.set}:{tr.rep}</p>

        <img src="\picture\OIP.jpg" alt="" className='memo' onClick={()=>{setmemo(true),setmemo3(false)}}/>
        <img src="\picture\memo-pad_green.png" alt="" className='memo'  onClick={()=>{setmemo2(true),setmemo4(false)}}/>
{memo && <div  className={memo3 ?'memoc':'memo1'}>
    <p className='memo2'>
    メモ   </p>
    <input 
    className='memo2'
    type="text"
    value={tr.memo}
  onChange={(e) => settrain(
  train.map((tr1) =>
    tr.name==tr1.name
      ? { ...tr1, memo: e.target.value }
      : tr1
  )
)}
    />
    <button  onClick={()=>setmemo3(true)}>保存</button>
  
   </div>
    
    }

    {memo2 &&

    <div className={memo4? 'memoc':'memo1'}>
    <p className='memo2'>

     {train.map((tr1)=>tr.name==tr1.name && <p>{tr1.memo}</p>)}
     <button onClick={()=>setmemo4(true)}>閉じる</button>
    </p>

    
   </div> }
  
                    </div>

)}


</div>

);

}

export default Training;
