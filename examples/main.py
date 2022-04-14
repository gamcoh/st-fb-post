import streamlit as st
from streamlit_fb_post import post

st.set_page_config(
    page_title="Streamlit FB Post - Demo",
    page_icon="📱",
)

post("Happy birthday to the main character in our family!", legend="25 feb", link="https://www.facebook.com/", picture="https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/274693439_10114340420219721_7126909141974919066_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Xyhe8TQuaewAX_cNldC&_nc_ht=scontent-cdg2-1.xx&oh=00_AT_0XWVbNu0lDxGUkJvRHzrNAdRYpVBbVEoHzg8-u51CtQ&oe=625D4579")
