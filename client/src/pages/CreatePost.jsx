import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPromt } from "../utils";
import { FormField, Loader } from "../component";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setform] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = ()=>{

  }
  const handleChange = (e)=>{

  }
  const handleSurpriseMe = ()=>{

  }

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32p]">
         Create
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
          Create imamaginative and visuall stunning images through
          DALL-E AI and share them with the community
        </p>
      </div>

      <form  className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField 
            labelName="You name"
            type="text"
            name="name"
            placeholder="  Dima Ostanin"
            value={form.name}
            handleChange={handleChange}
            />
            <FormField 
            labelName="Promt"
            type="text"
            name="promt"
            placeholder="  A plush toy robot sitting against a yellow wall"
            value={form.name}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
            />


        </div>
      </form>

    </section>
  );
};

export default CreatePost;
