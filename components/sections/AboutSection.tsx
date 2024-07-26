import CurrentTimeLineExp, {
  calculateDuration
} from '../content/CurrentTimeLineExp';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import ProcessWork from '../content/ProcessWork';
import { skills } from '../utils/mySkills';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="About me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-400">
            I am a passionate and versatile Software Engineering student with
            over {calculateDuration('2023-01-01', false)} of JavaScript
            experience and a keen interest in learning new technologies. I am
            currently exploring machine learning and mastering tools and
            practices such as TypeScript, AWS, Docker, and SEO to deliver
            optimized, reliable, and production-grade software.
          </p>

          <p className="text-base text-gray-400">
            I have solid experience in web frontend development, utilizing
            frameworks and technologies such as React and Next.js. My backend
            development skills include working with Node, Express, MongoDB, and
            Python. Additionally, I have UX design experience using Figma and
            Photoshop. I adhere to best practices in prototyping and coding,
            clean architecture, SOLID principles, and agile methodologies.
          </p>

          <p className="text-base text-gray-400">
            Beyond my internship and course work, I engage in personal projects where I
            create useful software or products from design and development to
            deployment on Vercel/Heroku/AWS. These projects aim to solve problems,
            provide inspiration, or enhance user experiences by delivering
            software tailored to providing specific solutions.
          </p>
        </AnimationContainer>

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">
            Skills
          </h2>

          <p className="text-base text-gray-400">
            A look at all the programming languages, libraries, and tools I've
            worked with, since I started programming about +
            {calculateDuration('2022-01-01', false)} ago. I have tried different
            programming languages and technology stacks, both Backend and
            Frontend, though I enjoy Frontend Development more!
          </p>

          <div className="flex flex-col items-start gap-3 mt-3">
            {skills.map(({ title, techs }) => (
              <div key={title}>
                <h3 className="font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start">
                  {title}
                </h3>

                <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                  <ShowSkills skills={techs} />
                </AnimationContainer>
              </div>
            ))}
          </div>
        </AnimationContainer>

        <ProcessWork />

        {/* <AnimationContainer customClassName='w-full flex flex-col gap-5'>

          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start'>Interests & Goals</h2>

          <p className='text-base text-gray-400'>
            I am interested in learning Backend with other language like Java, Go or with Python. I also want to know how to make a video game with Unity or other and I am very interested in being a content creator whether programming or something else.
          </p>

          <p className='text-base text-gray-400'>
            For now I'm learning how to make applications with real time communication such as a chat using Socket.IO, I'm also starting to learn the way to be Devops using Docker, Kubernetes, AWS or others.
          </p>

          <p className='text-base text-gray-400'>
            I am also interested in learning other things besides programming such as 3D design with Blender and video editing with Davinci Resolve (these last two I would take as a hobby).
          </p>

        </AnimationContainer> */}
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
