import streamlit as st
import requests
from streamlit_lottie import st_lottie

# --- PAGE CONFIG ---
st.set_page_config(
    page_title="Marouane Laamiri | Digital Portfolio",
    page_icon="👋",
    layout="wide",
)

# --- HELPER FUNCTION ---
# This function loads a Lottie animation from a URL
def load_lottieurl(url: str):
    r = requests.get(url)
    if r.status_code != 200:
        return None
    return r.json()

# --- 1. HEADER SECTION ---
with st.container():
    col1, col2 = st.columns([0.6, 0.4])

    with col1:
        st.title("Hi, I'm Marouane Laamiri 👋")
        st.subheader("A passionate developer building cool things.")
        st.write(
            "I'm learning to build web applications with Python. "
            "This portfolio is my first project using Streamlit!"
        )
        
        # --- SOCIALS ---
        st.header("🌐 Socials:")
        st.markdown(
            """
            [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marouane-laamiri-0197a317a/) 
            [![Medium](https://img.shields.io/badge/Medium-12100E?logo=medium&logoColor=white)](https://medium.com/@laamirimarouane8) 
            [![email](https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white)](mailto:laamirimarouane8@gmail.com)
            """
        )

    with col2:
        # --- LOTTIE ANIMATION ---
        # We load a Lottie animation from a URL. 
        # You can find more at https://lottiefiles.com/
        lottie_coding = load_lottieurl("https://assets5.lottiefiles.com/packages/lf20_fcfjwiyb.json")
        
        if lottie_coding:
            st_lottie(
                lottie_coding,
                speed=1,
                reverse=False,
                loop=True,
                quality="high", # "low", "medium", "high"
                height=300,
                width=None,
                key="coding_animation",
            )
        else:
            st.warning("Could not load Lottie animation.")


st.divider() # Adds a horizontal line

# --- 2. ABOUT ME SECTION ---
st.header("About Me")
st.write(
    """
    Hello! I am a developer with a passion for problem-solving and technology. 
    I am currently focused on expanding my skills in Python for web development and data science. 
    I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
    
    When I'm not coding, I enjoy [Your Hobby 1] and [Your Hobby 2].
    """
)

st.divider()

# --- 3. PROJECTS SECTION ---
st.header("My Projects")
st.write("Here are a few projects I've been working on. You can find more on my GitHub.")

# --- Project 1 ---
st.subheader("Project 1: My Portfolio Website")
st.write(
    "The very website you are on right now! Built using Streamlit to "
    "showcase my skills and projects in a reactive and responsive way."
)
st.write("[View on GitHub](https://github.com/Marouanelaamiri/my-portfolio)") #<-- Update this link

# --- Project 2 ---
st.subheader("Project 2: [Your Project Name]")
st.write(
    "A short description of your project. What was the goal? What technologies did you use?"
)
st.write("[View on GitHub](https://github.com/Marouanelaamiri/YOUR-PROJECT-REPO)")

# --- Project 3 ---
st.subheader("Project 3: [Your Project Name]")
st.write(
    "A short description of your project. What was the goal? What technologies did you use?"
)
st.write("[View on GitHub](https://github.com/Marouanelaamiri/YOUR-PROJECT-REPO)")

st.divider()

# --- 4. CONTACT ME SECTION ---
st.header("Get In Touch!")
st.write("Have a question or want to work together? Send me a message!")

# We use st.form to create a form that batches user inputs
with st.form(key="contact_form"):
    # Input fields for the form
    name = st.text_input("Your Name")
    email = st.text_input("Your Email")
    message = st.text_area("Your Message")
    
    # Submit button
    # The code inside the `if` block will only run when the button is clicked
    submit_button = st.form_submit_button(label="Send Message")
    
    if submit_button:
        # This is where you would add code to *do* something with the form.
        # For now, we'll just display a success message.
        
        # A more advanced version could use `smtplib` to send an email
        # or `st.secrets` to write to a Google Sheet.
        
        st.success(f"Hi {name}, your message was sent successfully! (This is a demo)")
        st.info(f"Email to: {email} \n\nMessage: \n\n{message}")