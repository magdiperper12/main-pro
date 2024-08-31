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
    <div className='py-10'>
      {experienceItems.map((featureItem, featureIndex) => (
        <div
          key={featureIndex}
          className='relative overflow-x-auto mb-6 w-3/4 m-auto bg-zinc-50 my-24 px-5  pt-5 rounded-md  border'
        >
          <div className='mb-2 text-lg font-semibold text-gray-800 '>
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
                <tr key={itemIndex} className=' border-t '>
                  <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>
                    {item.first}
                  </td>
                  <td className='px-6 py-4'>
                    <FaCheckCircle className='text-lg inline me-3 text-blue-500 ' />
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
