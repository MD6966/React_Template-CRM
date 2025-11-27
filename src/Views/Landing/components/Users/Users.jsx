import DataTable from "../../../../components/Table/DataTable";
import { MdPeople } from "react-icons/md";

const Users = () => {

    // Sample users data
    const usersData = [
        {
            id: 8,
            name: 'Dominique Frederic',
            email: 'Dominique@pompanobeachrealty.com',
            role: 'Agent',
            initial: 'D'
        },
        {
            id: 7,
            name: 'Ali hasnain',
            email: 'hasnainali2049@gmail.com',
            role: 'Agent',
            initial: 'A'
        },
        {
            id: 5,
            name: 'Amethyst Gonzalez',
            email: 'admin2@example.com',
            role: 'Admin',
            initial: 'A'
        },
        {
            id: 4,
            name: 'Oliver Hoffmann',
            email: 'oliver@pompanobeachrealty.com',
            role: 'Admin',
            initial: 'O'
        }
    ];

    // Table columns configuration
    const columns = [
        {
            key: 'id',
            label: '#',
            sortable: true
        },
        {
            key: 'name',
            label: 'USER',
            sortable: true,
            render: (row) => (
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-b from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                        {row.initial}
                    </div>
                    <div>
                        <div className="font-medium text-gray-800 dark:text-white">{row.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">ID: {row.id}</div>
                    </div>
                </div>
            )
        },
        {
            key: 'email',
            label: 'CONTACT',
            sortable: true,
            render: (row) => (
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {row.email}
                </div>
            )
        },
        {
            key: 'role',
            label: 'ROLE',
            sortable: true,
            render: (row) => (
                <span className={`px-4 py-1.5 rounded-md text-sm font-medium ${row.role === 'Admin'
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                    : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                    }`}>
                    {row.role}
                </span>
            )
        }
    ];

    // Action handlers
    const handleView = (user) => {
        alert(`Viewing user: ${user.name}`);
    };

    const handleEdit = (user) => {
        alert(`Editing user: ${user.name}`);
    };

    const handleDelete = (user) => {
        if (window.confirm(`Are you sure you want to delete ${user.name}?`)) {
            alert(`Deleted user: ${user.name}`);
        }
    };

    const handleAddUser = () => {
        alert('Add new user');
    };

    return (
        <div>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 transition-colors">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div className="flex items-center gap-3">
                        <MdPeople className="text-4xl text-gray-800 dark:text-white" />
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Users</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleAddUser}
                            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-300 font-semibold flex items-center gap-2 shadow-md hover:shadow-lg"
                        >
                            <span className="text-xl">+</span>
                            Add User
                        </button>
                    </div>
                </div>

                {/* Data Table */}
                <DataTable
                    columns={columns}
                    data={usersData}
                    onView={handleView}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    searchable={true}
                    entriesPerPageOptions={[10, 25, 50, 100]}
                />
            </div>
        </div>
    );
};

export default Users;
