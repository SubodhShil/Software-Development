import streamlit as st
import pandas as pd


# Application Title
st.write("# Mutli Modal AI Chat Application")


# Sidebar
api_method = st.sidebar.selectbox(
    '### API Methods',
    ('Freemium', 'Your Own API')
)

if api_method == 'Freemium':
    model = st.sidebar.selectbox(
        'Select Model',
        ('Gemini', 'Mistral', 'DeepSeek')
    )
    st.sidebar.write(f"Selected model: {model}")

else:
    api_input = st.sidebar.text_input(
        "Enter your API key", key="api_input", type="password")
