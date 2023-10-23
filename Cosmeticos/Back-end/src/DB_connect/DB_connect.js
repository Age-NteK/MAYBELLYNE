const { Product, Video, Tutorial } = require("../db");
const path = require("path");
const fs = require("fs");

const DB_connect = async () => {
  try {
    // ! PRODUCT
    const productFilePath = path.join(__dirname, "../../dataProducts.json");
    const productRawData = fs.readFileSync(productFilePath);
    const productData = JSON.parse(productRawData);

    // ! VIDEO
    const videoFilePath = path.join(__dirname, "../../dataVideos.json");
    const videoRawData = fs.readFileSync(videoFilePath);
    const videoData = JSON.parse(videoRawData);

    // ! TUTORIALS
    const tutorialFilePath = path.join(__dirname, "../../dataTutorials.json");
    const tutorialRawData = fs.readFileSync(tutorialFilePath);
    const tutorialData = JSON.parse(tutorialRawData);

    // ! USERS
    // const userFilePath = path.join(__dirname, "../../dataUsers.json");
    // const userDataRaw = fs.readFileSync(userFilePath);
    // const userData = JSON.parse(userDataRaw);

    // ! PRODUCT
    if (!productData || !Array.isArray(productData)) {
      console.log("Invalid data format. Expecting an array.");
      return;
    }

    // ! VIDEO
    if (!videoData || !Array.isArray(videoData)) {
      console.log("Invalid data format. Expecting an array.");
      return;
    }

    // ! TUTORIALS
    if (!tutorialData || !Array.isArray(tutorialData)) {
      console.log("Invalid tutorial data format. Expecting an array.");
      return;
    }

    // ! USERS
    // if (!userData || !Array.isArray(userData)) {
    //   console.log("Invalid user data format. Expecting an array.");
    //   return;
    // }

    // ! PRODUCT
    const productSet = new Set();
    // const userSet = new Set();
    for (const product of productData) {
      try {
        if (!productSet.has(product.id_product)) {
          productSet.add(product.id_product);
          await Product.create({
            id_category: product.id_category,
            id_section: product.id_section,
            brand: product.brand,
            name: product.name,
            price: parseFloat(product.price),
            rating: product.rating,
            category: product.category,
            description: product.description,
            benefits: product.benefits,
            application: product.application,
            images: product.images,
            colors: product.colors,
          });
        }
        // console.log(productData);
      } catch (error) {
        console.error(error);
      }
    }

    // ! VIDEO
    for (const video of videoData) {
      try {
        await Video.create({
          id_video: video.id_video,
          url: video.url,
        });
      } catch (error) {
        console.error(error);
      }
    }

    // ! TUTORIALS

    for (const tutorial of tutorialData) {
      try {
        await Tutorial.create({
          id_tutorial: tutorial.id_tutorial,
          title: tutorial.title,
          content: tutorial.content,
          images: tutorial.images,
        });
      } catch (error) {
        console.error(error);
      }
    }

    // ! USERS

    // for (const user of userData) {
    //   try {
    //     if (!userSet.has(user.id_user)) {
    //       userSet.add(user.id_user);
    //       await User.create({
    //         id_user: user.id_user,
    //         username: user.username,
    //         email: user.email,
    //         password: user.password,
    //         firstName: user.firstName,
    //         lastName: user.lastName,
    //         phoneNumber: user.phoneNumber,
    //       });
    //       // console.log(`Created user: ${user.username}`);
    //     }
    //   } catch (error) {
    //     console.error(`Error creating user: ${user.username}`, error);
    //   }
    // }

    console.log("♥ Database Created... ♥");
  } catch (error) {
    console.error("Error populating the database:", error);
  }
};

module.exports = DB_connect;
