export const DOCTOR = {
  name: 'Dr. Vishal Kashyap',
  title: 'MBBS, MD (Internal Medicine)',
  experience: '5+ Years',
  specialization: 'Internal Medicine & General Physician',
  clinic: 'MediCare Clinic',
  tagline: 'Compassionate care, expert hands.',
  address: '42, Kafiyabad, Moradabad, UttarPradesh 244001',
  phone: '+91 95685 49366',
  email: 'dr.arjun@medicareclinic.in',
  qualifications: [
    'MBBS — AIIMS, New Delhi (2005)',
    'MD Internal Medicine — PGI Chandigarh (2009)',
    'Fellowship in Cardiology — Apollo (2011)',
    'Member — Indian Medical Association',
  ],
  about: 'Dr. Vishal Kashyap is a highly experienced physician with over 5 years of practice in internal medicine and general healthcare. He is known for his patient-first approach, accurate diagnoses, and compassionate bedside manner. He has treated over 50,000 patients and is committed to advancing healthcare accessibility in the region.',
};

export const TIMINGS = [
  { day: 'Monday – Friday', morning: '9:00 AM – 1:00 PM', evening: '5:00 PM – 7:00 PM' },
  { day: 'Saturday', morning: '9:00 AM – 2:00 PM', evening: '5:00 PM – 7:00 PM' },
  { day: 'Sunday', morning: '10:00 AM – 12:00 PM', evening: 'Closed' },
];

export const SERVICES = [
  { icon: 'Stethoscope', title: 'General Checkup', desc: 'Comprehensive health evaluations, routine screenings, and preventive care for all ages.', color: 'blue', badge: 'Most Popular' },
  { icon: 'Sparkles', title: 'Skin & Dermatology', desc: 'Treatment of acne, eczema, psoriasis, allergies, and all common skin conditions.', color: 'rose' },
  { icon: 'Baby', title: 'Child Specialist', desc: 'Pediatric care from newborn to teens — vaccinations, growth monitoring, and illness.', color: 'amber' },
  { icon: 'Activity', title: 'Diabetes Care', desc: 'Type 1 & 2 management, blood sugar control plans, and long-term wellness coaching.', color: 'green' },
  { icon: 'Heart', title: 'Heart & BP', desc: 'Cardiac screenings, ECG, hypertension management, and cardiovascular risk reduction.', color: 'red' },
  { icon: 'Zap', title: 'Emergency Care', desc: '24/7 emergency consultations, urgent care, and rapid response for acute conditions.', color: 'purple' },
];

export const TESTIMONIALS = [
  { name: 'Priya Mehta', role: 'Patient since 2019', text: 'Dr. Kashyap is exceptional. He listens patiently, explains clearly, and genuinely cares. My whole family visits him.', rating: 5, avatar: 'PM' },
  { name: 'Rajesh Gupta', role: 'Patient since 2021', text: 'I was struggling with diabetes for years. Dr. Sharma completely transformed my approach. My HbA1c is now under control!', rating: 5, avatar: 'RG' },
  { name: 'Sunita Verma', role: 'Patient since 2020', text: 'The clinic is extremely clean and professional. Staff is helpful and appointments are always on time. Highly recommend.', rating: 5, avatar: 'SV' },
  { name: 'Amit Khanna', role: 'Patient since 2022', text: 'Best doctor in Dehradun, no doubt. He diagnosed my cardiac issue when others missed it. Forever grateful.', rating: 5, avatar: 'AK' },
];

export const FAKE_APPOINTMENTS = [
  { id: 1, name: 'Priya Mehta', phone: '98765 43210', date: '2024-06-25', time: '10:00 AM', problem: 'Fever & headache', status: 'approved' },
  { id: 2, name: 'Rajesh Gupta', phone: '87654 32109', date: '2024-06-25', time: '11:00 AM', problem: 'Diabetes follow-up', status: 'pending' },
  { id: 3, name: 'Sunita Verma', phone: '76543 21098', date: '2024-06-26', time: '9:30 AM', problem: 'Skin rash', status: 'approved' },
  { id: 4, name: 'Amit Khanna', phone: '65432 10987', date: '2024-06-26', time: '5:00 PM', problem: 'Chest pain checkup', status: 'pending' },
  { id: 5, name: 'Neha Singh', phone: '54321 09876', date: '2024-06-27', time: '10:30 AM', problem: 'Child vaccination', status: 'approved' },
  { id: 6, name: 'Vikram Patel', phone: '43210 98765', date: '2024-06-27', time: '6:00 PM', problem: 'BP monitoring', status: 'cancelled' },
  { id: 7, name: 'Meera Joshi', phone: '32109 87654', date: '2024-06-28', time: '9:00 AM', problem: 'General checkup', status: 'pending' },
  { id: 8, name: 'Karan Malhotra', phone: '21098 76543', date: '2024-06-28', time: '11:30 AM', problem: 'Back pain', status: 'approved' },
];

export const FAKE_PATIENTS = [
  { id: 1, name: 'Priya Mehta', phone: '98765 43210', email: 'priya@email.com', visits: 8, lastVisit: 'Jun 25, 2024', condition: 'Hypertension' },
  { id: 2, name: 'Rajesh Gupta', phone: '87654 32109', email: 'rajesh@email.com', visits: 12, lastVisit: 'Jun 25, 2024', condition: 'Diabetes Type 2' },
  { id: 3, name: 'Sunita Verma', phone: '76543 21098', email: 'sunita@email.com', visits: 5, lastVisit: 'Jun 20, 2024', condition: 'Eczema' },
  { id: 4, name: 'Amit Khanna', phone: '65432 10987', email: 'amit@email.com', visits: 3, lastVisit: 'Jun 18, 2024', condition: 'Cardiac' },
  { id: 5, name: 'Neha Singh', phone: '54321 09876', email: 'neha@email.com', visits: 6, lastVisit: 'Jun 15, 2024', condition: 'Child Care' },
  { id: 6, name: 'Vikram Patel', phone: '43210 98765', email: 'vikram@email.com', visits: 4, lastVisit: 'Jun 10, 2024', condition: 'Hypertension' },
  { id: 7, name: 'Meera Joshi', phone: '32109 87654', email: 'meera@email.com', visits: 2, lastVisit: 'Jun 5, 2024', condition: 'Thyroid' },
  { id: 8, name: 'Karan Malhotra', phone: '21098 76543', email: 'karan@email.com', visits: 7, lastVisit: 'May 30, 2024', condition: 'Back Pain' },
  { id: 9, name: 'Anjali Sharma', phone: '10987 65432', email: 'anjali@email.com', visits: 1, lastVisit: 'May 25, 2024', condition: 'Fever' },
  { id: 10, name: 'Deepak Roy', phone: '09876 54321', email: 'deepak@email.com', visits: 9, lastVisit: 'May 20, 2024', condition: 'COPD' },
];
