import { Button, Input, List } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { addMemo, deleteMemo, loadMemo } from '../actions/memoAction';


const { TextArea } = Input;

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

const Memo = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.memo.value);

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => { 
    });
    
    const refresh_all_memo = () => {
        sleep(2000);
        dispatch(loadMemo());
        sleep(2000);
        dispatch(loadMemo());
    }

    const update_memo = (notify) => {
        if (title === ''){
            alert('Please create a title to save the memo!');
            return;
        }
        console.log("Adding memo in Memo.js, title: " + title);
        dispatch(addMemo(title, content, notify));
        refresh_all_memo();
    };

    const delete_memo = () => {
        if (title === '') {
            alert("No memo created!");
        }
        else {
            update_memo(false);
            if (window.confirm("Are you sure to delete < " + title + " > ?")) {
                console.log("Deleting memo in Memo.js, title: " + title);
                dispatch(deleteMemo(title));
                setTitle("");
                setContent("");
                refresh_all_memo();
            }
        }
    }

    const remove_input = () => {
        if (title !== '' || content !== ''){
            if (window.confirm("Are you sure to discard all unsaved changes?")) {
                setTitle("");
                setContent("");
            }
        }
    }

    const load_memo = (t, c) => {
        setTitle(t);
        setContent(c);
    }


    return (
        <>
            <div style={{ background: "#08979c", borderRadius: "20px"}}><h1>Memo</h1></div>
            <br />
            <Input placeholder="Memo Title... (Cannot be duplicated)" value={title} style={{ width: 400, borderRadius: "20px", boxShadow: "2px 5px #888888"}} onChange={event => setTitle(event.target.value)} /> <span><Button type="update" style={{ background: "#69c0ff", borderRadius: "20px", boxShadow: "2px 5px #888888"}} onClick={() => update_memo(true)}>Update</Button> <Button type="delete" style={{ background: "#ff4d4f", borderRadius: "20px", boxShadow: "2px 5px #888888" }} onClick={() => delete_memo()}>Delete</Button> <Button type="new" style={{ background: "#73d13d", borderRadius: "20px", boxShadow: "2px 5px #888888" }} onClick={() => remove_input()}>New Memo</Button></span>
            <br />
            <br />
            <TextArea value={content} style={{ background: "#ffffb8", borderRadius: "20px", boxShadow: "2px 5px #888888" }} rows={15} placeholder="Write your note here..." onChange={event => setContent(event.target.value)} />
            <br />
            <br />
            <br />
            <br />
            <div style={{ background: "#08979c", borderRadius: "20px"}}><h1>All Memo ({(data?.payload?.length)})</h1></div>
            <br />
            <List
                grid={{
                    column: 4,
                }}
                dataSource={data?.payload}
                renderItem={(item) => (
                    <List.Item >
                        <Button style={{ minWidth: "150px", borderRadius: "20px", boxShadow: "2px 5px #888888" }} onClick={() => load_memo(item.title, item.content)}>{item?.title}</Button>
                    </List.Item>
                )}
            />
        </>
    );
};

export default Memo;