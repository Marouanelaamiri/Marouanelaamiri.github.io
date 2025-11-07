import streamlit as st
from streamlit_option_menu import option_menu 

# --- 1. PAGE CONFIGURATION ---
st.set_page_config(
    page_title="Marouane Laamiri | My Portfolio",
    page_icon=":computer:",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# --- 2. HIDE STREAMLIT STYLE ---
hide_streamlit_style = """
            <style>
            #MainMenu {visibility: hidden;}
            footer {visibility: hidden;}
            header {visibility: hidden;}
            </style>
            """
st.markdown(hide_streamlit_style, unsafe_allow_html=True)

# --- 3. CUSTOM CSS FOR FIGMA DESIGN ---
def set_custom_css():
    st.markdown(
        """
        <style>
        /* Import Google Font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        
        /* Base styles */
        html, body, [class*="st-"], .st-emotion-cache-1jicfl2 {
            font-family: 'Inter', sans-serif;
            color: #FFFFFF; 
            background-color: #0c001f; /* Dark Purple Background */
        }
        
        /* Main content area */
        [data-testid="stBlockContainer"] {
            background-color: transparent;
            padding: 2rem 5rem; /* Add horizontal padding */
            margin: 0;
        }

        /* Top navigation bar */
        [data-testid="stHorizontalBlock"] {
            background-color: #1a013d; /* Nav bar background */
            padding: 1rem 0;
            position: fixed; 
            top: 0;
            left: 0;
            width: 100%;
            z-index: 999;
        }
        
        /* Text styles */
        h1 {
            font-size: 3.0rem;
            font-weight: 700;
            color: #FFFFFF;
        }
        h2 {
            color: #FFFFFF; /* White */
            font-size: 2.25rem;
            font-weight: 600;
        }
        h3 {
            color: #b0a8d1; /* Lighter purple */
            font-size: 1.75rem;
            font-weight: 600;
        }
        
        /* Avatar image */
        .stImage img {
            border-radius: 50%; 
            border: 4px solid #6c42d3; 
            box-shadow: 0 0 35px #6c42d3; /* Stronger glow */
        }
        
        /* Divider */
        .stDivider {
            background-color: #6c42d3;
            height: 2px;
            opacity: 0.3;
        }
        
        /* --- Work Experience Grid --- */
        .work-grid {
            display: grid;
            grid-template-columns: 1fr 1fr; /* 2 columns */
            gap: 1.5rem;
            margin-top: 1rem;
        }
        
        .work-item {
            background: linear-gradient(145deg, rgba(42, 10, 88, 0.7), rgba(26, 1, 61, 0.7));
            padding: 1.5rem 2rem;
            border-radius: 15px;
            border: 1px solid rgba(108, 66, 211, 0.5);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2), 0 0 20px rgba(108, 66, 211, 0.3);
            transition: all 0.3s ease;
        }
        
        .work-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 30px rgba(108, 66, 211, 0.5);
            border: 1px solid rgba(108, 66, 211, 0.8);
        }
        
        .work-item h4 {
            font-size: 1.25rem;
            font-weight: 600;
            color: #FFFFFF;
            margin-bottom: 0.5rem;
        }
        
        .work-item a {
            font-size: 0.9rem;
            font-weight: 500;
            color: #b0a8d1;
            text-decoration: none;
            border: 1px solid #b0a8d1;
            border-radius: 20px;
            padding: 0.3rem 0.8rem;
            transition: all 0.3s ease;
        }
        
        .work-item a:hover {
            background-color: #6c42d3;
            color: #FFFFFF;
            border-color: #6c42d3;
        }
        
        /* --- Project Section Layout --- */
        .project-image img {
            border-radius: 10px;
            border: 1px solid #6c42d3;
            box-shadow: 0 0 25px rgba(108, 66, 211, 0.4);
        }

        </style>
        """,
        unsafe_allow_html=True
    )

# Call the function to apply CSS
set_custom_css()

# --- 4. NAVIGATION BAR ---
# This will now work
selected_page = option_menu(
    menu_title=None, 
    options=["Home", "About", "Projects"],
    icons=["house-fill", "person-fill", "code-slash"],
    menu_icon="cast", 
    default_index=0, 
    orientation="horizontal",
    styles={
        "container": {"padding": "0!important", "background-color": "transparent"},
        "icon": {"color": "#b0a8d1", "font-size": "1.2rem"}, 
        "nav-link": {
            "font-size": "1.1rem",
            "text-align": "center",
            "margin":"0px",
            "--hover-color": "#6c42d3",
            "color": "#FFFFFF",
        },
        "nav-link-selected": {"background-color": "#6c42d3"},
    }
)

# --- 5. PAGE CONTENT ---

st.markdown("<div style='padding-top: 5rem;'></div>", unsafe_allow_html=True)

# --- HOME PAGE ---
if selected_page == "Home":
    
    # --- HEADER SECTION ---
    with st.container():
        col1, col2 = st.columns([0.3, 0.7]) 
        
        with col1:
            # --- AVATAR IMAGE ---
            # You should replace this with your GitHub raw URL
            st.image("https://raw.githubusercontent.com/Marouanelaamiri/my-portfolio/main/avatar.png", width=230)        
            
        with col2:
            # --- HEADER TEXT ---
            st.subheader("Hi, I'm Marouane Laamiri 👋")
            st.markdown(
                '<h1 style="color: #FFFFFF;">A 42 Network Student | Aspiring AI developer</h1>', 
                unsafe_allow_html=True
            )
            st.write(
                "I'm learning to build web applications with Python, and other programming languages "
                "while integrating AI concepts into my projects."
            )
    
    # --- SOCIALS ---
    st.write("---") 
    st.header("🌐 Socials:")
    st.markdown(
        """
        [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marouane-laamiri-0197a317a/) 
        [![Medium](https://img.shields.io/badge/Medium-12100E?logo=medium&logoColor=white)](https://medium.com/@laamirimarouane8) 
        [![email](https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white)](mailto:laamirimarouane8@gmail.com)
        """
    )

    st.divider()

    # --- WORK EXPERIENCE SECTION ---
    st.header("Work Experience")
    st.markdown(
        """
        <div class="work-grid">
            <div class="work-item">
                <h4>CIB on the Mobile</h4>
                <a href="#" target="_blank">Learn more</a>
            </div>
            <div class="work-item">
                <h4>CIB on the Mobile</h4>
                <a href="#" target="_blank">Learn more</a>
            </div>
            <div class-item">
                <h4>CIB on the Mobile</h4>
                <a href="#" target="_blank">Learn more</a>
            </div>
            <div class="work-item">
                <h4>CIB on the Mobile</h4>
                <a href="#" target="_blank">Learn more</a>
            </div>
        </div>
        """,
        unsafe_allow_html=True
    )
    
    st.divider()

    # --- GIF ANIMATION (Replaces Lottie) ---
    st.header("🚀") 
    col1, col_mid, col2 = st.columns([0.2, 0.6, 0.2])
    with col_mid:
        # --- FIXED: I put a real, working GIF URL here ---
        # You should replace this with your own GIF's raw URL
        st.image("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Y1b2RkNHlweGl6eGJlZzNmbjBqZ3E3eGlxZGFqc3JqZHJzNWc0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L05Ho0UXxyB6NcmdXJ/giphy.gif")
    
    st.divider()
    
    # --- CONTACT FORM ---
    st.header("Get In Touch!")
    st.write("Have a question or want to work together? Send me a message!")

    with st.form(key="contact_form"):
        name = st.text_input("Your Name")
        email = st.text_input("Your Email")
        message = st.text_area("Your Message")
        submit_button = st.form_submit_button(label="Send Message")
        
        if submit_button:
            st.success(f"Hi {name}, your message was sent successfully! (This is a demo)")
            st.info(f"Email to: {email} \n\nMessage: \n\n{message}")

# --- ABOUT PAGE ---
elif selected_page == "About":
    
    st.header("About Me")
    st.write(
        """
        A computer science professional with acquired experience in computer hardware and OS maintenance, I have developed a strong background in computers and server setups as an IT technician within various local associations, and schools.
        Furthermore, I am a computer technician who is dedicated to continually improving my skills and growing in the programming field. During my university studies in Ukraine, I developed a keen interest in programming and cloud computing, and I have pursued numerous training and certification programs, including AWS Certified Cloud Computing.
        I would describe myself as a problem solver who is agile and results-oriented. I believe that my skills make me a valuable asset to the IT industry.
        
        When I'm not coding, Im asleep or playing video games.
        """
    )

# --- PROJECTS PAGE ---
elif selected_page == "Projects":

    st.header("My Projects")
    st.write("Here are a few projects I've been working on. You can find more on my GitHub.")
    st.divider()

    # --- Project 1 (Figma Layout) ---
    with st.container():
        col_text, col_image = st.columns([0.6, 0.4])
        
        with col_text:
            st.subheader("Cub3D Fake 3D Game")
            st.write(
                """
                Cub3D is a simple 3D game engine project inspired by the classic game Wolfenstein 3D. 
                It is developed using the C programming language and utilizes the MiniLibX graphics library for rendering. 
                The project focuses on implementing raycasting techniques to create a 3D environment from a 2D map, allowing players to navigate through a maze-like structure. 
                Cub3D showcases fundamental concepts of computer graphics, game development, and low-level programming.
                """
            )
            st.write("[View on GitHub](https://github.com/Marouanelaamiri/cub3D)")
        
        with col_image:
            # --- FIXED: I put a real, working image URL here ---
            # You should replace this with your Cub3D screenshot raw URL
            st.markdown(
                """
                <div class="project-image">
                    <img src="https://assets.weforum.org/project/image/M602p-o2V2j-x3n2p4s2T8HqFf0S_8a4F-v3Lq-sSUk.jpg" alt="Cub3D Project Screenshot" style="width:100%;">
                </div>
                """,
                unsafe_allow_html=True
            )

    st.divider()