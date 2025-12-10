import { ABOUT_TEXT } from "@/data";

export default function TextContent() {
  return (
    <div className="w-full flex-1 flex flex-col gap-4">
      <h2
        className="h4 uppercase text-primary-500"
        aria-label="Mina Ezzat, Front-End Developer"
      >
        Mina Ezzat <br />
        <span className="text-white">Front-End Developer</span>
      </h2>
      <div className="w-full flex flex-col gap-2">
        {ABOUT_TEXT.map((text, index) => {
          return (
            <p key={index} className="b4 capitalize text-white/80">
              {text}
            </p>
          );
        })}
      </div>
    </div>
  );
}

/*
I graduated from the Faculty of Business Information Systems (BIS) in 2024, where I gained a solid foundation in business management principles.

I started studying software development in 2022, and quickly developed a passion for frontend development. Over time, I specialized in creating modern, responsive, and user-friendly web interfaces.

Although my main focus is frontend development, I also have experience with backend technologies and databases. I have completed several full MERN stack projects and understand how to integrate the frontend with backend systems efficiently.

I have been working in professional companies for over a year, contributing to real-world projects and collaborating with teams to deliver high-quality web applications. This experience has strengthened my problem-solving skills and understanding of industry best practices.

*/
