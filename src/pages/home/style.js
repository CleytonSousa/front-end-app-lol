import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;

    h1{
        color: #fff;
        strong{
            color: #edc988;
        }
    }

    form {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    input {
      padding: 10px;
      border: none;
      border-radius: 4px;
      text-align: center;
      width: 60%;
    }
    label {
      color: #fff;
      text-align: center;
      background-color: #d7385e;
      padding: 10px;
      border-radius: 4px;
      width: 15%;
      margin: 0;
    }
    button {
      color: #fff;
      background-color: #d7385e;
      padding: 10px;
      border-radius: 4px;
      cursor: pointer;
      width: 20%;
    }
      
  }

  img{
      width: 40vw;
      max-width: 600px;
      margin-top: 10px;
  }

`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 700px;
    img{
        width: 10vw;
        max-width: 130px;
    }
    span{
        font-size: 48px;
        color: #edc988;
    }
`;