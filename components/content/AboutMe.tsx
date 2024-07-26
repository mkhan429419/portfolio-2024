import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
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
