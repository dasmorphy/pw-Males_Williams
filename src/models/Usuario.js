import { type } from "express/lib/response";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
        username: {
            type: String,
            unique: true
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        roles: [{
            ref: "Role",
            type: Schema.Types.ObjectId
        }],
    }, {
        timestamps: true, //añade hora y fecha de actualizacion y registro
        versionKey: false //oculta el tipo de version que se uso 
    }


)

export default userSchema;
