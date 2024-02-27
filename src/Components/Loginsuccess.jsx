import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../Components/Loginsuccess.css'


const Loginsuccess = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }



    return (
        <div>
            <h2 style={{
                textAlign: 'center', height: '100vh', width: '100%',
                backgroundColor: 'white'
            }}>Signin Successfully! 😊
            <div>

            <Button variant="primary" onClick={handleClick}
                className='btnhome'><b>Home</b>
            </Button>
            </div>
            </h2>


        </div>


    );
};

export default Loginsuccess;