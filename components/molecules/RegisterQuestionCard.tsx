import React, { useState } from "react";
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
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(e.target.value);
  };
  return (
    <div className="flex flex-col gap-2 mb-10">
      <label className="text-xl normal-case font-QuicksandSemibold text-mv-primary-1">
        {question}
      </label>
      <label
        className={`border-2 rounded-xl px-4 py-2 h-12 flex items-center gap-2 ${
          selectedAnswer === "1"
            ? "bg-mv-primary-1 text-white"
            : "text-gray-400 hover:bg-mv-secondary-1 hover:text-white hover:cursor-pointer"
        }`}
      >
        <input
          type="radio"
          name="answer1"
          value="1"
          className="normal-case hidden peer"
          onChange={handleAnswerChange}
        />
        <div className="w-6 h-6 flex items-center justify-center">
          <BsCheckCircle className="" />
        </div>{" "}
        {answer1}
      </label>
      <label
        className={`border-2 rounded-xl px-4 py-2 h-12 flex items-center gap-2 ${
          selectedAnswer === "2"
            ? "bg-mv-primary-1 text-white"
            : "text-gray-400 hover:bg-mv-secondary-1 hover:text-white hover:cursor-pointer"
        }`}
      >
        <input
          type="radio"
          name="answer2"
          value="2"
          className="normal-case hidden peer"
          onChange={handleAnswerChange}
        />
        <div className="w-6 h-6 flex items-center justify-center">
          <BsCheckCircle className="" />
        </div>{" "}
        <p className="normal-case">{answer2}</p>
      </label>
    </div>
  );
};

export default RegisterQuestionCard;
