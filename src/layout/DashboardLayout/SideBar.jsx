import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    MdDashboard,
    MdOutlineChatBubbleOutline,
    MdBarChart,
    MdCalendarToday,
    MdLink,
    MdSettings,
    MdLogout,
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
    MdOutlineDashboard,
} from 'react-icons/md';
import { FaConnectdevelop } from 'react-icons/fa6';
import { PiShareNetworkThin, PiUserCircleDuotone } from 'react-icons/pi';
import useTheme from "../../hooks/useTheme";

const SideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeItem, setActiveItem] = useState('');
    const [openDropdown, setOpenDropdown] = useState(null);

    const { theme } = useTheme();

    const menuItems = [
        { name: 'Dashboard', icon: MdOutlineDashboard, path: '/' },
        { name: 'Users', icon: PiUserCircleDuotone, path: '/users' },
        // { name: 'Leads CRM', icon: MdBarChart, path: '#' },
        // { name: 'Appointments', icon: MdCalendarToday, path: '#' },
        // {
        //     name: 'Connected Account',
        //     icon: PiShareNetworkThin,
        //     path: '/connected-account',
        //     submenus: [
        //         { name: 'Facebook', path: '/connected-account/facebook' },
        //         { name: 'Instagram', path: '/connected-account/instagram' },
        //         { name: 'Google My Business', path: '/connected-account/gmb' },
        //     ],
        // },
        // { name: 'Settings', icon: MdSettings, path: '/settings' },
    ];

    useEffect(() => {
        const currentPath = location.pathname;

        const activeMainItem = menuItems.find(item =>
            item.path === currentPath ||
            (item.submenus && item.submenus.some(sub => sub.path === currentPath))
        );

        if (activeMainItem) {
            setActiveItem(activeMainItem.name);

            if (activeMainItem.submenus) {
                const activeSubItem = activeMainItem.submenus.find(sub => sub.path === currentPath);
                if (activeSubItem) {
                    setActiveItem(activeSubItem.name);
                    setOpenDropdown(activeMainItem.name);
                }
            }
        }
    }, [location.pathname]);

    const handleItemClick = (itemName, path, hasSubmenus) => {
        if (hasSubmenus) {
            setOpenDropdown(openDropdown === itemName ? null : itemName);
        } else {
            setActiveItem(itemName);
            setOpenDropdown(null);
            navigate(path);
        }
    };

    const handleSubmenuClick = (itemName, path) => {
        setActiveItem(itemName);
        navigate(path);
    };

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div
            className="
                flex flex-col w-[258px]
                bg-gradient-to-b from-primarycolor to-secondarycolor
                dark:from-gray-900 dark:to-gray-800
                text-white dark:text-gray-200
                relative font-barlow overflow-y-auto
            "
            style={{ scrollbarWidth: 'none' }}
        >
            <div className="p-4 pt-8">
                <h2 className="text-lg font-semibold mb-4 opacity-80">Main Menus</h2>

                {menuItems.map((item) => (
                    <div key={item.name}>
                        {/* Main Menu Item */}
                        <div
                            className={`
                                flex items-center p-3 mb-3 rounded-lg font-semibold cursor-pointer
                                transition-colors duration-200
                                ${activeItem === item.name ||
                                    (item.submenus && item.submenus.some(sub => sub.name === activeItem))
                                    ? 'bg-white text-black dark:bg-gradient-to-b dark:from-primarycolor dark:to-secondarycolor dark:text-white'
                                    : 'hover:bg-white/20 dark:hover:bg-gray-700'
                                }
                            `}
                            onClick={() => handleItemClick(item.name, item.path, !!item.submenus)}
                        >
                            <item.icon className="mr-3 text-2xl" />
                            <span className="text-[14px]">{item.name}</span>

                            {item.submenus && (
                                <span className="ml-auto">
                                    {openDropdown === item.name ? (
                                        <MdKeyboardArrowUp className="text-xl" />
                                    ) : (
                                        <MdKeyboardArrowDown className="text-xl" />
                                    )}
                                </span>
                            )}
                        </div>

                        {/* Submenu Items */}
                        {item.submenus && (openDropdown === item.name ||
                            item.submenus.some(sub => sub.name === activeItem)) && (
                                <div className="pl-9 pb-2">
                                    {item.submenus.map((submenu) => (
                                        <div
                                            key={submenu.name}
                                            className={`
                                                flex items-center p-2 my-1 rounded-lg cursor-pointer font-bold
                                                transition-colors duration-200 text-sm
                                                ${activeItem === submenu.name
                                                    ? 'bg-white text-black dark:bg-gradient-to-b dark:from-primarycolor dark:to-secondarycolor dark:text-white'
                                                    : 'hover:bg-white/20 dark:hover:bg-gray-700'
                                                }
                                            `}
                                            onClick={() => handleSubmenuClick(submenu.name, submenu.path)}
                                        >
                                            {submenu.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                    </div>
                ))}

            </div>

            <div className="border-t border-primarycolor dark:border-gray-700 mx-4 mt-8 opacity-50"></div>

            <div className="flex-grow"></div>

            <div className="p-4">
                <button
                    className="
                        flex items-start justify-start w-full p-3 rounded-lg cursor-pointer font-semibold text-lg
                        bg-white/20 hover:bg-white hover:text-black
                        dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white
                    "
                    onClick={handleLogout}
                >
                    <MdLogout className="mr-3 mt-1 text-2xl" />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default SideBar;