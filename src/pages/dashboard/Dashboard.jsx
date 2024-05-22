import Modal from '@common/components/modal/Modal';
import { useState } from 'react';

export default function Dashboard() {
  const [showModal, setShowModal] = useState(true);

  const users = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
    { name: 'Tom Cook', title: 'Director of Product', email: 'tom.cook@example.com', role: 'Member' },
    { name: 'Whitney Francis', title: 'Copywriter', email: 'whitney.francis@example.com', role: 'Admin' },
    { name: 'Leonard Krasner', title: 'Senior Designer', email: 'leonard.krasner@example.com', role: 'Owner' },
    { name: 'Floyd Miles', title: 'Principal Designer', email: 'floyd.miles@example.com', role: 'Member' },
  ];

  return (
    <>
      <div className="bg-[#ccc] flex justify-center">
        <div className="w-[75%] bg-white my-5 rounded-lg shadow-md">
          {/* Category table */}
          <div className="border rounded-lg m-5 p-5">
            <div className="flex justify-between items-center px-4 font-semibold">
              <h1 className="text-2xl">Categories</h1>
              <button className="bg-blue-500 py-2 px-3 text-sm text-white font-bold rounded-lg">Add category</button>
            </div>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">ID</th>
                  <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">
                    Category
                  </th>
                  <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-5 px-4 text-sm text-gray-700">{user.name}</td>
                    <td className="py-5 px-4 text-sm text-gray-700">{user.title}</td>
                    <td className="py-5 px-4">
                      <div className="flex items-center gap-5">
                        <button>Edit</button>
                        <button>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <hr className=" my-6" />
          {/* Table */}
          <div className="border rounded-lg m-5 p-5">
            <div className="flex justify-between items-center px-4 font-semibold">
              <h1 className="text-2xl">Items</h1>
              <button className="bg-blue-500 py-2 px-3 text-sm text-white font-bold rounded-lg">Add item</button>
            </div>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">
                    Name
                  </th>
                  <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">
                    Category
                  </th>
                  <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">
                    Price
                  </th>
                  <th className="py-5 px-4 text-black border-b border-gray-200 text-left text-sm font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-5 px-4 text-sm text-gray-700">{user.name}</td>
                    <td className="py-5 px-4 text-sm text-gray-700">{user.title}</td>
                    <td className="py-5 px-4 text-sm text-gray-700">{user.email}</td>
                    <td className="py-5 px-4 text-sm text-gray-700">{user.role}</td>
                    <td className="py-5 px-4">
                      <div className="flex items-center gap-5">
                        <button>Edit</button>
                        <button>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="bg-white pb-4 px-4 w-96 rounded-md">
          <div className="flex justify-end py-4">
            <button className="cursor-pointer">X</button>
          </div>
          <form method="POST" action="#" className="flex flex-col gap-4">
            <div>
              <label htmlFor="itemName" className="block text-sm font-medium leading-5  text-gray-700">
                Item name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="itemName"
                  name="itemName"
                  placeholder="John Doe"
                  type="text"
                  required=""
                  value=""
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium leading-5  text-gray-700">
                Price
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="price"
                  name="price"
                  placeholder="John Doe"
                  type="text"
                  required=""
                  value=""
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium leading-5  text-gray-700">
                Category
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <select
                  name="category"
                  id="category"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                >
                  <option value="">select category</option>
                  <option value="df">dadf</option>
                  <option value="dfa">adf</option>
                  <option value="34">adf</option>
                </select>
              </div>
            </div>
            <div>
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Upload Item
                </button>
              </span>
            </div>
          </form>
        </div>
      </Modal> */}
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="bg-white pb-4 px-4 w-96 rounded-md">
          <div className="flex justify-end py-4">
            <button className="cursor-pointer">X</button>
          </div>
          <form method="POST" className="flex flex-col gap-4">
            <div>
              <label htmlFor="categoryName" className="block text-sm font-medium leading-5  text-gray-700">
                Category name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="categoryName"
                  name="categoryName"
                  placeholder="John Doe"
                  type="text"
                  required=""
                  value=""
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div>
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Upload Category
                </button>
              </span>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
