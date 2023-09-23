import {JobRole} from "@/models/job-role";
import {ResponsibilitiesEnum} from "@/models/responsibilities";

export const jobRoles: JobRole[] = [
  {
    company: 'efood',
    role: 'Software Engineer',
    description: [ResponsibilitiesEnum.sArchDev, ResponsibilitiesEnum.devops].join(', '),
  }, {
    company: 'Savium',
    role: 'Senior Software Engineer',
    description: [ResponsibilitiesEnum.tl, ResponsibilitiesEnum.pDev, ResponsibilitiesEnum.sArchDev, ResponsibilitiesEnum.devops].join(', '),
  }, {
    company: 'UniverSIS',
    role: 'Web Developer',
    description: [ResponsibilitiesEnum.sDev, ResponsibilitiesEnum.devops, ResponsibilitiesEnum.internMentor].join(', '),
  }, {
    company: 'OpenSCN',
    role: 'Founder',
    description: [ResponsibilitiesEnum.tl, ResponsibilitiesEnum.pDev, ResponsibilitiesEnum.sArchDev, ResponsibilitiesEnum.devops].join(', '),
  }, {
    company: 'Bear In Mind',
    role: 'Web Developer',
    description: [ResponsibilitiesEnum.sDev, ResponsibilitiesEnum.tl].join(', '),
  }, {
    company: 'Point Blank',
    role: 'Web Developer',
    description: ResponsibilitiesEnum.sDev,
  }, {
    company: 'Google Summer Of Code',
    role: 'Participant',
    description: ResponsibilitiesEnum.student,
  }, {
    company: 'International Hellenic University',
    role: 'Student',
    description: ResponsibilitiesEnum.bsc,
  }
];
