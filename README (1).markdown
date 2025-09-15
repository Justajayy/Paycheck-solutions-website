# PayCheck Solutions Website

## Overview
This repository contains the source code for the **PayCheck Solutions Pvt. Ltd.** website, a modern and responsive web application designed to showcase innovative financial and digital services. The website highlights services such as payout solutions, bill payments, QR payments, and travel bookings, with a focus on user-friendly navigation and engaging animations.

## Features
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **Smooth Animations**: Utilizes Intersection Observer for slide-in animations on scroll.
- **Interactive Navbar**: Includes a sticky navbar with a hamburger menu for mobile devices.
- **Lottie Animation**: Integrated Lottie animation in the hero section for dynamic visuals.
- **Service Cards**: Displays upcoming services with hover effects and responsive grid layout.
- **Contact Form**: A simple form for user inquiries with a clean, modern design.

## Technologies Used
- **HTML5**: Structure of the website.
- **CSS3**: Styling with custom animations, gradients, and responsive design.
- **JavaScript**: Handles interactivity, smooth scrolling, and sidebar toggle.
- **Lottie**: For lightweight, scalable animations (animation.json).
- **Fonts**: Custom 'Axioma' font for consistent typography.
- **Intersection Observer API**: For triggering animations when elements are in view.

## File Structure
```
├── assets/
│   ├── animation.json       # Lottie animation file for the Hero section
│   ├── bill.png             # Icon for Bill Payment service
│   ├── logo.png             # Company logo
│   ├── office.jpg           # Image for the About section
│   ├── payout.png           # Image for Payout Service
│   ├── qr.png               # Icon for QR Payment service
│   ├── settlement.png       # Icon for Settlement service
│   ├── travel.png           # Icon for Travel service
├── about.css                # Styles for the About section
├── contact.css              # Styles for the Contact section
├── features.css             # Styles for the Features section
├── navbar-hero.css          # Styles for the Navbar and Hero section
├── index.html               # Main HTML file
├── script.js                # JavaScript for interactivity and animations
└── README.md                # This file
```

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/paycheck-solutions.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd paycheck-solutions
   ```

3. **Open the Website**:
   - Open `index.html` in a web browser to view the website locally.
   - Alternatively, use a local server (e.g., Live Server in VS Code) for better testing:
     ```bash
     npx http-server
     ```
     Then visit `http://localhost:8080`.

4. **Dependencies**:
   - Ensure an internet connection to load the Lottie library (`lottie-player.js`) via CDN.
   - No additional installations are required as all dependencies are included via CDNs.

## Usage
- **Navigation**: Use the sticky navbar or sidebar (on mobile) to navigate to Home, Services, About, and Contact sections.
- **Animations**: Scroll through the page to trigger slide-in animations for the Hero, Features, and About sections.
- **Contact Form**: Fill out the form in the Contact section to send inquiries (requires backend integration for functionality).
- **Responsive Design**: Test the website on different screen sizes to ensure responsiveness.

## Customization
- **Update Content**: Modify `index.html` to change text, images, or links.
- **Styling**: Adjust CSS files (`about.css`, `navbar-hero.css`, `features.css`, `contact.css`) to tweak colors, fonts, or layouts.
- **Lottie Animation**: Replace `assets/animation.json` with a new Lottie animation file and update the path in `script.js` if needed.
- **Fonts**: Replace the 'Axioma' font by updating the font-family in CSS files and ensuring the font is available.

## Notes
- The contact form is a frontend-only implementation. To make it functional, integrate a backend service (e.g., Node.js, PHP) to handle form submissions.
- Ensure the `assets/` folder contains all listed files directly (no subfolders) for the website to display correctly.
- The website uses a custom color palette (`#00687A`, `#0DD3BB`, `#F1F7F6`, etc.) for a cohesive look. Update these in the CSS files for a different theme.
- Assets include icons and images referenced in `index.html`. If any appear blank or black, verify the file contents match the expected visuals (e.g., line icons for services).

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any questions or feedback, reach out to:
- **Email**: payychecksolutions@gmail.com
- **Phone**: +91-99889 91533