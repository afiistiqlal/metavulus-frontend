import React from "react";
import { BsCheckCircle } from "react-icons/bs";

type Props = {
  question: string;
  answer1: string;
  answer2: string;
  answered?: boolean;
};

const RegisterQuestionCard = ({
  question,
  answer1,
  answer2,
  answered,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 mb-10">
      <div className="text-xl normal-case font-QuicksandSemibold text-mv-primary-1">
        {question}
      </div>
      <button className="border-2 rounded-xl px-4 py-2 h-12 flex items-center gap-2 text-white bg-mv-primary-1">
        <div className="w-6 h-6 flex items-center justify-center">
          <BsCheckCircle className="" />
        </div>{" "}
        <p className="normal-case">{answer1}</p>
      </button>
      <button className="border-2 rounded-xl px-4 py-2 h-12 flex items-center gap-2 text-gray-400">
        <div className="w-6 h-6 flex items-center justify-center">
          <BsCheckCircle className="" />
        </div>{" "}
        <p className="normal-case">{answer2}</p>
      </button>
    </div>
  );
};

export default RegisterQuestionCard;
