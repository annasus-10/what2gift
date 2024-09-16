# What2Gift - Gift Suggestion Website

**Authors**  
- Thet Su Sann (6430183) - Full Stack
- Pyae Phyo Han (6430046)  
- Pongsathon Laoaree (6430135)  

**Institution:** Vincent Mary School of Engineering, Assumption University of Thailand  
**Course:** CE4221 Network Application and Technology  
**Semester:** 1/2024

## Project Overview

**What2Gift** is a web application designed to help users select the perfect gift based on the recipient’s age, gender, relationship, occasion, and hobbies. It integrates client-side technologies for UI/UX, server-side logic, and a database for personalized gift suggestions.

### Key Features
- **Interactive User Interface**: Users are guided through several questions to refine their gift suggestion.
- **LocalStorage**: User choices are stored on the client side, preventing data loss between pages.
- **AJAX Integration**: Dynamic content is fetched from the server without full-page reloads.
- **Responsive Design**: Ensures usability on both desktop and mobile devices.

## Project Objectives

- Build an interactive web application using **HTML**, **CSS**, **JavaScript**, and **PHP**.
- Utilize **localStorage** to store user data across pages without server-side sessions.
- Implement **AJAX** for client-server communication to dynamically fetch gift suggestions.
- Include basic user authentication (login/signup).

## Application Structure

### Pages and Flow
- **Landing Page (index.html)**: Users are greeted with a login screen. Authenticated users are welcomed by name.
- **Selection Pages**: Users proceed through a series of selection pages:
  - Age (age.html)
  - Gender (gender.html)
  - Relationship (relationship.html)
  - Occasion (occasion.html)
  - Hobbies (hobbies.html)
  - All selections are stored in the browser’s localStorage.
- **Review Page (review.html)**: Users can review their selections before confirming.
- **Result Page (result.html)**: Presents the final gift suggestion fetched via AJAX.

### Login & Signup
- **login.php**: Handles user authentication.
- **signup.php**: Manages user registration.

## Technical Implementation

### Frontend
- **HTML**: Semantic HTML5 structure with sections for header, content, and footer.
- **CSS**: Styling is managed by `styles.css` and `styles_review.css`, employing responsive design via media queries.
- **JavaScript (script.js)**: Manages logic for storing user selections in localStorage and sending data to the server via AJAX.

### Backend
- **PHP**:
  - `login.php` & `signup.php`: Handle user authentication.
  - `fetch_results.php`: Processes user input and returns a gift suggestion in JSON format.

## How to Run the Project

1. Clone the repository.
   ```bash
   git clone https://github.com/yourusername/What2Gift.git
   ```
2. Ensure you have a local server environment like **XAMPP** or **MAMP** to run PHP files.
3. Place the project in the server's document root (e.g., `htdocs` for XAMPP).
4. Start the server and navigate to `localhost/What2Gift/index.html` in your browser.

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (AJAX, Fetch API)
- **Backend**: PHP
- **Database**: MySQL (for user authentication)
- **Other**: LocalStorage for client-side data persistence

## Future Improvements

- Integrate a more advanced recommendation algorithm.
- Add a wider variety of gift suggestions.
- Implement OAuth for third-party authentication (e.g., Google login).
