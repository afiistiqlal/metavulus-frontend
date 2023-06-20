import RegisterHeader from "@/components/molecules/RegisterHeader";
import RegisterQuestionCard from "@/components/molecules/RegisterQuestionCard";
import RegisterTemplate from "@/components/templates/RegisterTemplate";
import React, { useState } from "react";

type Props = {};

const RegisterQuestion = (props: Props) => {
  const [answered, setAnswered] = useState(false);
  const question = [
    {
      question: "Tipe jangka investasi Anda?",
      answer1: "Jangka panjang (tahun atau dekade)",
      answer2: "Jangka pendek (menit, hari atau minggu)",
    },
    {
      question: "Bagaimana Anda menggambarkan strategi investasi Anda? ",
      answer1:
        "Value Investing, Growth Investing, atau investasi dividen (fokus jangka panjang)",
      answer2:
        "Day trading, swing trading, atau trading algoritmik (fokus jangka pendek)",
    },
    {
      question: "Berapa tingkat toleransi risiko Anda? ",
      answer1:
        "Toleransi risiko rendah, lebih memilih strategi yang meminimalkan volatilitas jangka pendek",
      answer2:
        "Toleransi risiko tinggi, bersedia menahan fluktuasi pasar untuk potensi keuntungan jangka panjang",
    },
    {
      question: "Seberapa sering Anda membuat keputusan investasi?",
      answer1: "Jarang, menyesuaikan portofolio saya secara berkala",
      answer2: "Sering, mengeksekusi perdagangan setiap hari atau intraday",
    },
    {
      question: "Jenis analisis apa yang lebih Anda sukai? ",
      answer1:
        "Analisis fundamental, mengevaluasi prospek investasi jangka panjang",
      answer2:
        "Technical analysis, menganalisa pola harga jangka pendek dan tren pasar",
    },
    {
      question: "Apa tujuan investasi utama Anda?",
      answer1:
        "Akumulasi kekayaan jangka panjang, perencanaan pensiun, atau pendanaan pendidikan",
      answer2:
        "Menghasilkan keuntungan jangka pendek, memanfaatkan volatilitas pasar",
    },
    {
      question: "Apa jenis alat dan platform yang Anda sukai?",
      answer1:
        "Sistem manajemen portofolio, kalkulator pensiun, dan sumber daya penelitian",
      answer2:
        "Data pasar real-time, alat charting, dan platform eksekusi order",
    },
  ];

  return (
    <RegisterTemplate>
      <RegisterHeader
        name="John"
        paragraph="These questions will help us tailor the right dashboard for you!"
      />
      <div className="flex flex-col w-full lg:max-w-[1366px] mt-10 lg:mx-auto px-14 gap-5 relative">
        <div className="w-full flex flex-col sticky">
          <p className="flex gap-1">
            <span className="text-mv-primary-1">50%</span> to launching
          </p>
          <div className="flex items-center">
            <div className="w-full border h-3 rounded-full mr-2 overflow-hidden bg-slate-200">
              <div className="bg-mv-primary-1 w-6/12 h-2.5 rounded-full">
                {/* change the w-6/12 to w-12/12 to make it full */}
              </div>
            </div>
            <div className="">🚀</div>
          </div>
        </div>
        <form className="overflow-y-auto" action="#">
          {question.map((v, i) => {
            return (
              <div className="" key={i}>
                <RegisterQuestionCard
                  question={v.question}
                  answer1={v.answer1}
                  answer2={v.answer2}
                  answered
                />
              </div>
            );
          })}
          <button
            className="w-full bg-mv-primary-3 text-white rounded-full shadow-md py-4 px-8 hover:bg-mv-secondary-1 transition-all ease-out"
            type="submit"
          >
            Finish 🚀
          </button>
        </form>
      </div>
    </RegisterTemplate>
  );
};

export default RegisterQuestion;
