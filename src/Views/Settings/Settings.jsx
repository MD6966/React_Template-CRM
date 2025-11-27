import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa6';
import { MdWhatsapp } from 'react-icons/md';

const Settings = () => {
  const [accounts, setAccounts] = useState([
    { id: 'instagram', name: 'Instagram', description: 'Lorem ipsum dolor sit.', icon: <FaInstagram />, isOn: true, bgColor: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600' },
    { id: 'whatsapp', name: 'Whatsapp', description: 'Lorem ipsum dolor sit.', icon: <MdWhatsapp />, isOn: false, bgColor: 'bg-green-500' },
    { id: 'facebook', name: 'Facebook', description: 'Lorem ipsum dolor sit.', icon: <FaFacebook />, isOn: true, bgColor: 'bg-blue-600' },
    { id: 'twitter', name: 'Twitter', description: 'Lorem ipsum dolor sit.', icon: <FaTwitter />, isOn: true, bgColor: 'bg-blue-400' },
    { id: 'tiktok', name: 'Tiktok', description: 'Lorem ipsum dolor sit.', icon: <FaTiktok />, isOn: true, bgColor: 'bg-black' },
  ]);

  const handleToggle = (id) => {
    setAccounts((prevAccounts) =>
      prevAccounts.map((account) =>
        account.id === id ? { ...account, isOn: !account.isOn } : account
      )
    );
  };

  return (
    <div className="p-6 bg-white rounded-lg h-full border border-blue-200 mx-auto font-barlow ">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Social Accounts</h2>
      <div>
        {accounts.map((account) => (
          <div
            key={account.id}
            className="flex items-center justify-between py-4 border-b last:border-b-0 border-gray-100"
          >
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center text-2xl text-white justify-center mr-4 p-1 
                  ${account.bgColor}`}
              >
                {account.icon}
              </div>
              <div>
                <p className="text-gray-900 font-semibold">{account.name}</p>
                <p className="text-gray-500 text-sm">{account.description}</p>
              </div>
            </div>

            {/* Toggle Switch */}
            <label
              htmlFor={`${account.id}-toggle`}
              className="relative inline-flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id={`${account.id}-toggle`}
                className="sr-only peer"
                checked={account.isOn}
                onChange={() => handleToggle(account.id)}
              />
              <div
                className={`w-11 h-6 rounded-full peer 
                  ${account.isOn ? 'bg-primarycolor' : 'bg-gray-200'} 
                  peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primarycolor 
                  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full 
                  peer-checked:after:border-primarycolor after:content-[''] after:absolute after:top-[2px] 
                  after:left-[2px] after:bg-white after:border after:border-primarycolor after:rounded-full 
                  after:h-5 after:w-5 after:transition-all dark:border-gray-600`}
              >

              <span className={`ml-1 text-xs font-medium dark:text-gray-300 ${account.isOn ? "ml-1 text-white": "ml-6"}`}>
                {account.isOn ? 'On' : 'Off'}
              </span>
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;