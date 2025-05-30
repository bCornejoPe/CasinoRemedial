import { Schema, model } from "mongoose";

const categoriesSchema = new Schema(
  {
    nameGame: {
      type: String,
      required: true,
      unique: true,
      
    },
    categories: {
      type: String,
    
    },
    maxBet: {
        type: String,
      
      },
      
    minimumBet: {
        type: String,
      
      },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Categories", categoriesSchema);
