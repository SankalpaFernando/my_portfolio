import { Badge } from "./ui/badge";

export default () => {
  return (
    <div class=" container mx-auto lg:w-full w-5/6 mx-auto">
      <div className="flex gap-4 flex-col  mb-3 items-center lg:items-start">
        <div>
          <Badge>Education</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-center lg:text-left">
            My Academic Journey
          </h2>
          <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-center w-5/6 lg:w-full mx-auto lg:text-left">
            I am a Computer Science undergraduate at the University of Jaffna. I
            am currently in my final year of study. I have a passion for
            learning new technologies and building projects.
          </p>
        </div>
      </div>
      <div class="relative pl-8 sm:pl-32 py-6 group">
        <div class="font-caveat font-medium text-lg lg:text-2xl text-amber-500 mb-1 sm:mb-0">
          Bsc. (Hons) Computer Science{" "}
          {/* <span className=" text-sm italic">(Current)</span>{" "} */}
        </div>
        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-amber-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-amber-500 rounded-full">
            AUG, 2020
          </time>
          <div class="text-sm lg:text-xl font-bold text-slate-900">
            University of Jaffna
          </div>
        </div>
        <div class="text-slate-500 text-sm  lg:text-base max-w-5xl">
          Pursuing an honors degree in Computer Science, focusing on advanced
          concepts in programming, data communication, and software development.
          Committed to academic excellence with a strong foundation in
          problem-solving, critical thinking, and collaborative projects.
        </div>
      </div>

      <div class="relative pl-8 sm:pl-32 py-6 group">
        <div class="font-caveat font-medium text-lg lg:text-2xl text-amber-500 mb-1 sm:mb-0">
          Diploma in Computer Science
        </div>
        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-amber-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-amber-500 rounded-full">
            Nov, 2019
          </time>
          <div class="text-sm lg:text-xl font-bold text-slate-900">
            Edith Cowan University, Australia
          </div>
        </div>
        <div class="text-slate-500 text-sm  lg:text-base max-w-5xl">
          Completed a comprehensive diploma program in Computer Science,
          covering fundamental topics such as programming, data structures, and
          software development. Gained practical skills in problem-solving,
          algorithm design, and application development.
        </div>
      </div>

      <div class="relative pl-8 sm:pl-32 py-6 group">
        <div class="font-caveat font-medium text-lg lg:text-2xl text-amber-500 mb-1 sm:mb-0">
          Diploma in Software Engineering
        </div>
        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-amber-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-amber-500 rounded-full">
            Jan, 2017
          </time>
          <div class="text-sm lg:text-xl font-bold text-slate-900">
            Pearson Certification
          </div>
        </div>
        <div class="text-slate-500 text-sm  lg:text-base max-w-5xl">
          Earned a diploma in Software Engineering with a strong focus on Java
          and C#. Gained hands-on experience in object-oriented programming,
          software development methodologies, and application design. Developed
          skills in coding, debugging, and building robust, scalable software
          solutions.
        </div>
      </div>
    </div>
  );
};
