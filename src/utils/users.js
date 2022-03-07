const users = [];

// addUser, removeUser,getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
  // Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Validate the data
  if (!username || !room) {
    return {
      error: "Username and Room are required!",
    };
  }

  // Check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  // Validate username
  if (existingUser) {
    return {
      error: "Username is in use!",
    };
  }

  // Store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id;
  });

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room);
};

// addUser({
//   id: 22,
//   username: "Alex",
//   room: "South Philly",
// });
// addUser({
//   id: 42,
//   username: "Mike",
//   room: "South Philly",
// });
// addUser({
//   id: 32,
//   username: "Alex",
//   room: "Center City",
// });

const user = getUser(42);
console.log(user);

const userList = getUsersInRoom("Center City");
console.log(userList);

// console.log(users);

// const removedUser = removeUser(22);

// console.log(removedUser);
// console.log(users);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
