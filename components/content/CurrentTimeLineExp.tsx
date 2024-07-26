import { Timeline, TimelineEvent } from './TimeLineExp';

export function calculateDuration(
  startDate: string,
  showMonths: boolean
): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return '1 year';
  } else if (!showMonths) {
    return `${years} years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title>
          <a
            href="https://headstarter.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease"
          >
            Headstarter AI
          </a>{' '}
          | Jul. 2024 - present
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          I am currently part of Headstarter's SWE fellowship; working on multiple
          projects, both solo and in teams, ranging from a Personal Portfolio
          Website to a full-fledged FYP Manager Application. I am mainly
          involved in the frontend development of projects, implementing clean
          and modern design. Employing technologies and frameworks such as HTML,
          CSS, Tailwind, JavaScript, TypeScript, React, Next.js, Redux, and
          ShadcnUI.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          <a
            href="https://www.thesparksfoundationsingapore.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease"
          >
            The Sparks Foundation
          </a>{' '}
          | Jul. 2024
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Designed and developed web pages applying modern technologies such as
          Reactjs, Nextjs, TailwindCSS and ShadcnUI. My main project was
          developing a banking application.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          <a
            href="https://www.dplit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease"
          >
            DPL
          </a>{' '}
          | Jun. 2024
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Worked with a supervisor to develop DataHub, a file management system
          that utilizes modern tech stacks and securely stores the users data
          using AWS. <br />
          - Utilized MERN stack for development, including React, Typescript,
          and TailwindCSS for the frontend, Node and Express for backend, and
          MongoDB for the database. Files were handled securely using AWS S3,
          and JWT was used for token-based authentication. <br />- Learned
          modern deployment methods: frontend was deployed on vercel, backend on
          heroku, and database on MongoDB Atlas.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent last>
        <TimelineEvent.Title>
          <a
            href="https://www.codsoft.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease"
          >
            CodSoft
          </a>{' '}
          | Aug. 2023
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Completed 3 tasks on Web Development with HTML, CSS, and JS. <br />-
          Task 1: A personal portfolio site, showcasing all my skills, projects,
          and resume. <br />
          - Task 2: To-do list site, allowing users to add, delete, and edit
          their tasks. The tasks are stored and fetched from the backend.
          <br />- Task 3: Calculator, with an interactive interface for buttons,
          utilizing CSS grid layout. Event listeners, statements, operators, and
          loops were used to handle user input and perform calculations.
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  );
};

export default CurrentTimeLineExp;
