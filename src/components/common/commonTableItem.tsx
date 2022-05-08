import Image from 'next/image';
import React from 'react';

import DetailsModal from '../transactions/detailsModal';

function CommonTableItem(props: any) {
  return (
    <tr>
      <td className="whitespace-nowrap p-2 first:pl-5 last:pr-5">
        <div className="flex items-center justify-center">
          <div className="font-medium text-gray-800">{props.col1}</div>
        </div>
      </td>
      {props.productImage && (
        <td className="whitespace-nowrap p-2 first:pl-5 last:pr-5">
          <div className="flex items-center justify-center">
            <Image
              src={props.productImage}
              className="font-medium text-gray-800"
              width={96}
              height={96}
              alt="product_image"
            />
          </div>
        </td>
      )}
      <td className="whitespace-nowrap p-2 first:pl-5 last:pr-5">
        <div className="text-center">{props.col2}</div>
      </td>
      <td className="whitespace-nowrap p-2 first:pl-5 last:pr-5">
        <div className="text-center font-medium text-green-500">
          {props.col3}
        </div>
      </td>
      <td className="whitespace-nowrap p-2 first:pl-5 last:pr-5">
        <div className="text-center">{props.col4}</div>
      </td>
      <td className="whitespace-nowrap p-2 first:pl-5 last:pr-5">
        <div className="text-center font-medium text-light-blue-500">
          {props.col5}
        </div>
      </td>
      <td className="whitespace-nowrap p-2 first:pl-5 last:pr-5">
        <div className="flex items-center justify-center font-medium text-green-500">
          <DetailsModal
            sender="v3n0m.eth"
            receiver="v3n0m.sol"
            storeName="Sita Ram Chole Bhature"
            customerName={props.col2}
            productName="BAYC"
            amount={78}
            paidIn={props.paidIn}
          />
        </div>
      </td>
    </tr>
  );
}

export default CommonTableItem;
