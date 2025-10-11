import './WorkProcess.css';
import { FaComments, FaHandshake, FaCode, FaTruck } from 'react-icons/fa';

const WorkProcess = () => {
  const processes = [
    {
      icon: <FaComments />,
      title: 'Discuss',
      description:
        'We start by engaging in open conversations to understand your goals and expectations.',
    },
    {
      icon: <FaHandshake />,
      title: 'Deal',
      description:
        'After analyzing your needs, we craft transparent proposals that align with your budget.',
    },
    {
      icon: <FaCode />,
      title: 'Develop',
      description:
        'Our team uses technical expertise to create solutions tailored to your requirements.',
    },
    {
      icon: <FaTruck />,
      title: 'Delivery',
      description:
        'With meticulous attention to detail, we ensure timely delivery while exceeding your expectations.',
    },
  ];

  return (
    <section className="work-section">
      <div className="work-container">
        <div className="work-header">
          <h2>Our Effective Work Process</h2>
          <p>
            We follow a streamlined approach to ensure your project is delivered
            with the highest quality and efficiency. From initial consultation
            and requirement gathering to development, testing, and deployment,
            our work process is designed to maintain clear communication, meet
            deadlines, and exceed expectations.
          </p>
        </div>

        <div className="work-grid">
         
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
