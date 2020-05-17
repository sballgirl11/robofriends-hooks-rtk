export const getRobots = async () => {
  return await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .catch(error => error)
}
