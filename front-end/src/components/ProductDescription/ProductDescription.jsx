import React from "react";

const ProductDescription = () => {
  return (
    <div className="mt-20">
      <div className="flex gap-3 mb-4">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
      </div>
      <div className="flex flex-col pb-16">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          saepe voluptatem temporibus itaque non, facilis illum iusto et nam
          suscipit modi vitae. Perferendis tempora eligendi, qui assumenda
          aspernatur recusandae fugit dolor necessitatibus, distinctio magnam
          vel minima, temporibus voluptate enim amet repudiandae? Quisquam
          pariatur nulla nobis dolores repellendus, magnam, atque ullam natus
          voluptatem, dolore cumque numquam?
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
          quis quaerat dicta facere, eligendi facilis odio rerum aperiam aliquam
          ab dolorum esse ullam soluta quam itaque unde odit enim excepturi!
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
