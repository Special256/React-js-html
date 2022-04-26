export default function Ex209() {
  document.title = "첫 타이틀"
  return (
    <div>
      <title>텍스트 꾸미기</title>
      <div> 
        <h3>텍스트 꾸미기</h3>
        <hr></hr>
        <p>
            <b>진하게</b><br></br>
            <strong>중요한</strong><br></br>
            <em>강조</em><br></br>
            <i>이탤릭으로 강조</i><br></br>
            <b><i>진하게 이탤릭으로 강조</i></b><br></br>
            보통 문자 <small>한 단계 작은 문자</small><br></br>
            <del>삭제</del><br></br>
            <ins>추가</ins><br></br>
            보통문자의 <sup>윗첨자</sup><br></br>
            보통문자의 <sub>아래첨자</sub><br></br>
            <mark>하이라이팅</mark><br></br>

        </p>
      </div>
    </div>
  )
}