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
  const users = await prisma.user.findMany({
    include: {
      posts: true,
      profiles: true,
    },
  });
  console.dir(users, { depth: Infinity });
}

run();
