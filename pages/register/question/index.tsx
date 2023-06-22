import RegisterHeader from "@/components/molecules/RegisterHeader";
import RegisterQuestionCard from "@/components/molecules/RegisterQuestionCard";
import RegisterTemplate from "@/components/templates/RegisterTemplate";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {
  email: string;
  password: string;
};

const RegisterQuestion = ({ email, password }: Props) => {
  const [answered, setAnswered] = useState<string[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<string>("");
  const [role, setRole] = useState("");
  const [user, setUser] = useState({
    email: email,
    password: password,
  });
  const [completed, setCompleted] = useState(false);
  const router = useRouter();

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

  const totalQuestions = question.length;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const progress = (currentQuestionIndex / totalQuestions) * 100;

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

    answered.push(selectedAnswers);
    const count: { [key: string]: number } = {};

    answered.forEach((element: string) => {
      count[element] = (count[element] || 0) + 1;
    });

    if (count["1"] > count["2"] || count["2"] == null) {
      setRole("Trader");
    } else {
      setRole("Investor");
    }

    console.log(role);
    if (isLastQuestion) {
      setCompleted(true); // Set completed to true when reaching the last question
    }
  };

  const handleQuestion = (answer: string) => {
    setSelectedAnswers(() => answer);
  };

  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const buttonText = isLastQuestion ? "Finish 🚀" : "Next Question";

  const submit = async () => {
    try {
      const url = "http://localhost:8080/account/register";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
          role: role,
        }),
      });
      if (response.ok) {
        alert("Berhasil");
        router.push("/login");
      } else {
        alert("Email is already exist");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
    setCompleted(true);
  };

  useEffect(() => {
    console.log(role); // Log the updated value of role
  }, [role]);

  return (
    <RegisterTemplate
      head="Register"
      backgroundImg="bg-auth"
      backgroundText="Dive in to lift"
      backgroundTextColor="Up"
    >
      <RegisterHeader
        title={`Hey There`}
        paragraph="These questions will help us tailor the right dashboard for you!"
      />
      <div className="flex flex-col w-full lg:max-w-[1366px] mt-10 lg:mx-auto px-14 gap-5 relative">
        <div className="w-full flex flex-col sticky">
          <p className="flex gap-1">
            <span className="text-mv-primary-1">{progress.toFixed(0)}%</span> to
            launching
          </p>
          <div className="flex items-center">
            <div className="w-full border h-3 rounded-full mr-2 overflow-hidden bg-slate-200">
              <div
                className="bg-mv-primary-1 h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="">🚀</div>
          </div>
        </div>

        {completed ? (
          <>
            <h2>Congratulations!</h2>
            <button
              className="w-full bg-mv-primary-3 text-white rounded-full shadow-md py-4 px-8 hover:bg-mv-secondary-1 transition-all ease-out"
              onClick={submit}
            >
              Let's Go!
            </button>
          </> // Display "Congratulations" when completed is true
        ) : (
          <form className="overflow-y-auto" action="#">
            {question.map((v, i) => {
              return (
                <div className="" key={i}>
                  {i === currentQuestionIndex && (
                    <RegisterQuestionCard
                      question={v.question}
                      answer1={v.answer1}
                      answer2={v.answer2}
                      onSelectAnswered={handleQuestion}
                    />
                  )}
                </div>
              );
            })}
            <button
              className="w-full bg-mv-primary-3 text-white rounded-full shadow-md py-4 px-8 hover:bg-mv-secondary-1 transition-all ease-out"
              type="button"
              onClick={handleNextQuestion}
            >
              {buttonText}
            </button>
          </form>
        )}
      </div>
    </RegisterTemplate>
  );
};

export default RegisterQuestion;
