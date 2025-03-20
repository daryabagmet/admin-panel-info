import { Complaint } from '@/types/dataTypes'

const complaints: Complaint[] = [
  {
    id: '1',
    subject: 'High blood pressure',
    body: 'Headache, high blood pressure',
    doctor: 'John Doe',
    date: '2024-03-21',
    results: [
      {
        id: '1',
        title: 'Blood test',
        result: 'C-protein level',
        doctor: 'Jane Benett',
        date: '2024-03-21',
      },
      {
        id: '2',
        title: 'Blood test',
        result: 'High glucose level',
        doctor: 'Alex Jown',
        date: '2024-03-21',
      },
    ],
    prescriptions: ''
  },
  {
    id: '2',
    subject: 'General Checkup',
    body: 'Routine health checkup for overall well-being',
    doctor: 'Emily Smith',
    date: '2024-03-23',
    results: [
      {
        id: '1',
        title: 'Blood test',
        result: 'Normal',
        doctor: 'Mark Jason',
        date: '2024-03-23',
      },
      {
        id: '2',
        title: 'Blood test',
        result: 'Normal',
        doctor: 'Sarah Neil',
        date: '2024-03-23',
      },
    ],
    prescriptions: ''
  },
  {
    id: '3',
    subject: 'Cholesterol Level Check',
    body: 'Check cholesterol levels as part of regular heart health monitoring',
    doctor: 'David Johnson',
    date: '2024-03-26',
    results: [
      {
        id: '1',
        title: 'Blood test',
        result: 'High cholesterine level',
        doctor: 'Lucy Tomsom',
        date: '2024-03-26',
      },
      {
        id: '2',
        title: 'Blood test',
        result: 'Normal',
        doctor: 'Michael Brown',
        date: '2024-03-26',
      },
    ],
    prescriptions: ''
  },
  {
    id: '4',
    subject: 'Follow-up Visit',
    body: 'AR applications and therapy progress check',
    doctor: 'Sophia Williams',
    date: '2024-03-28',
    results: [
      {
        id: '1',
        title: 'Blood test',
        result: 'Normal',
        doctor: 'Grace Wilson',
        date: '2024-03-28',
      },
      {
        id: '2',
        title: 'Blood test',
        result: 'Normal',
        doctor: 'Jack',
        date: '2024-03-28',
      },
    ],
    prescriptions: ''
  },
  {
    id: '5',
    subject: 'Diabetes Screening',
    body: 'Screening for diabetes through blood tests',
    doctor: 'Andrew Brown',
    date: '2024-03-30',
    results: [
      {
        id: '1',
        title: 'Blood test',
        result: 'Normal',
        doctor: 'Olivia Wiz',
        date: '2024-03-30',
      },
      {
        id: '2',
        title: 'Blood test',
        result: 'Ensure regular monitoring',
        doctor: 'William Asul',
        date: '2024-03-30',
      },
    ],
    prescriptions: ''
  },
  {
    id: '6',
    subject: 'Annual Physical Exam',
    body: 'Full-body health checkup and assessments',
    doctor: 'Emma Davis',
    date: '2024-04-02',
    results: [
      {
        id: '1',
        title: 'Blood test',
        result: 'Normal',
        doctor: 'Sophie Doe',
        date: '2024-04-02',
      },
      {
        id: '2',
        title: 'Blood test',
        result: 'Normal',
        doctor: 'Ethan Brown',
        date: '2024-04-02',
      },
    ],
    prescriptions: ''
  },
]

export default complaints
