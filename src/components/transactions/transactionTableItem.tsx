import React from 'react';

import DetailsModal from './detailsModal';

function TransactionTableItem(props: any) {
  return (
    <tr>
      <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
        <div className="flex items-center justify-center">
          <div className="font-medium text-gray-800">{props.id}</div>
        </div>
      </td>
      <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
        <div className="text-center">{props.name}</div>
      </td>
      <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
        <div className="text-center font-medium text-green-500">
          {props.amount}
        </div>
      </td>
      <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
        <div className="text-center">{props.paidIn}</div>
      </td>
      <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
        <div className="text-center font-medium text-light-blue-500">
          {props.status}
        </div>
      </td>
      <td className="whitespace-nowrap px-2 py-3 first:pl-5 last:pr-5">
        <div className="flex items-center justify-center font-medium text-green-500">
          <DetailsModal
            sender="v3n0m.eth"
            receiver="v3n0m.sol"
            storeName="Sita Ram Chole Bhature"
            customerName={props.name}
            productName="BAYC"
            amount={78}
            paidIn={props.paidIn}
          />
        </div>
      </td>
    </tr>
  );
}

export default TransactionTableItem;
