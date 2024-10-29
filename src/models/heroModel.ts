import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Must provide the superhero title."],
  },
  name: {
    type: String,
    require: [true, "Please provide your original name."],
  },
  univrese: {
    type: String,
    require: [true, "Which universe you belongs to?"],
  },
  power: {
    type: String,
    require: [true, "What are your powers?"],
  },
  photo: String,
});

const Hero = mongoose.model("Hero", heroSchema);
export default Hero;
