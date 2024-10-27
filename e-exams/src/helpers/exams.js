import image1 from "../assets/images/logoexam1.png";
import image2 from "../assets/images/logoexam2.png";
import image3 from "../assets/images/logoexam3.png";
import image4 from "../assets/images/logoexam8.png";

const todayExam = { id: 1, name: 'IPS', room: 'E02', date: '27/10/2024 10h:30', image: image4 };

const upcomingExams = [
  { id: 1, name: 'Maths', room: 'E02', date: '30/10/2024 13h:00', image: image1 },
  { id: 2, name: 'CAI', room: 'B02', date: '30/11/2024 17h:00', image: image3 },
  { id: 3, name: 'SEN', room: 'C102', date: '20/11/2024 09h:00', image: image4 },
  { id: 4, name: 'Maths', room: 'E02', date: '1/12/2024 08h:05', image: image2 },
  { id: 5, name: 'CAI', room: 'B02', date: '12/12/2024 13h:00', image: image1 },
  { id: 6, name: 'SEN', room: 'C102', date: '15/12/2024 16h:00', image: image3 },
];

const pastExams = [
  { id: 4, name: 'Maths', room: 'E02', date: '30/10/2024 10h:30', image: image2 },
  { id: 5, name: 'CAI', room: 'B02', date: '23/11/2024 14h:00', image: image1 },
  { id: 6, name: 'SEN', room: 'C102', date: '2/12/2024 15h:00', image: image3 },
  { id: 4, name: 'Maths', room: 'E02', date: '20/12/2024 13h:00', image: image2 },
  { id: 5, name: 'CAI', room: 'B02', date: '14/12/2024 14h:00', image: image1 },
  { id: 6, name: 'SEN', room: 'C102', date: '3/12/2024 11h:00', image: image3 },
];

// Export the variables
export { todayExam, upcomingExams, pastExams };
