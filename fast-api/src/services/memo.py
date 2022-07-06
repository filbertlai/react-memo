from memory_storage import MemoryStorage
import redis


def get_all_keys():
    """
    This function gets all keys in redis
    :return:
    """
    r = redis.StrictRedis(host='localhost', port=6379, db=0)
    all_keys_in_byte = r.keys('*')

    # Covert from byte to string
    all_keys_in_string = []
    for key_in_byte in all_keys_in_byte:
        key_in_string = key_in_byte.decode("utf-8")
        key_in_string = key_in_string.replace("filbert:", "")
        all_keys_in_string.append(key_in_string)
    print("\n[ All keys: ]")
    print(all_keys_in_string)
    return all_keys_in_string


class MemoService:
    @staticmethod
    async def update_memo(title: str, content: str):
        print("\n[ Adding memo ]")
        print("Title:", title)
        print("Content:", content)
        MemoryStorage.update(title, value=content)
        return

    @staticmethod
    async def get_all_keys():
        result = []
        keys = get_all_keys()
        for key in keys:
            result.append({
                'title': key,
                'content': MemoryStorage.fetch_by_key(key)
            })
        return result

    @staticmethod
    async def delete_memo_by_title(title: str):
        print("\n[ Deleting memo ]")
        print("Title:", title)
        MemoryStorage.remove(title)
