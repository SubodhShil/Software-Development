from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


@app.get('/')
def index():
    return {'name': 'Subodh'}


@app.get('/next')
def nextPage():
    return [{'personalData': {'age': 23}}, {'professionalData': {'CGPA': 3.22}}]


@app.get('/blog')
def blog(page: int = 2, published: bool = True, sort: str | None = 'nothing'):
    if page <= 100 and page > 0:
        return [{'blog_page': page, 'is_published': published, 'sort_page': sort}]
    elif page <= 0:
        return {'invalid blog page'}
    else:
        published = False
        return [{'blog_page': page, 'is_published': published, 'sort_page': sort}]


@app.get('/blog/unpublished')
def unpublishedBlog():
    return {'data': 'all unpublished blog list'}


@app.get('/blog/{id}')
def show(id: int):
    return {'data': id}


@app.get('/blog/{id}/comment')
def comments(id: int):
    return {f'comment{id}': id}


@app.get('/settings')
def settings():
    return {'data': 'something'}


@app.get('/settings/{option}')
def settingsOptions(option: str):
    if option == 'privacy' or option == 'log out':
        return {'option': option}
    else:
        return {'option': 'invalid'}


class Blog(BaseModel):
    title: str
    content: str
    published: bool | None = None


@app.post('/blog')
def craete_blog(request: Blog):
    return {'blog_title': request.title, 'blog_content': request.content}


