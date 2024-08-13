## Problem:
When contacting a private clinic for urgent consultation, the patient must first queue up and register at the registration window, then wait for a call to the medical staff's office to receive a status (bracelet), then wait in line to see the doctor.

## Suggestion:
Develop a system of self-registration of patients that assigns status based on patient distribution algorithms and forms one queue for patients of one category.

## Parts:
1. HospitalHelper Patients panel ( login/logout/register, dashboard with current complaint and its status (green, yellow, red), previous complaints, complaint's detail).
2. HospitalHelper Doctors panel ( login/logout, dashboard with patinets and their statuses, patient's detail).
3. HospitalHelper Admin panel (login/logout, dashboard with patients, doctors)
4. HospitalHelepr script for creating patients' complaints to simulate queue in urgent care.
5. Machine learning model for dividing patients in queue to see general medicine specialists and/or specific doctors and also for adding recommendations for doctors.
6. Dashboard with the results in admin panel.

