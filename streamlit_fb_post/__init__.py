import os
from typing import List, Optional, Union

import streamlit.components.v1 as components

_RELEASE = True
COMPONENT_NAME = "streamlit_fb_post"

if _RELEASE:  # use the build instead of development if release is true
    root_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(root_dir, "frontend/build")

    _streamlit_fb_post = components.declare_component(
        COMPONENT_NAME,
        path = build_dir
    )
else:
    _streamlit_fb_post = components.declare_component(
        COMPONENT_NAME,
        url = "http://localhost:3000"
    )

def post(text: str, 
         legend: str,
         link: str,
         picture: Optional[Union[List[str], str]] = None,
         key: Optional[str] = None):
    """Create a facebook post.

    Args:
        text (str): The text of the post.
        picture (Optional[Union[List[str], str]], optional): The images that we want to render. Defaults to None.
        key (Optional[str], optional): A unique key for the component. Defaults to None.
    """
    _streamlit_fb_post(text=text, picture=picture, legend=legend, link=link, key=key)


if not _RELEASE:
    post("Happy birthday to the main character in our family!", legend="25 feb", link="https://www.facebook.com/", picture="https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/274693439_10114340420219721_7126909141974919066_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Xyhe8TQuaewAX_cNldC&_nc_ht=scontent-cdg2-1.xx&oh=00_AT_0XWVbNu0lDxGUkJvRHzrNAdRYpVBbVEoHzg8-u51CtQ&oe=625D4579")
