const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam impedit aliquam consequuntur odio amet eum accusamus explicabo corporis, est magni. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ea nulla aliquid voluptatem, ducimus quas nihil. Ad dolores quidem iste rem minima soluta possimus exercitationem facere, dolore tenetur cumque! Consectetur, minus ipsam. Qui nesciunt corrupti dolore ullam aspernatur laudantium eum. Delectus debitis omnis animi quia officiis blanditiis expedita nisi excepturi tenetur molestias ratione, similique adipisci voluptatum dolor sequi vel nemo. Mollitia qui in optio reiciendis molestiae ab dolorum. Sunt, excepturi culpa distinctio pariatur expedita odio? At hic in exercitationem veniam ut eligendi sed voluptates rerum ipsam vel commodi, tempora, quo aut. Nobis delectus rem nulla totam eos repellendus asperiores nam itaque, cumque ipsa error eaque magnam! Maxime maiores nisi voluptate itaque vel hic, repellendus cumque illo distinctio, iste dolore iusto eum omnis ipsum dolor repellat ab molestiae, saepe facere ducimus deleniti explicabo esse odio. Totam beatae veniam et pariatur eveniet tempora, odio quibusdam laborum minima, natus neque quas, voluptatibus deleniti. Nisi voluptatum eligendi sit, vitae iusto quasi quod eius voluptatem assumenda atque, asperiores optio neque minima quisquam itaque blanditiis dolorem illo tempore praesentium. Illo, sequi quisquam. Vitae molestias neque dolores. Consequatur blanditiis voluptatem similique tempore nihil ratione expedita ad omnis! Autem sint alias sunt vitae provident dolor explicabo, sapiente dolore.",
  },
  imageUrl: {
    type: String,
    default:
      "https://img.myloview.fr/papiers-peints/humain-homme-personne-avatar-profil-utilisateur-vector-icon-illustration-700-80657983.jpg",
  },
},{ timestamps: true });

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
