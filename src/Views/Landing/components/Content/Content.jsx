import React from "react";
import {
  MdTrendingUp,
  MdPeople,
  MdCalendarToday,
  MdChat,
  MdArrowUpward,
  MdArrowDownward
} from "react-icons/md";
import { FaRobot, FaChartLine } from "react-icons/fa";
import useTheme from "../../../../hooks/useTheme";

const Content = () => {
  const { theme } = useTheme();

  // Stats data
  const stats = [
    {
      title: "Total Leads",
      value: "1,234",
      change: "+12.5%",
      isPositive: true,
      icon: MdPeople,
    },
    {
      title: "Active Chatbots",
      value: "8",
      change: "+2",
      isPositive: true,
      icon: FaRobot,
    },
    {
      title: "Appointments",
      value: "45",
      change: "+8.2%",
      isPositive: true,
      icon: MdCalendarToday,
    },
    {
      title: "Conversations",
      value: "892",
      change: "-3.1%",
      isPositive: false,
      icon: MdChat,
    },
  ];

  // Recent activities
  const recentActivities = [
    { name: "John Doe", action: "New lead captured", time: "5 min ago", type: "lead" },
    { name: "Sarah Smith", action: "Appointment scheduled", time: "15 min ago", type: "appointment" },
    { name: "Mike Johnson", action: "Chat conversation started", time: "32 min ago", type: "chat" },
    { name: "Emma Wilson", action: "Form submitted", time: "1 hour ago", type: "lead" },
    { name: "David Brown", action: "Appointment completed", time: "2 hours ago", type: "appointment" },
  ];

  // Quick actions
  const quickActions = [
    { title: "Create Chatbot", icon: FaRobot, color: "from-primarycolor to-secondarycolor" },
    { title: "View Leads", icon: MdPeople, color: "from-primarycolor to-secondarycolor" },
    { title: "Schedule Meeting", icon: MdCalendarToday, color: "from-primarycolor to-secondarycolor" },
    { title: "Analytics", icon: FaChartLine, color: "from-primarycolor to-secondarycolor" },
  ];

  return (
    <div className="overflow-y-auto h-full">
      {/* Header Section - Fade in from top */}
      <div className="mb-6 animate-fadeInDown">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats Cards - Staggered fade in */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 animate-fadeInUp hover:-translate-y-1"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-b ${stat.color || 'from-primarycolor to-secondarycolor'} transform transition-transform duration-300 hover:scale-110`}>
                <stat.icon className="text-2xl text-white" />
              </div>
              <div className={`flex items-center text-sm font-semibold ${stat.isPositive ? 'text-green-500' : 'text-red-500'} animate-pulse`}>
                {stat.isPositive ? <MdArrowUpward /> : <MdArrowDownward />}
                {stat.change}
              </div>
            </div>
            <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
              {stat.title}
            </h3>
            <p className="text-3xl font-bold text-gray-800 dark:text-white">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

        {/* Recent Activities - Slide in from left */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 animate-slideInLeft">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Recent Activities
          </h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200 hover:translate-x-2 cursor-pointer"
                style={{
                  animation: `fadeInLeft 0.5s ease-out ${index * 100}ms both`
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-b from-primarycolor to-secondarycolor flex items-center justify-center text-white font-bold transition-transform duration-300 hover:scale-110">
                    {activity.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">
                      {activity.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {activity.action}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions - Slide in from right */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 animate-slideInRight">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="w-full flex items-center space-x-4 p-4 bg-gradient-to-b from-primarycolor to-secondarycolor text-white rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  animation: `fadeInRight 0.5s ease-out ${index * 100}ms both`
                }}
              >
                <action.icon className="text-2xl" />
                <span className="font-semibold">{action.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Chart Placeholder - Fade in */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 animate-fadeIn">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
          Performance Overview
        </h2>
        <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600">
          <div className="text-center">
            <FaChartLine className="text-6xl text-gray-400 dark:text-gray-500 mx-auto mb-4 animate-bounce" />
            <p className="text-gray-600 dark:text-gray-400">
              Chart visualization will appear here
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.7s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.7s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out 0.6s both;
        }
      `}</style>
    </div>
  );
};

export default Content;