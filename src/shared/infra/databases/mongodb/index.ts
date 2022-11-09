import mongoose, { ConnectOptions } from "mongoose"

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
  } = process.env;

class MongoConnection {
    public createMongoDBConnection(){
        // Cachear essa conexão
        return mongoose.createConnection(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_NAME}:27017/${DB_NAME}?authSource=admin`,
            { 
                useNewUrlParser: true,
                useUnifiedTopology: true
            } as ConnectOptions
        )
    }
}

export default MongoConnection