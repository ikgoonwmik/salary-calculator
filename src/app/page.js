"use client";

import { useEffect, useState } from "react";
import { calculateNetSalary } from "@/utils/taxCalculator";
import SeoText from "./seoText";

export default function Home() {
  const [salary, setSalary] = useState("");
  const [result, setResult] = useState(null);

  const handleCalc = () => {
    if (!salary) return;
    setResult(calculateNetSalary(Number(salary)));
  };

  useEffect(() => {
    if (window.adsbygoogle) {
      window.adsbygoogle.push({});
    }
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen py-16 px-4">
      {/* 계산기 영역 */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">
          연봉 실수령액 계산기
        </h1>

        <input
          type="number"
          placeholder="연봉 입력 (예: 36000000)"
          className="w-full border p-2 rounded mb-3"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <button
          onClick={handleCalc}
          className="w-full bg-blue-600 text-white p-2 rounded-lg font-semibold"
        >
          계산하기
        </button>

        {result && (
          <div className="mt-6 text-center">
            <p className="text-gray-600">예상 월 실수령액</p>
            <p className="text-2xl font-bold text-blue-600">
              {result.toLocaleString()} 원
            </p>
          </div>
        )}
      </div>

      {/* SEO 설명 영역 */}
      <SeoText />
      <div className="mt-10">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9819687643821802"
          data-ad-slot="8977877593"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </main>
  );
}
