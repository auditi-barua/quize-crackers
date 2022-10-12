import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Single from './Single/Single';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = () => {
    const { data } = useLoaderData();
    console.log(data);
    const { questions } = data;

    const notifyCurrect = () => toast.success("Currect Answer");
    const notifyWrong = () => toast.error("Wrong Aanswer");
    const notifyAnswer = (ans)=>{toast.info("Right Ans is " + ans)}

    const handle_answer = (option, currectAnswer) => {
        if(option === currectAnswer){
            notifyCurrect()
        }else{
            notifyWrong()
        }
    }

    return (
        <div >
            <h2>This is Question</h2>
            <div className="container">
                {
                    questions.map(single => <Single handle_answer={handle_answer} notifyAnswer={notifyAnswer} key={single.id} single={single}></Single>)
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Questions;