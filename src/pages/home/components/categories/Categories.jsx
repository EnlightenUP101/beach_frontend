import CategoryCard from './CategoryCard';

const catergories = ['Brunch', 'Curated Combos', 'Desserts','Hot Drinks', 'Mya’s Menu (Children)', 'Mya’s Menu (Children)', 'Rice', 'Stews', 'Street Food', 'Premium Collection', 'Meats and Fish', 'Oyibo Pepper'];
export default function Categories() {
  return (
    <div className="mt-[4.25rem] px-[6.25rem]">
      <p className="text-[2rem] font-normal leading-10">
      Categories
      </p>
      <p className="leading-5 mt-3">
      Explore menu items under each category </p>
      <p className='text-[2rem]  leading-9 text-[#FFD664] font-normal mt-10 mb-8'>
        All Categories
      </p>
      {/* categories list slection */}
      <div className="my-8">
        <ul className="flex gap-3 flex-wrap">
          {catergories.map((category, index) =><li className="rounded-full  cursor-pointer text-[#01A3D2] list-none border border-sky-100  px-[10px]  py-0.5  bg-[#EEEEEE]" key={index}>{category}</li>)}

        </ul>
      </div>
      <div>
        <CategoryCard />
      </div>

    </div>
  );
}
