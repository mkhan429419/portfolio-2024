import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <div className="flex justify-center lg:justify-start mb-8">
        <a
          href="https://drive.google.com/file/d/1N-MNpCz0FlcN9iMyhCW9cghwnrVwT5Qe/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 transition duration-300"
        >
          View My CV
        </a>
      </div>

      <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        About me
      </h2>

      <p className="text-base text-gray-400">
        I am a passionate and versatile Software Engineering student with over{' '}
        {calculateDuration('2023-01-01', false)} of JavaScript experience and a
        keen interest in learning new technologies. I am currently exploring
        machine learning and mastering tools and practices such as TypeScript,
        AWS, Docker, and SEO to deliver optimized, reliable, and
        production-grade software.
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
