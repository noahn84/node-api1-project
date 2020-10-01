let users = [
  { id: "1", name: "Samuel L. Jackson", bio: "The path of the righteous man is beset of all sides by the iniquities of the selfish and the tyranny of evil me. Blessed is he who, in the name of the charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children." },
  { id: "2", name: "Marsellus Wallace", bio: "Fuck pride. Pride only hurts, it never helps." },
  { id: "3", name: "Vincent Vega", bio: "Play with matches, you get burned." }
]

function getUsers() {
  return users
}

function getUserById(id) {
  return users.find(u => u.id === id)
}

function createUser(data) {
  const payload = {
    id: String(users.length + 1),
    ...data,
  }

  users.push(payload)
  return payload
}

function updateUser(id, data) {
  const index = users.findIndex(u => u.id === id)
  users[index] = {
    ...users[index],
    ...data,
  }

  return users[index]
}

function deleteUser(id) {
  users = users.filter(u => u.id != id)
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}