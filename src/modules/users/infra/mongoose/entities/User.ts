import { ObjectId } from 'bson'

import { Schema, Document } from 'mongoose'

interface UpdateResult {
    /** Indicates whether this write result was acknowledged. If not, then all other members of this result will be undefined */
    acknowledged: boolean;
    /** The number of documents that matched the filter */
    matchedCount: number;
    /** The number of documents that were modified */
    modifiedCount: number;
    /** The number of documents that were upserted */
    upsertedCount: number;
    /** The identifier of the inserted document if an upsert took place */
    upsertedId: ObjectId;
}

interface DeleteResult {
    acknowledged: boolean;
    deletedCount: number
}

interface User extends Document {
    name: string,
    email: string
}

const UserSchema = new Schema({
    name: { type: String, default: null },
    email: { type: String, default: null },
}, { timestamps: true })

export { UserSchema, User, UpdateResult, DeleteResult }
