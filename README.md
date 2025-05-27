
# 📚 Student Management System (SMS)

The **Student Management System (SMS)** is a modern, role-based, and modular web application designed to streamline academic and administrative operations within educational institutions. It features a centralized dashboard to manage student data, academic records, resources, and institutional services.

---

## 🌟 Core Features & Modules

The system is organized into independently functional modules with role-based access control (`alumni`, `faculty`, `student`, `parent`). All data is managed on the frontend using `localStorage`, offering a fully interactive experience without a backend.

### Academic & Administration
- 🎓 **[Admission Management](admission-section.html)** – Enroll and manage student admissions dynamically.
- 👩‍🏫 **[Faculty Management](faculty-management.html)** – Manage faculty profiles, roles, and subjects.
- 📝 **[Examination Management](examination-management.html)** – Conduct exams, manage results, analyze performance.
- 📄 **[Marksheet Management](marksheet-section.html)** – Generate and manage student report cards.
- 📊 **[Grading System](grading-section.html)** – Assign grades with visual performance analysis.
- 📅 **[Time Table Management](time-table-section.html)** – Plan weekly academic schedules per class/role.

### Student Life & Services
- 🏠 **[Hostel Management](hostel-management.html)** – Room allotment, availability calendar, alerts, auto-assignment.
- 🍽 **[Canteen Management](canteen-management.html)** – Menu tracking, digital orders, and cashless transactions.
- 🚌 **[Transportation Management](transportation-management.html)** – Assign routes/vehicles with CSV export and live search.
- 💳 **[Fees & Payment Management](payment-section.html)** – Track and record fee payments, export records, generate alerts.
- 💼 **[Internship & Placement](internship-placement.html)** – Log internship/job details, search/sort/export opportunities.
- 🎓 **[Scholarship Management](scholarship-management.html)** – Register applicants, manage awards, filter analytics.
- 📚 **[Library Management](library-management.html)** – Issue/return books, calculate fines, generate overdue alerts.

### Identity & Communication
- 🆔 **[ID Card & Certificate Generation](id-card-certificate.html)** – Generate QR-embedded cards & PDFs with e-signatures.
- 📩 **[Mass SMS System](mass-sms-system.html)** – Send role-based announcements and alerts via simulated SMS interface.
- 🎉 **[Event Management](event-management.html)** – Schedule and coordinate institutional events and notices.
- 🎓 **[Alumni Management](alumni-management.html)** – Store and manage alumni records and institutional engagement.

---

## 🧠 System Highlights

- 🔐 **Role-Based Access Control** – Each module adjusts dynamically based on user role (alumni/faculty/student/parent).
- 📱 **Responsive Design** – Built with mobile-first principles using Tailwind CSS / Bootstrap (where applicable).
- 📤 **Data Export** – CSV & PDF export support for all key modules.
- 📈 **Analytics** – Charts and summary views for academic and operational insights.
- 🖨 **Print-Ready Documents** – Stylized ID cards, certificates, and mark sheets are PDF and printer-friendly.
- 📦 **Frontend-Only Architecture** – All features work without a backend; data is stored in the browser via `localStorage`.

---

## 🛠 Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript ES6+
- **Styling:** Tailwind CSS, Bootstrap (select modules)
- **Data Handling:** Browser `localStorage`, JSON
- **Export Libraries:** `jsPDF`, `html2canvas`, custom CSV generation

---

## 📦 Project Structure

```
student-management-system/
│
├── index.html                 # Landing / authentication page
├── dashboard.html             # Main dashboard after login
│
├── admission-section.html
├── attendance-management.html
├── alumni-management.html
├── canteen-management.html
├── event-management.html
├── examination-management.html
├── faculty-management.html
├── grading-section.html
├── hostel-management.html
├── id-card-certificate.html
├── internship-placement.html
├── library-management.html
├── marksheet-section.html
├── mass-sms-system.html
├── payment-section.html
├── scholarship-management.html
├── time-table-section.html
├── transportation-management.html
│
├── assets/
│   └── img/                    # Static image resources
```

---

## 🚀 Getting Started

1. **Clone the repository**  
```bash
git clone https://github.com/your-username/student-management-system.git
cd student-management-system
```

2. **Open `index.html` in your browser**  
   This is the entry point with user login and role selection.

3. **Log in using a mock role**  
   - Choose: `Admin`, `Faculty`, `Student`, or `Parent`
   - Based on the role, the dashboard will show authorized modules only.

---

## 📌 Future Enhancements (Optional)

- 🌐 Firebase or Node.js backend integration
- 🔄 Real-time sync and cloud storage
- 📲 Progressive Web App (PWA) setup
- 🔔 Push notifications for alerts/reminders

---


## 🙌 Acknowledgments

Thanks to open-source tools and libraries used in this system:  
`Tailwind CSS`, `Bootstrap`, `jsPDF`, `html2canvas`, and the JavaScript developer community!
