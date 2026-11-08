
      
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

      <h2>食事選択</h2>
 
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
