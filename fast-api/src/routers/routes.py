from fastapi import APIRouter
from .memo import router as memo_router

router = APIRouter()
# To add api routes to api, take the following example
# api.include_router(package.api, prefix="/prefix")
router.include_router(memo_router, prefix="")
