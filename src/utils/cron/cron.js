// import cron from 'node-cron'
// export const cronFunction = cron.schedule('* * * * *', () => {
//   console.log('Holaa')
// })
// const members = [
//   {
//     id: 1,
//     name: 'John Doe',
//     email: 'john@gmail.com',
//     status: 'active',
//     membershipExpires: '2026-11-15',
//   },
//   {
//     id: 2,
//     name: 'Bob Williams',
//     email: 'bob@gmail.com',
//     status: 'inactive',
//     membershipExpires: '2026-11-20',
//   },
//   {
//     id: 3,
//     name: 'Shannon Jackson',
//     email: 'shannon@gmail.com',
//     status: 'active',
//     membershipExpires: '2026-11-10',
//   },
// ]

// export const revisarMenbresias = cron.schedule('1 * * * * *', () => {
//   const date = new Date()
//   members.forEach(member => {
//     if (member.status == 'active') {
//       console.log(
//         `La membresia del usuario ${member.name} caduca el dia  ${new Date(member.membershipExpires) - date}`,
//       )
//     }
//   })
// })
