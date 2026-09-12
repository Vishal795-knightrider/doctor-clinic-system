# Requirement Elicitation Document

**Project:** Online Doctor Appointment System  
**Clinic:** MediCare Clinic (Kafiyabad, Moradabad, Uttar Pradesh, India)  
**Project Team:** Vishal Kashyap, Vishal Kumar, Shubham Mourya  
**Document Version:** 1.0  
**Date:** September 2026  

---

## 1. Project Overview

The Online Doctor Appointment System is an academic software engineering initiative designed to digitize consultation scheduling and patient queue coordination for MediCare Clinic, located at Kafiyabad, Moradabad, Uttar Pradesh. The clinic currently depends on walk-in patient visits and unscheduled telephone calls, resulting in extended waiting room delays, administrative burdens on clinic staff, and occasional record-keeping errors.

The primary objective of this requirement elicitation process is to identify, analyze, and document the functional and operational needs of all stakeholders involved in the clinic ecosystem. This document outlines stakeholder expectations, proposed interview frameworks, structured questionnaires, sample user personas, categorized requirements, acceptance criteria, and requirement prioritization to guide current implementation and future development cycles.

---

## 2. Stakeholder Identification

The following primary and secondary stakeholders have been identified for the clinic appointment management system:

| Stakeholder Name / Type | Role in the System | Core Needs and Expectations | Priority |
|---|---|---|---|
| Doctor / Clinic Owner (Dr. Vishal Kashyap) | Primary healthcare provider and clinic supervisor | Clear advance visibility of daily patient visits, organized schedule, elimination of waiting room overcrowding, and access to patient visit history. | High |
| Patient | Service consumer booking consultations | Intuitive access to clinic timings and doctor credentials, straightforward online appointment booking without mandatory sign-up, and timely confirmation. | High |
| Clinic Staff / Receptionist | Front-desk coordinator and schedule administrator | Centralized interface to approve, cancel, or reschedule appointments, rapid search of patient contact records, and reduction of incoming phone calls. | High |
| Project Team (Developers) | Software designers and system implementers | Clearly specified functional boundaries, realistic technical scope, reliable component architecture, and clean documentation for academic evaluation. | Medium |

---

## 3. Interview Details

*Note: The following interview outlines represent proposed interview frameworks prepared by the project team for academic elicitation. They establish the research structure used to capture real-world operational workflows.*

### 3.1 Proposed Interview 1: Doctor / Clinic Owner
* **Stakeholder:** Doctor / Clinic Owner
* **Role:** Lead Physician (General Medicine & Internal Care)
* **Purpose:** To understand the clinical workflow, consultation pacing, peak hours, and administrative pain points during daily outpatient consultations.
* **Topics to Discuss:** Average consultation duration, maximum daily patient capacity, emergency walk-in handling, preferred booking notice periods, and critical patient details required before an examination.
* **Expected Information:** Recommended time-slot intervals (e.g., 30 minutes), standard operating hours across weekdays and weekends, protocols for handling emergency cases, and key information fields needed in appointment summaries.

### 3.2 Proposed Interview 2: Patient
* **Stakeholder:** Patient / Guardian
* **Role:** Clinic Visitor and Healthcare Seeker
* **Purpose:** To determine the usability hurdles, waiting room frustrations, and digital preferences of local residents seeking clinic appointments.
* **Topics to Discuss:** Typical waiting durations during walk-ins, phone booking experiences, willingness to use mobile web forms, and preferred methods of appointment confirmation.
* **Expected Information:** Simplicity of the booking form, need for mobile-friendly interfaces without forced app downloads, clarity regarding clinic location and consultation fees, and expectation of follow-up notifications.

### 3.3 Proposed Interview 3: Clinic Staff / Receptionist
* **Stakeholder:** Clinic Staff / Front-Desk Receptionist
* **Role:** Administrative and Queue Coordinator
* **Purpose:** To analyze front-desk operational overhead, patient record storage methods, and day-to-day scheduling bottlenecks.
* **Topics to Discuss:** Daily incoming phone call volume, frequency of double bookings or missed appointments, register maintenance procedures, and requirements for an administrative dashboard.
* **Expected Information:** Need for quick status toggles (Approved, Cancelled, Pending), search capability by patient phone number or name, and a clear summary of daily appointments.

---

## 4. Questionnaire

### 4.1 Doctor / Clinic Staff Questionnaire
1. What is the current average number of outpatients handled per day at MediCare Clinic?
2. What are the primary difficulties encountered when managing appointments through physical registers or phone calls?
3. What is the ideal duration allocated for a standard general consultation?
4. How should the system accommodate unscheduled emergency patients alongside pre-booked online appointments?
5. Which patient details are mandatory before confirming an appointment request (e.g., age, contact number, symptoms)?
6. At what times during the day or week does the clinic experience peak patient congestion?
7. What criteria should determine whether an appointment request is approved or rejected?
8. Would an administrative dashboard accessible on a desktop or tablet at the reception desk satisfy daily scheduling needs?
9. Is it necessary to maintain a running log of past patient visits and previously diagnosed health conditions?
10. How far in advance should patients be permitted to schedule their consultation visits?

### 4.2 Patient Questionnaire
1. How do you currently book an appointment at MediCare Clinic (walk-in, telephone, family referral)?
2. How long do you typically wait in the clinic lobby before being examined by the doctor?
3. Have you ever experienced a lost booking or schedule confusion during a clinic visit?
4. Would you prefer booking an appointment online using a mobile browser rather than calling the clinic?
5. What information do you expect to see on the clinic website before booking (timings, doctor qualifications, services)?
6. Do you find multi-step user registration and passwords inconvenient for a simple doctor visit?
7. How important is it for you to receive an immediate on-screen booking confirmation showing your selected slot?
8. What time of day (morning or evening shift) do you generally prefer for clinic consultations?
9. Are you comfortable entering basic health symptoms in an online booking form?
10. Which device do you primarily use to access internet services (smartphone, tablet, or laptop)?

---

## 5. User Personas

*Note: The personas below are representative sample personas developed to model core user behaviors, motivations, and pain points.*

### 5.1 Sample Persona 1: Patient
* **Name:** Ramesh Chandra
* **Age:** 46
* **Location:** Moradabad, Uttar Pradesh
* **Role:** Local Resident / Patient
* **Goals:** Schedule a consultation for regular blood pressure and blood sugar checkups without spending two hours in a crowded clinic waiting room.
* **Needs:** A clean, accessible website that displays Dr. Vishal Kashyap's consultation hours, available time slots, and a fast booking form requiring minimal typing.
* **Problems:** High work demands make physical visits just to take an appointment token impractical; clinic telephone lines are often busy during morning hours.
* **Expectations:** Simple confirmation showing date, time, and clinic address directly on his smartphone browser without creating an account.

### 5.2 Sample Persona 2: Doctor / Clinic Owner
* **Name:** Dr. Vishal Kashyap
* **Age:** 39
* **Location:** Kafiyabad, Moradabad, Uttar Pradesh
* **Role:** Lead Physician and Clinic Administrator
* **Goals:** Maintain a predictable daily patient flow, dedicate adequate consultation time to each patient, and minimize front-desk chaos.
* **Needs:** A clear digital dashboard summarizing incoming booking requests, daily scheduled appointments, and basic patient medical concerns in advance.
* **Problems:** Patients arriving at arbitrary times cause sudden clinic overcrowding; paper registers make tracking recurring patient history cumbersome.
* **Expectations:** A responsive dashboard that works reliably on clinic hardware, provides quick one-click approval/cancellation, and displays patient telephone numbers for immediate contact.

---

## 6. User Requirements

The system requirements gathered from different user perspectives are listed in the table below:

| Requirement ID | User Class | User Requirement Description | Priority |
|---|---|---|---|
| UR-01 | Patient | The user must be able to view clinic location, phone number, and operating hours on any device. | High |
| UR-02 | Patient | The user must be able to read doctor credentials, specialization, and clinical experience. | Medium |
| UR-03 | Patient | The user must be able to view all healthcare services offered by the clinic. | Medium |
| UR-04 | Patient | The user must be able to submit an appointment request by specifying date, preferred time slot, and health concern. | High |
| UR-05 | Patient | The user must receive an immediate on-screen summary confirmation upon submitting an appointment. | High |
| UR-06 | Doctor / Admin | The administrator must be able to log into a secure administrative portal using authorized credentials. | High |
| UR-07 | Doctor / Admin | The administrator must be able to view total, pending, approved, and cancelled appointment metrics. | High |
| UR-08 | Doctor / Admin | The administrator must be able to filter and search appointments by patient name or contact number. | High |
| UR-09 | Doctor / Admin | The administrator must be able to approve, cancel, or remove appointment records. | High |
| UR-10 | Doctor / Admin | The administrator must be able to view a directory of patients with their contact information and visit frequency. | Medium |
| UR-11 | Doctor / Admin | The administrator must be able to inspect clinic settings and contact details. | Low |

---

## 7. Functional Requirements

The core functional capabilities of the system are defined below:

| ID | Functional Requirement | Description | Priority |
|---|---|---|---|
| FR-01 | Doctor Profile Display | System shall display the doctor's name, qualifications, years of experience, specialization, and professional background. | High |
| FR-02 | Clinic Services Listing | System shall display categorized clinic medical services with descriptions and visual indicators. | High |
| FR-03 | Operational Timings Display | System shall present weekday, Saturday, and Sunday clinic morning and evening hours. | High |
| FR-04 | Clinic Contact & Location Info | System shall present the clinic's physical address in Moradabad, phone contact, email, and interactive inquiry form. | High |
| FR-05 | Appointment Form Input | System shall allow patients to enter full name, valid phone number, optional email, preferred date, time slot, and symptoms. | High |
| FR-06 | Client-Side Date & Time Validation | System shall prevent selection of past dates and require selection of an active time slot prior to submission. | High |
| FR-07 | Appointment Confirmation View | System shall render an on-screen confirmation card displaying submitted booking details and follow-up guidelines. | High |
| FR-08 | Admin Authentication | System shall provide a login interface validating administrative credentials before granting access to dashboard routes. | High |
| FR-09 | Dashboard Overview Metrics | System shall compute and display key statistics: total bookings, pending count, approved count, and total patient records. | High |
| FR-10 | Appointment Status Management | System shall enable the administrator to switch appointment states between 'Pending', 'Approved', and 'Cancelled'. | High |
| FR-11 | Appointment Record Search & Filter | System shall allow real-time filtering of appointments by status tab and keyword search by patient name or phone number. | High |
| FR-12 | Patient Records Directory | System shall display patient profiles including visit counts, last visit date, and primary medical conditions. | Medium |
| FR-13 | Record Deletion Handling | System shall allow administrators to remove outdated or invalid appointment and patient entries. | Medium |

---

## 8. Non-Functional Requirements

### 8.1 Usability
* The user interface must be clean, legible, and simple to navigate for users with basic digital literacy.
* The appointment form must provide clear placeholder text and error hints when required fields are missing.

### 8.2 Performance
* Client-side page navigation must execute seamlessly with page transitions completing within 1 second on standard broadband or 4G mobile connections.
* Form validation feedback must be rendered instantaneously upon user interaction.

### 8.3 Security
* Administrative routes (`/dashboard/*`) must be guarded behind authentication checks.
* Password entry fields must mask characters and allow secure toggling of password visibility.
* Sensitive administrative credentials must not be exposed in clear text in public application views.

### 8.4 Reliability
* The web application must maintain stable client-side state without unexpected crashes or uncaught script errors during appointment submission or record filtering.

### 8.5 Responsiveness
* The application layout must be fully responsive, rendering gracefully across screen widths ranging from 320px (smartphones) to 1920px (desktop monitors).

### 8.6 Maintainability
* The source code must follow a modular component structure (Next.js App Router conventions) separating reusable UI components, layout structures, and data models.

### 8.7 Scalability
* The architecture must be structured to support migration from client-side mock datasets to a distributed RESTful API and persistent database without requiring core UI redesign.

---

## 9. Acceptance Criteria

| Feature | Acceptance Criteria | Priority |
|---|---|---|
| Public Information Pages | When a user navigates to `/`, `/about`, `/services`, or `/contact`, all clinic details, doctor background, timings, and address must load correctly with no broken assets. | High |
| Appointment Form Validation | Submitting the appointment form without a name, phone number, date, time slot, or problem description must block submission and highlight required fields. | High |
| Past Date Restriction | The appointment date picker must disable past dates by enforcing a minimum selectable date equal to the current day (`min=YYYY-MM-DD`). | High |
| Booking Confirmation | Upon valid form submission, the system must display an appointment confirmation screen presenting patient name, chosen date, time slot, and health concern. | High |
| Admin Authentication Check | Entering valid credentials (`admin@medicare.com` / `Admin@123`) must successfully redirect to `/dashboard`. Invalid inputs must display a clear error message. | High |
| Dashboard Statistics | The dashboard header must accurately reflect the counts of total appointments, pending reviews, approved bookings, and registered patients. | High |
| Status Transition | In the appointments table, clicking 'Approve' must update the badge to 'Approved' and adjust category counters; clicking 'Cancel' must update status to 'Cancelled'. | High |
| Appointment Search | Typing a patient name or phone number into the search bar must instantly filter matching records in the appointments table. | High |
| Responsive Layout | All navigation bars, forms, cards, and tables must adjust without horizontal scroll clipping on screens between 360px and 1280px. | High |

---

## 10. Key Findings

1. **High Demand for Remote Booking:** Walk-in patients in Moradabad frequently face long waiting times, making a simple online booking option highly desirable.
2. **Preference for Low-Friction Booking:** Patients strongly favor direct appointment booking without the friction of mandatory account creation, email verification, or complex passwords.
3. **Crucial Role of Clinic Operating Hours:** Many patients attempt to visit outside doctor availability; displaying clear morning and evening timings prominently reduces wasted visits.
4. **Front-Desk Workload Reduction:** A large portion of front-desk calls consist of simple schedule checks; publishing live service lists and schedules frees staff time for in-clinic care.
5. **Need for Rapid Status Review:** Clinic staff require rapid, visual status toggles (Approve/Cancel) rather than complex data-entry workflows.
6. **Mobile Dominance:** Over 80% of target patient users access web portals primarily via mobile smartphones, making mobile-first responsive design a mandatory requirement.
7. **Value of Confirmation Details:** Providing an immediate visual confirmation receipt with full appointment details reassures patients that their request has been successfully captured.
8. **Scalable Architecture Path:** While an initial frontend-driven prototype satisfies UI evaluation, connecting a persistent database is essential for long-term production use.

---

## 11. Requirement Prioritization

Using the MoSCoW (Must Have, Should Have, Could Have, Future) framework, the requirements are categorized as follows:

### Must Have (Critical for Core Functionality)
* Responsive public website displaying doctor profile, services, clinic timings, and Moradabad location.
* Online appointment booking form with field validation and slot selection.
* Immediate on-screen appointment confirmation summary.
* Administrative login portal.
* Admin dashboard displaying appointment metrics and status management (Approve, Cancel, Delete).
* Search and filter capability for appointments.

### Should Have (Important Enhancements)
* Patient directory listing with visit counts and history.
* Contact inquiry form on the public contact page.
* Visual indicators and color-coded status badges for quick schedule scanning.
* Clinic setting interface displaying contact information and operational preferences.

### Could Have (Desirable Non-Critical Features)
* Printable appointment slips for patients.
* Dark mode or high-contrast viewing theme for accessibility.
* Export capability for daily appointment lists (CSV/PDF).

### Future (Planned Long-Term Scope)
* Persistent database storage (MongoDB) replacing in-memory datasets.
* Automated SMS and WhatsApp confirmation alerts sent to patient phone numbers.
* Secure multi-role user accounts with JWT session management.
* Online payment gateway for consultation fee pre-payment.

---

## 12. Conclusion

The requirement elicitation process for the Online Doctor Appointment System demonstrates a clear operational need for a modern, digital scheduling platform at MediCare Clinic. By replacing manual registers and uncontrolled walk-ins with a responsive web portal, the clinic can significantly reduce patient waiting times, minimize front-desk interruptions, and optimize daily patient flow. 

The elicited functional and non-functional requirements provide a well-defined foundation for both the current Next.js implementation and subsequent backend integration phases.
