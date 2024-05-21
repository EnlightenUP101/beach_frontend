const cardItems = [
  {
    name:'Egg Sauce with Boiled Yam',
    price:'5000'
  },
  {
    name:'Egg Sauce with Boiled Yam',
    price:'5000'
  },   
  {
    name:'Egg Sauce with Boiled Yam',
    price:'5000'
  }, 
  {
    name:'Egg Sauce with Boiled Yam',
    price:'5000'
  }, 
  {
    name:'Egg Sauce with Boiled Yam',
    price:'5000'
  },   
  {
    name:'Egg Sauce with Boiled Yam',
    price:'5000'
  },    
  {
    name:'Egg Sauce with Boiled Yam',
    price:'5000'
  },    
  {
    name:'Egg Sauce with Boiled Yam',
    price:'5000'
  },    
  {
    name:'Egg Sauce with Boiled Yam',
    price:'5000'
  },

];
export default function CategoryCard() {
  return (
    <div className="my-8">
      {/* category  name*/}
      <div className="flex my-8 items-center gap-2">
        <p>Brunch</p>
        <div className="border h-1 bg-[#01A3D2] flex-1"></div>
      </div>
      {/* cards */}
      <div className="grid grid-cols-4 gap-6">
        {cardItems.map((card, index) =>  
          <div key={index} className="p-4 flex rounded-xl border-1 bg-white flex-col gap-2">
            <p className="h-8">{card.name}</p>
            <div className="flex items-center">
              <span className="text-[9px]">NGN</span>
              <p className="text-[22px] leading-6 font-bold">{card.price}</p>
            </div>
          </div>)}
      </div>
    </div>
  );
}
