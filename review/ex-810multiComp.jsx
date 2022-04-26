import React from 'react';
import ReactDOM from 'react-dom'

const Ex810multiComp = () => {
  return (
    <div>
      <CreateH3 />
      <CreateHr />
      <CreateP />
      <CreateA />
      <CreateP2/>
    </div>
  )
}

function createDIV() {
  var obj = document.getElementsByTagName("BODY")[0];
  var newDIV = document.createElement("div");
  newDIV.innerHTML = "새로 생성된 DIV입니다.";
  newDIV.setAttribute("id", "myDiv");
  newDIV.style.backgroundColor = "yellow";
  newDIV.onClick = (e) => {var p = e.currentTarget.parentNode.remove(); // 부모 HTML 태그 요소
  };
  obj.appendChild(newDIV);
}

const CreateH3 = () => <h3>DIV 객체를 동적으로 생성, 삽입, 삭제하는 예제</h3>
const CreateHr = () => <hr />

const CreateP = () =>
  <p>
    DOM 트리에 동적으로 객체를 삽입할 수 있습니다. createElement(), appendChild(), removeChild() 메소드를 이용하여 새로운 객체를 생성, 삽입, 삭제하는 예제입니다
  </p>


const CreateA = () =>
  <a href = "javascript:createDIV()"
    onClick = {() => {
      createDIV()
    }
    }
  >DIV 생성</a>

const CreateP2 = () =>
  <p>
  </p>

export default Ex810multiComp;