import React from "react";
import { Briefcase, Clipboard, Tag, TagIcon, SparklesIcon } from "lucide-react";
import { CubeIcon } from "@heroicons/react/24/outline";

interface ProductCardProps {
  title: string;
  description: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="flex flex-row p-6 rounded-lg">
      <div className="pr-2">
        <SparklesIcon className="mx-auto h-12 w-12 text-amber-300" />
      </div>
      <div className="flex flex-col  justify-center ">
        <h3 className="text-xl font-semibold  mb-4">
          <a href={link} className="hover:underline text-indigo-600">
            {title}
          </a>
        </h3>
        <p className="mb-4">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
