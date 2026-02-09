export const metadata = {
  title: "개인정보처리방침",
  description:
    "본 사이트의 개인정보 처리 및 쿠키, 광고 사용에 대한 안내 페이지입니다.",
};

export default function PrivacyPage() {
  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px 20px",
        lineHeight: 1.7,
      }}
    >
      <h1>개인정보처리방침</h1>

      <p>
        본 사이트는 이용자의 개인정보를 중요하게 생각하며, 관련 법령을
        준수합니다.
      </p>

      <h2>1. 수집하는 정보</h2>
      <p>
        본 사이트는 회원가입 기능이 없으며, 직접적으로 개인정보를 수집하지
        않습니다. 다만, 서비스 이용 과정에서 다음 정보가 자동으로 수집될 수
        있습니다.
      </p>
      <ul>
        <li>IP 주소</li>
        <li>쿠키(Cookie)</li>
        <li>브라우저 종류 및 기기 정보</li>
        <li>방문 일시 및 이용 기록</li>
      </ul>

      <h2>2. 쿠키(Cookie)의 사용</h2>
      <p>
        본 사이트는 사용자 경험 개선 및 광고 제공을 위해 쿠키를 사용할 수
        있습니다. 쿠키는 사용자의 브라우저에 저장되는 작은 데이터 파일입니다.
      </p>
      <p>
        이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다. 단, 이
        경우 일부 서비스 이용에 제한이 있을 수 있습니다.
      </p>

      <h2>3. Google AdSense 광고</h2>
      <p>본 사이트는 Google AdSense를 통해 광고를 제공할 수 있습니다.</p>
      <p>
        Google은 사용자에게 맞춤형 광고를 제공하기 위해 쿠키를 사용할 수 있으며,
        이를 통해 사용자의 방문 기록에 기반한 광고가 표시될 수 있습니다.
      </p>
      <p>Google 광고 쿠키에 대한 자세한 내용은 아래에서 확인할 수 있습니다.</p>
      <p>
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google 광고 및 쿠키 정책 보기
        </a>
      </p>
      <p>이용자는 아래 페이지에서 맞춤 광고를 비활성화할 수 있습니다.</p>
      <p>
        <a
          href="https://adssettings.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google 광고 설정
        </a>
      </p>

      <h2>4. 개인정보 보관 및 이용 기간</h2>
      <p>
        본 사이트는 별도의 개인정보를 직접 수집하거나 저장하지 않습니다. 자동
        수집 정보는 통계 및 서비스 개선 목적으로만 활용됩니다.
      </p>

      <h2>5. 외부 링크</h2>
      <p>
        본 사이트에는 외부 사이트로 연결되는 링크가 포함될 수 있으며, 해당
        사이트의 개인정보처리방침에는 본 사이트가 책임지지 않습니다.
      </p>

      <h2>6. 정책 변경</h2>
      <p>
        본 개인정보처리방침은 관련 법령 및 서비스 정책에 따라 변경될 수
        있습니다.
      </p>

      <h2>7. 문의</h2>
      <p>개인정보 관련 문의는 아래 이메일로 연락해 주세요.</p>
      <p>📧 이메일: kwk9418@gmail.com</p>
    </main>
  );
}
