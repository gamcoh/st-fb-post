import streamlit as st
from streamlit_fb_post import post

st.set_page_config(
    page_title="Streamlit FB Post - Demo",
    page_icon="📱",
)

post("Happy birthday to the main character in our family!", legend="25 feb", link="https://www.facebook.com/", picture="https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/278578494_5384646104881436_4922253203700321374_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=0debeb&_nc_ohc=BC56DTddwCsAX-37NyT&_nc_ht=scontent-cdg2-1.xx&oh=00_AT-jvreQ3HnnuWI-Igk7I4BD3sBuFlBWoaI2yoGqonmSaw&oe=626F1A6B")
