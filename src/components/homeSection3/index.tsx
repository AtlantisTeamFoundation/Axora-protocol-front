import type React from "react";

interface HomeSection3Props {
  contentTitle?: string;
  contentDesc?: string;
  contentBtnText?: string;
  cardContent: React.ReactNode;
}

const HomeSection3 = ({
  contentTitle = "Lorem ipsum dolor sit ipsum",
  contentDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex facilis placeat suscipit?",
  contentBtnText = "lorem",
  cardContent,
}: HomeSection3Props) => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-around items-center md:mt-33 mt-12 md:text-left text-center">
      <div className="max-w-108">
        <h1 className="text-2xl font-semibold mb-3">{contentTitle}</h1>
        <p className="text-xl">{contentDesc}</p>
        <div className="mt-4">
          <button className="text-xl font-bold text-[#1dad9d] hover:cursor-pointer">
            {contentBtnText}
          </button>
        </div>
      </div>
      <div className="h-42.5 w-61 pb-2.5 mb-5.5 md:mb-0 flex justify-center items-center">
        {cardContent}
      </div>
    </div>
  );
};
export default HomeSection3;
