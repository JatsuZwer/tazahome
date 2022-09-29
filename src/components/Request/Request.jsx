import React, { useState } from "react";
import s from "./Request.css";
import requestBg from "../../assets/img/request_bg.png";
import request from "../../assets/img/Request.png";
import styled from "styled-components";
import { toast } from "react-toastify";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const Request = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  //   const [loading , setLoading] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      name,
      phone,
      comment,
    };

    const messageRef = doc(collection(db, "messages"));

    setDoc(messageRef, dataToSend).then((res) => {
      // setLoading(false);
      // setLoading(false);
      toast.success("successfully sended ✅", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setName("");
      setPhone("");
      setComment("");
      // setLoading(false);
    });
  };

  return (
    <Wrapper id="request">
      <div className="request__bg">
        <img src={requestBg} alt="" />
      </div>
      <div className="request">
        <div className="request__body">
          <div className="request__title">Обратный звонок</div>
          <div className="request__text">
            Оставьте вашу заявку и мы с вами свяжемся за короткое время
          </div>
          <div className="request_inner">
            <form action="" onSubmit={handleSubmit}>
              <input
                required
                type="text"
                placeholder="Ваше имя"
                className="item-request__name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                required
                type="number"
                placeholder="Ваш номер"
                className="item-request__number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <textarea
                type="text"
                placeholder="Ваше сообщение"
                className="item-request__message"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button type="submit" className="request__button">
                Отправить
              </button>
            </form>
            <div className="request__image">
              <img src={request} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Request;

const Wrapper = styled.div`
  position: relative;
  margin-top: 160px;
  padding: 150px 40px 160px 180px;
  @media (max-width: 768px) {
    padding: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 70%;
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 50px;
      padding: 0px 0px 0px 30px;
    }
  }
  .request__bg{
    position: absolute;
    left: 0;
    z-index: -1;
    padding: 0px 0px 58% 0px;
	  overflow: hidden;
    img{
      width: 100%;
	  height: 100%;
	  object-fit: cover;
    }
  }
  .request_inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .request__image {
	  overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .request__title {
    font-family: "Sensei";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
    color: #203e86;
    margin-bottom: 30px;
    text-align: center;
  }
  .request__text {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #4f4f4f;
    margin-bottom: 112px;
    text-align: center;
    @media (max-width: 768px) {
      margin-bottom: 35px;
      font-size: 18px;
    }
  }

  .request__button {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #ffffff;
    background: #96c22b;
    border-radius: 20px;
    padding: 14px 50px;
    display: flex;
    justify-content: flex-end;
    width: 245px;
    margin-left: 230px;
    @media (max-width: 768px) {
      margin-left: 0px;
    }
  }

  input,
  textarea {
    border: 2.18598px solid #96c22b;
    border-radius: 21.2992px;
    padding: 25px;
    margin-bottom: 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 21.2992px;
    line-height: 25px;
    color: #828282;
  }
  textarea {
    height: 265px;
    resize: none;
  }
`;
