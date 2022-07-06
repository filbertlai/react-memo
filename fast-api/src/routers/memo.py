from fastapi import APIRouter
from services import MemoService
from pydantic import BaseModel

router = APIRouter()


class Memo(BaseModel):
    title: str
    content: str


@router.post("/update")
async def update_memo(memo: Memo):
    await MemoService.update_memo(memo.title, memo.content)
    return {
        "payload": True
    }


@router.get("/get-all-memo")
async def get_all_memo():
    data = await MemoService.get_all_keys()
    return {
        "payload": data
    }


@router.post("/delete-memo-by-topic")
async def delete_memo_by_topic(memo: Memo):
    await MemoService.delete_memo_by_title(memo.title)
    return {
        "payload": True
    }
