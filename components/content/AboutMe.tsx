import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      <p className='text-base text-gray-400'>
        I am a passionate and versatile Software Enginering student with over +{calculateDuration('2023-01-01', false)} of JavaScript experience and a constant interest in learning new technologies. I am currently diving into machine learning and working on mastering tools or practices such as "TypeScript, AWS, Docker, SEO" in order to deliver optimized, reliable and production-grade software.
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;