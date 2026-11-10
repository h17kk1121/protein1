import { useState } from 'react';

function Food({ math, setmath, anytime, setanytime, eat, seteat }) {
  const [real, setreal] = useState(false);
  const [real2, setreal2] = useState(false);
  const [selectMenu, setselectMenu] = useState(null);
  const [selectMenu2, setselectMenu2] = useState(null);
  const [goal, setgoal] = useState(0);
  const [goal2, setgoal2] = useState(false);
  const [randomFoods, setrandomFoods] = useState([]);
  const [tall, settall] = useState('');
  const [weight, setweight] = useState('');
  

const [protein2, setprotein2] = useState('');
const [proteinClass, setproteinClass] = useState(false);
const [oil, setoil] = useState(false);
const [oil1,setoil1]=useState(0)
const [carbs,setcarbs]=useState(false)
const [carbs1,setcarbs1]=useState(0)
const protein3=anytime.map((menu)=>menu.proteinCount);
const par=math
          .filter((menu) => menu.check)
          .reduce((total, menu) => total + Number(menu.count), 0)
const par1= math
    .filter((menu) => menu.check === true)
    .reduce((total, menu) => total + Number(menu.proteinCount), 0)   
const par2=math.filter((e)=>e.check==true).reduce((total,menu)=>total+Number(menu.oilcount),0)
const par3=math.filter((e)=>e.check==true).reduce((total,menu)=>total+Number(menu.carbscount),0)
const allpar = par1 * 4 + par2 * 9 + par3 * 4;

  return (
    <div>
      <h2>本日の食事内容</h2>

      <input
        type="text"
        value={eat.name}
        onChange={(e) => seteat({ ...eat, name: e.target.value })}
      />

      <input
        type="number"
        value={eat.count}
        onChange={(e) => seteat({ ...eat, count: e.target.value })}
      />

      <button
        onClick={() => {
          if (eat.name === '' || eat.count === '') {
            return;
          }

        setmath([...math, { ...eat, check: false, protein: false }]);
          seteat({ name: '', count: '' });
          setanytime([...anytime, { name: eat.name, count: eat.count, proteinCount: 0 }]);
        }}
      >
        保存
      </button>

      {math.map((menu, index) => (
        <div className='menu'>
          <div >
          <p>
            {menu.name}：{menu.count}キロカロリー
          </p>
          <p>
            プロテイン: {menu.proteinCount}g
          </p>
          </div>

          <img
            className="batu"
            src="/picture/OIP.webp"
            alt="削除"
            onClick={() => {
              setselectMenu(menu);
              setreal(true);
            }}
          />

          <input
            type="checkbox"
            checked={!!menu.check}
            onChange={(e) =>
              setmath(
                math.map((item) =>
                  item === menu
                    ? { ...item, check: e.target.checked }
                    : item
                )
              )
            }
          />
          
          <img className='protein' id='protein' src="\picture\ダウンロード.webp" alt="" 
          onClick={() => {setmath(
            math.map((item) =>
              item === menu
                ? { ...item, protein: true }
                : item
                
            )
          
      

          )
            setproteinClass(true)}}/>
          
{menu.protein && (
  <div className={proteinClass ? 'protein3' : 'protein2'}>
    <div className={proteinClass ? 'protein4' :'protein2'}>
      <input
        className="protein-input"
        type="number"
        value={protein2}
        placeholder="プロテインの量を入力してください"
        onChange={(e) => setprotein2(e.target.value)}
      />
    

    <button onClick={() => {
setmath(
  math.map((item) =>
    item === menu
      ? { ...item, proteinCount: protein2, protein: false }
      : item
  )
);
setproteinClass(false);
setprotein2('');
 

      setanytime(
  anytime.map((item) =>
    item.name === menu.name && item.count === menu.count
      ? { ...item, proteinCount: protein2 }
      : item
  )
);
    }}>
      保存
    </button>
    </div>
  </div>
)}
          <img className='oil' src="\picture\ダウンロード (1).webp" alt="" 
          onClick={() => setoil(true)}/>
    {oil ? (
      <div className='oil1'>
    
        <div className='oil2'>
          <h2>脂質を入力</h2>
          
          <input type="number" 
          value={oil1}
          onChange={(e)=>{setoil1(e.target.value);
          setmath(math.map((item)=>item==menu ? { ...item, oilcount: e.target.value }
        : item
    )
  );
}}
          />
          <button onClick={()=>{setoil(false);setoil1('')}}>
            保存
            </button> 
        
          </div>
              </div> 
    )
  : <div className='oil3'></div> 
  
  }
  <img src='\picture\nutrientes-carbohydrate-500x375.png' className='carbs' onClick={()=>setcarbs(true)}></img> 
  {carbs ? (
      <div className='oil1'>
    
        <div className='oil2'>
          <h2>炭水化物を入力</h2>
          
          <input type="number" 
          value={carbs1}
          onChange={(e)=>{setcarbs1(e.target.value);
          setmath(math.map((item)=>item==menu  ? { ...item, carbscount: e.target.value }
        : item
    )
  );
}}
          />
          <button onClick={()=>{setcarbs(false);
        setcarbs1('')}}>
            保存
            </button> 
        
          </div>
              </div> 
    )
  : <div className='carbs3'></div> 
  
  }





          
      {real && (
        <div className="warning">
          <p>本当に削除する？</p>

          <button
            onClick={() => {
              setmath(math.filter((item) => item !== selectMenu));
              setreal(false);
              setselectMenu(null);
            }}
          >
            削除
          </button>

          <button
            onClick={() => {
              setreal(false);
              setselectMenu(null);
            }}
          >
            いいえ
          </button>
        </div>
      )}
          


        </div>
      ))}

      <p>
        合計：{par}
      </p>
       <p>
  プロテイン：
  {par1}
  g
</p>



<h2>総カロリーバー</h2>
  <div className="par">
    <div className="parx">
  <div className={
  par === 0 || goal === 0 ? '' :
  par / goal <= 0.1 ? 'par1' :
  par / goal <= 0.2 ? 'par2' :
  par / goal <= 0.3 ? 'par3' :
  par / goal <= 0.4 ? 'par4' :
  par / goal <= 0.5 ? 'par5' :
  par / goal <= 0.6 ? 'par6' :
  par / goal <= 0.7 ? 'par7' :
  par / goal <= 0.8 ? 'par8' :
  par / goal <= 0.9 ? 'par9' :
  par / goal < 1 ? 'par10' :
  par / goal === 1 ? 'par11' :
  par / goal <= 1.1 ? 'par12':
  par / goal > 1.2 && 'par13'
}>
</div></div></div>
      {par >= goal
        ? <p>これ以上食べたら太るけど筋肉増！</p>
        : <p>痩せるけど筋肉減</p>
      }

<h2>PFCバランス円グラフ</h2>
<div className="circle">
      <div
  className="circle1"
  style={{
    background:  allpar === 0
    ? 'conic-gradient(gray 0% 100%)'
    :
    `conic-gradient(
      red 0% ${(par1*4 /allpar)* 100}% ,
      blue  ${(par1*4 /allpar)* 100}% ${((par2*9+par1*4) / allpar)* 100}% ,
      green ${((par2*9+par1*4 )/ allpar)* 100}%  100%
    )`
  }}
></div></div>
  




      <h2>今までの食事</h2>

      {anytime
        .filter((menu) => menu.name !== '' || menu.count !== '')
        .map((menu, index) => (
          <div className='menu'>
      
  <p>{menu.name}: {menu.count}</p>
          <p>プロテイン: {menu.proteinCount}g</p>
            <input
              type="checkbox"
              checked={math.some(
                (item) =>
                  item.name === menu.name &&
                  item.count === menu.count &&
                  item.fromAnytime
              )}
              onChange={(e) => {
                if (e.target.checked) {
                  setmath([
                    ...math,
                    { ...menu, check: true, fromAnytime: true }
                  ]);
                } else {
                  setmath(
                    math.filter(
                      (item) =>
                        !(
                          item.name === menu.name &&
                          item.count === menu.count &&
                          item.fromAnytime
                        )
                    )
                  );
                }
              }}
            />

            <img
              className="batu"
              src="/picture/OIP.webp"
              alt="削除"
              onClick={() => {
                setselectMenu2(menu);
                setreal2(true);
              }}
            />
       <select  value={menu.type || ''} onChange={(e) => setanytime(anytime.map((menu1) =>menu==menu1 ? {...menu1, type: e.target.value} : menu1))}
>
         <option value="主食">主食</option>
    <option value="主菜">主菜</option>
  <option value="副菜">副菜</option>
  <option value="汁物">汁物</option>
  <option value="乳製品">乳製品</option>
  <option value="果物">果物</option>
          
        </select>


          </div>
        ))}

   


      <div className={goal2 ? 'goal4' : 'goal'}>
        <section className={goal2 ? 'goal3' : 'goal2'}>
          <h2>目標を決めよう</h2>

        <div className="set">

        <input

        type="text"
        value={tall}
        onChange={(e)=>settall(e.target.value)}>
                  </input>

            
        <input
      
        type="text"
        value={weight}
        onChange={(e)=>setweight(e.target.value)}></input>


          <input
            type="number"
            value={goal}
            onChange={(e) => setgoal(e.target.value)}
            placeholder="目標を入力してください"
          />
          </div>
        
       



          <button onClick={() => setgoal2(true)}>設定</button>
        </section>
      </div>

      <h2>自動食事選択</h2>
 
      <button
        onClick={() => {
          const foods = anytime.filter((menu) => menu.name !== '');

          const random = [...foods].sort(() => Math.random() - 0.5);
          const selected = [];
          let total = 0;
          let proteinTotal = 0;

          random.forEach((menu) => {
            
        if (
          
  total + Number(menu.count) <= Number(goal) &&
  proteinTotal + Number(menu.proteinCount) <= Number(weight) * 2
&& selected.filter((item) => item.type === menu.type).length < 1
) {
  selected.push(menu);
  total += Number(menu.count);
  proteinTotal += Number(menu.proteinCount);


}});


          
if (selected.filter((item)=>item.type==='主食').length === 1 && selected.filter((item)=>item.type==='主菜').length === 1 &&
selected.filter((item)=>item.type==='副菜').length === 1 ){
          setrandomFoods(selected);
        }}}
      >
        選択
      </button>

   {randomFoods.map((menu, index) => (
  <div key={index}>
    <p>{menu.name}: {menu.count}</p>
  <p>プロテイン: {menu.proteinCount}g</p>
  



  </div>
))}
    </div>
  );
}

export default Food;
