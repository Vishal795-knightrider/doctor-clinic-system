# Online Doctor Appointment System

A web-based clinic management and doctor appointment scheduling system developed for MediCare Clinic located at Kafiyabad, Moradabad, Uttar Pradesh, India.

---

## 1. Project Title

**Online Doctor Appointment System**  
(MediCare Clinic Management Portal)

---

## 2. Team Members

* Vishal Kashyap
* Vishal Kumar
* Shubham Mourya

---

## 3. Problem Background

In many semi-urban and local communities, such as Moradabad, healthcare clinics continue to rely heavily on traditional, manual workflows for appointment booking and patient record maintenance. Currently, patients must either physically visit the clinic to obtain a token or make multiple phone calls during clinic operating hours. 

This conventional system presents several ongoing challenges:
* **Prolonged Waiting Times:** Patients often endure long waiting periods at the clinic without knowing the exact schedule or queue status.
* **Inefficient Phone Bookings:** Receptionists face continuous phone interruptions while simultaneously attending to in-person patients.
* **Scheduling Collisions and Misplacement:** Manual pen-and-paper registers frequently lead to double bookings, illegible handwriting, or lost appointment records.
* **Limited Information Access:** Patients lack a reliable, centralized platform to check doctor consultation hours, clinic address, available medical services, and emergency contact details outside regular operational hours.

---

## 4. Problem Statement

Small and medium-sized outpatient clinics lack a streamlined, accessible, and automated platform to coordinate appointments between patients and healthcare providers. The manual scheduling process causes clinic congestion, administrative overhead for clinic staff, and frustration for patients. 

This project aims to deliver a centralized, responsive web platform where patients can browse clinic services and schedule appointment requests online, while the doctor and clinic staff can systematically review, approve, and manage appointments and patient records through a dedicated administrative dashboard.

---

## 5. Impact

### Impact on Patients
* Eliminates unnecessary travel to the clinic merely to book a token.
* Reduces idle waiting time inside crowded clinic waiting rooms.
* Provides 24/7 access to accurate doctor profiles, clinic timings, and service information.
* Lowers anxiety by providing structured appointment submissions and clear communication channels.

### Impact on the Doctor
* Provides a structured daily schedule with advance visibility into patient visits and medical concerns.
* Minimizes clinic overcrowding, allowing more focused time per consultation.
* Replaces disorganized physical logs with a centralized digital record of patient history and visit counts.

### Impact on Clinic Staff
* Drastically decreases incoming repetitive phone inquiries regarding timings and fees.
* Simplifies schedule organization through digital status management (Pending, Approved, Cancelled).
* Reduces paperwork errors and prevents double booking of appointment slots.

---

## 6. Proposed Software Solution

The proposed Online Doctor Appointment System provides a bilingual-ready, responsive web interface catering to two primary user groups: patients and clinic administrators (doctor/staff).

* **Patient Portal:** Patients can access clinic information, review doctor qualifications and specializations, inspect operating hours, read patient reviews, and submit an appointment request by selecting a preferred date, time slot, and health concern.
* **Admin Dashboard:** Clinic staff and the doctor can log into a password-protected dashboard to monitor daily appointment volumes, filter appointments by status, approve or cancel requests, and maintain patient contact and visit records.

---

## 7. Technical Feasibility

The project is technically feasible using established, modern web technologies and open-source frameworks.

* **Frontend:** Built with Next.js (App Router), React.js, and Tailwind CSS. This combination offers high rendering performance, modular component architecture, and full mobile responsiveness across smartphones, tablets, and desktop browsers.
* **Planned Backend & Database:** A lightweight REST API architecture using Node.js and Express.js, coupled with MongoDB (NoSQL) for document storage, provides the flexibility needed to scale appointment records and patient profiles without complex infrastructure costs.
* **Security & Authentication:** Industry-standard JSON Web Tokens (JWT) and encrypted credential hashing (bcrypt) are planned for production deployment to safeguard admin access and patient data.
* **Development & Collaboration:** Version control managed via Git and hosted on GitHub ensures structured team collaboration and continuous deployment readiness.

*Note: As detailed in Section 12, the project currently operates on a Next.js frontend with local state handling, while the Node.js/Express/MongoDB backend architecture is planned for subsequent integration.*

---

## 8. Operational Feasibility

The system is designed with an emphasis on simplicity and minimal digital literacy requirements:
* **For Patients:** The user interface features clear navigation, high-contrast typography, and intuitive form inputs. Booking an appointment requires only entering basic contact details and selecting a date and time slot, making it easily usable by individuals of varying technical familiarity.
* **For Doctor and Clinic Staff:** The administrative dashboard utilizes standard visual indicators (color-coded status badges, search bars, and one-click action buttons). No specialized technical training is required for clinic personnel to manage daily operations.
* **Infrastructure Requirements:** Users require only a standard web browser (Chrome, Firefox, Safari, Edge) on a smartphone or computer connected to the internet.

---

## 9. Project Scope

### 9.1 In-Scope
* **Doctor Information:** Detailed profile of Dr. Vishal Kashyap including qualifications, experience, and specialization.
* **Clinic Services:** Comprehensive listing of available healthcare services (General Checkup, Dermatology, Child Care, Diabetes Management, Cardiac Care, Emergency Care).
* **Clinic Timings:** Daily schedule covering weekday, Saturday, and Sunday consultation shifts.
* **Clinic Location and Contact Details:** Complete physical address in Moradabad, contact numbers, and inquiry form.
* **Online Appointment Booking:** Interactive form with date picker, slot selector, patient details, and validation.
* **Patient Record Viewing:** Directory of registered patients with contact details, visit history, and diagnosed conditions.
* **Admin Dashboard:** Administrative portal with appointment metrics, status toggles (Approve, Cancel, Delete), and search filters.
* **Authentication Interface:** Secure administrative login interface.
* **Responsive Layout:** Adaptive design optimized for desktop, tablet, and mobile displays.

### 9.2 Out-of-Scope
* Real-time AI-based medical diagnosis or automated symptom triage.
* In-app real-time video or audio consultations.
* Online pharmacy, prescription fulfillment, and medicine delivery.
* Health insurance verification and automated claim processing.
* Real-time GPS ambulance tracking and dispatch.
* Enterprise hospital management (inpatient bed tracking, operation theater scheduling, blood bank).
* Government health portal or Ayushman Bharat Digital Mission (ABDM) integration.

---

## 10. Expected Outcome

* **Digital Transformation of Local Clinic:** Transition of MediCare Clinic from paper-based scheduling to an efficient digital portal.
* **Reduced Patient Wait Times:** Pre-scheduled time slots minimize clinic lobby congestion by an estimated 40–50%.
* **Improved Administrative Productivity:** Clinic staff can process appointment requests in seconds without manual logbooks.
* **Higher Patient Satisfaction:** Transparent access to clinic timings, services, and doctor background improves trust and accessibility for residents in Moradabad.

---

## 11. Technology Stack

| Layer | Technology | Purpose | Implementation Status |
|---|---|---|---|
| Frontend Framework | Next.js 14 (App Router) | Server-side rendering, routing, page structure | Implemented |
| UI Library | React.js 18 | Declarative component-based user interface | Implemented |
| Styling | Tailwind CSS 3 | Utility-first responsive design and styling | Implemented |
| Icons | Lucide React | Clean, scalable vector iconography | Implemented |
| State Management | React Hooks (`useState`, `useEffect`) | Local and client-side application state | Implemented |
| Backend Runtime | Node.js | Server-side runtime environment | Planned |
| Backend Framework | Express.js | REST API routing and business logic | Planned |
| Database | MongoDB | Document database for appointments and patients | Planned |
| Authentication | JSON Web Tokens (JWT) / bcrypt | Token-based secure administrative auth | Planned (Mock Auth Implemented) |
| Version Control | Git & GitHub | Source code management and team collaboration | Implemented |

---

## 12. Project Status

This project is developed as an academic software engineering project for an undergraduate curriculum. 

### Currently Implemented Features
* Next.js 14 responsive web application with custom styling and typography.
* Complete public-facing pages: Home (`/`), About (`/about`), Services (`/services`), Contact (`/contact`), and Appointment (`/appointment`).
* Interactive appointment booking form with field validation, date constraints, time slot picker, and immediate confirmation feedback.
* Admin authentication interface (`/login`) with credential validation against demo credentials (`admin@medicare.com` / `Admin@123`).
* Admin dashboard (`/dashboard`) featuring key metrics (Total Appointments, Pending Requests, Approved Visits, Total Patients).
* Appointments management table (`/dashboard/appointments`) supporting text search, status filtering (All, Pending, Approved, Cancelled), and dynamic status updates (Approve, Cancel, Delete).
* Patient records table (`/dashboard/patients`) with search and record management.
* Settings view (`/dashboard/settings`) displaying clinic and notification preferences.

### Planned / Future Features
* Integration of a persistent MongoDB database to replace in-memory and mock datasets.
* Express.js REST API endpoints connecting the frontend booking forms to the database.
* Production-grade JWT session authentication with HTTP-only cookies.
* Automated SMS and email confirmation triggers sent upon appointment approval.

---

## 13. Repository Documentation

Detailed engineering and requirements documents are maintained inside the `docs/` folder:

* [Requirement Elicitation Document](docs/requirement-elicitation.md)
* [Software Requirements Specification](docs/software-requirements-specification.md)

---

## Project Setup & Local Execution

To run the application locally on your machine:

```bash
# Navigate to the web application directory
cd medicare-clinic

# Install project dependencies
npm install

# Start the development server
npm run dev
```

Open your browser and navigate to `http://localhost:3000`.
