import mongoose from "mongoose";

const connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-7efd9vv-shard-00-00.mlnkmws.mongodb.net:27017,ac-7efd9vv-shard-00-01.mlnkmws.mongodb.net:27017,ac-7efd9vv-shard-00-02.mlnkmws.mongodb.net:27017/?ssl=true&replicaSet=atlas-xnttkm-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Databasse connected successfully");
  } catch (error) {
    console.log("Error while connecting to datebase ", error);
  }
};

export default connection;
