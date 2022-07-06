import React from 'react';
import Memo from "../components/Memo";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadMemo } from '../actions/memoAction';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';
import { Button } from 'antd';

const MemoPage = () => {
    const [cookies, setCookie] = useCookies(['username']);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => { 
        if (cookies.username !== 'filbert'){
            navigate('/');
        }
        else{
            dispatch(loadMemo());
        }
    });

    const logout = () => {
        setCookie('username', '');
    };

    return (
        <>
            <Button type="new" style={{ borderRadius: "20px", float: 'right'}} onClick={() => logout()}>Logout</Button>
            <br/>
            <br/>
            <Memo/>
        </>
    );
};

export default MemoPage;