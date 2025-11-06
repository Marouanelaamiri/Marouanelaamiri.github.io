import streamlit as st

# --- PAGE CONFIG ---
# This must be the first Streamlit command in your script
st.set_page_config(
    page_title="Marouane Laamiri | Digital Portfolio",
    page_icon="👋", # You can use an emoji as an icon
    layout="wide", # "wide" or "centered"
    initial_sidebar_state="auto", # "auto", "expanded", "collapsed"
)

# --- MAIN PAGE CONTENT ---

# --- 1. HEADER SECTION ---
# We'll use columns to create a layout with text and an image
col1, col2 = st.columns([0.6, 0.4]) # Adjust column ratios as needed

with col1:
    st.title("Hi, I'm Marouane Laamiri 👋")
    st.subheader("A passionate developer building cool things.")
    st.write(
        "I'm learning to build web applications with Python. "
        "This portfolio is my first project using Streamlit!"
    )
    # --- Social Links ---
    # Using markdown to create links.
    # You can add more links here (e.g., Twitter, etc.)
    st.write("Find me on:")
    st.markdown(
        """
        * [**GitHub**](https://github.com/Marouanelaamiri)
        * [**LinkedIn**](https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/)
        """
    )
    # Optional: A button to download a resume
    # with open("assets/my_resume.pdf", "rb") as file:
    #     st.download_button(
    #         label="Download My Resume",
    #         data=file,
    #         file_name="Marouane_Laamiri_Resume.pdf",
    #         mime="application/pdf"
    #     )

with col2:
    # --- Profile Image ---
    # You need to add an image file to your project folder
    # For this example, create an 'assets' folder and put 'profile.png' inside it
    # st.image("assets/profile.png", width=300) 
    st.write("*(Here you can add a profile picture using `st.image()`)_")
    st.info("💡 **Tip:** Create an `assets` folder for your images and resume.")


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
# st.image("assets/project_2_image.png") # Uncomment to add a project image
st.write("[View on GitHub](https://github.com/Marouanelaamiri/YOUR-PROJECT-REPO)")

# --- Project 3 ---
st.subheader("Project 3: [Your Project Name]")
st.write(
    "A short description of your project. What was the goal? What technologies did you use?"
)
# st.image("assets/project_3_image.png") # Uncomment to add a project image
st.write("[View on GitHub](https://github.com/Marouanelaamiri/YOUR-PROJECT-REPO)")