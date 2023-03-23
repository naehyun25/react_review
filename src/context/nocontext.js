import React from "react";
//useContext : prop을 전역으로 선언해주면 전달전달 안해도됨
const NoConText = () => {
  return (
    <div>
      <One content="건물" />
    </div>
  );
};
function One({ content }) {
  return (
    <div>
      <h3>첫째</h3>
      <Two content={content} />
    </div>
  );
}
function Two({ content }) {
  return (
    <div>
      <h3>2째</h3>
      <Three content={content} />
    </div>
  );
}
function Three({ content }) {
  return (
    <div>
      <h3>3째</h3>
      <Four content={content} />
    </div>
  );
}
function Four({ content }) {
  return (
    <div>
      <h3 content={content}>4째+{content}</h3>
    </div>
  );
}
export default NoConText;
