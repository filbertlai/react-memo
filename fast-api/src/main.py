from fastapi import FastAPI
from memory_storage import MemoryStorage
from starlette.middleware.cors import CORSMiddleware
from routers import router

import uvicorn


def get_application() -> FastAPI:
    """
    Basic FastAPI setting, all setting will be defined in here

    :return:
    The whole FastAPI object
    """
    application = FastAPI()

    application.include_router(router)

    application.add_middleware(
        CORSMiddleware,
        allow_origins="*",
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    return application


app = get_application()


@app.on_event("startup")
async def startup_event():
    """
    Initialize FASTAPI startup event, Postgre and Thread scheduler

    :return:
    """
    MemoryStorage.initialize(use_redis=True)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)