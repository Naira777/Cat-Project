import styled from "styled-components";


export const AppSideBar = styled.div`

  background: #8AC3B2;
  width: 300px;
  float: left;
  border-radius: 10px;
  opacity: 0.8;
  margin-top: 200px;
  margin-left: 2px;
  height: 250px;
  @media (max-width: 768px) {
  margin: auto;
    float: none;
  }
`;
export const AppContent = styled.div`

  background: #B1C5C0;
  width: 1200px;
  display: wrap;
  float: right;
border-radius: 10px;
margin-left: 0;
  @media (max-width: 768px) {

  width: 500px;
  display: block;
  padding-left: 30px;
  float: none;


  }


`;

export const Button = styled.div`

  background: #484E4C;
  width: 280px;
  height: 35px;
  border-radius: 10px;
  margin: 0 auto;
  text-align: center;
  padding-top: 5px;
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 20px;

  
`;
