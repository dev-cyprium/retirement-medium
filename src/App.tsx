import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { UserCircle } from "./Icons";
import { YearsPageView } from "./components/YearsPageView";

interface User {
  id: string;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  function addRandomUsers(n: number) {
    const newUsers = [];
    for (let i = 0; i < n; i++) {
      newUsers.push({
        id: Math.random().toString(36).substr(2, 9),
        name: faker.name.fullName(),
      });
    }
    setUsers(newUsers);
  }

  return (
    <div className="container mx-auto">
      <div className="flex h-screen border rounded-md my-10">
        <div className="w-52 h-full p-4 border-r overflow-y-scroll">
          {users.length === 0 ? (
            <>
              <p className="mb-2 text-sm text-gray-800">
                Currently, there are no users
              </p>
              <button
                className="bg-blue-400 hover:bg-blue-600 rounded py-2 px-4"
                onClick={() => addRandomUsers(10000)}
              >
                Add 10.000
              </button>
            </>
          ) : (
            users.map((user) => (
              <div key={user.id} className="flex my-2">
                <UserCircle />
                <p className="ml-1 text-sm text-gray-800">{user.name}</p>
              </div>
            ))
          )}
        </div>
        <div className="flex-1">
          {users.length !== 0 ? (
            <YearsPageView />
          ) : (
            <div className="flex justify-center items-center h-full">
              <h1 className="text-gray-400 text-4xl">
                You don't currently have any users :<span>&#40;</span>
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
