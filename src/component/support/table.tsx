import React from "react";
import { FaCheckCircle } from "react-icons/fa";
interface Item {
  first: string;
  secound: string;
  date: Date;
  last: string;
}

interface FeatureItem {
  tableName: string;
  items: Item[];
}

interface ExperienceProps {
  experienceItems: FeatureItem[];
}

const TableExplor: React.FC<ExperienceProps> = ({ experienceItems }) => {
  return (
    <div className='my-10 md:my-16'>
      {experienceItems.map((featureItem, featureIndex) => (
        <div
          key={featureIndex}
          className='relative overflow-x-auto mb-6 w-3/4 m-auto bg-zinc-50 my-24 px-5  pt-5 rounded-md  border'
        >
          <div className='mb-5 text-lg md:text-xl font-semibold text-gray-800 '>
            {featureItem.tableName}
          </div>
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 '>
            <thead className='text-xs text-white uppercase bg-blue-600 font-bold text-start '>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Service
                </th>
                <th scope='col' className='px-6 py-3'>
                  Status
                </th>
                <th scope='col' className='px-6 py-3'>
                  Last Updated
                </th>
                <th scope='col' className='px-6 py-3'>
                  Additional Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {featureItem.items.map((item, itemIndex) => (
                <tr
                  key={itemIndex}
                  className=' border-t text-md md:text-md text-black'
                >
                  <td className='px-6 py-4 font-medium whitespace-nowrap '>
                    {item.first}
                  </td>
                  <td className='px-6 py-4 '>
                    <FaCheckCircle className=' inline me-3 text-green-500 ' />
                    {item.secound}
                  </td>{" "}
                  <td className='px-6 py-4'>
                    {item.date.toLocaleDateString()}
                  </td>
                  <td className='px-6 py-4'>{item.last}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default TableExplor;
