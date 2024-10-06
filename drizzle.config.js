/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://car-marketplace_owner:UpKXN0r7Thcf@ep-steep-paper-a5kvfyvk.us-east-2.aws.neon.tech/car-marketplace?sslmode=require',
    }
};