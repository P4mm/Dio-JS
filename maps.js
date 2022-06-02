function getAdmins(map) {
  for ([key, value] of map) {
    if (value === 'Admin') {
      getAdmins.push(key)
    }
  }

  return admins
}

const usuarios = new Map()

usuarios.set('Luis', 'Admin')
usuarios.set('Pamela', 'Admin')
usuarios.set('Jorge', 'User')
usuarios.set('Natalia', 'Admin')

console.log(getAdmins(usuarios))
