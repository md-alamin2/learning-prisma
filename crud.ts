import { prisma } from "./lib/prisma";

async function run() {
  // create user
  //   const createUser = await prisma.user.create({
  //     data: {
  //       name: "Habib",
  //       email: "habib@gmail.com",
  //     },
  //   });
  //   console.log('User created successfully: ', createUser)
  // create post for userId = 1
  // const createPost = await prisma.post.create({
  //     data:{
  //         title: "This is a sunny day",
  //         authorId: 1
  //     }
  // })
  // console.log("Post created successfully: ", createPost)
  //   create profile
  //   const createProfile = await prisma.profile.create({
  //     data: {
  //       bio: "Full-stack web developer",
  //       userId: 1,
  //     },
  //   });
  //   console.log("Profile created successfully: ", createProfile);
  //retrieve all user
  //   const users = await prisma.user.findMany({
  //     include: {
  //       posts: true,
  //       profiles: true,
  //     },
  //   });
  //   console.dir(users, { depth: Infinity });
  // update profile
  //   const updateUser = await prisma.profile.update({
  //     where: { userId: 1 },
  //     data: {
  //       dateOfBirth: "2005-10-10T06:29:34.049Z",
  //     },
  //     select:{
  //         id: true,
  //         bio: true,
  //         user: {
  //             select:{
  //                 name: true,
  //                 email: true
  //             }
  //         }
  //     }
  //   });
  //   console.log(updateUser);
  // delete user
  //   const deleteUser = await prisma.user.delete({
  //     where: { id: 2 },
  //   });
  //   console.log(deleteUser)

  //   using upsert
  const upsertUser = await prisma.user.upsert({
    where: {
      email: "al-amin@prisma.io",
    },
    update: {
      name: "Al-amin Hossain",
    },
    create: {
      name: "Al-amin Hossain",
      email: "al-amin@prisma.io",
    },
  });
  console.log(upsertUser)
}

run();
