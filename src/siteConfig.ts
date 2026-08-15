export interface NavChild {
  label: string;
  to: string;
}

export interface NavSection {
  label: string;
  to?: string;
  children?: NavChild[];
}

export const NAV_SECTIONS: NavSection[] = [
  { label: 'Home', to: '/' },
  {
    label: 'Team',
    children: [
      { label: 'Members', to: '/team/members' },
      { label: 'Attributions', to: '/team/attributions' },
    ],
  },
  {
    label: 'Project',
    children: [
      { label: 'Description', to: '/project/description' },
      { label: 'Engineering', to: '/project/engineering' },
      { label: 'Results', to: '/project/results' },
      { label: 'Contribution', to: '/project/contribution' },
    ],
  },
  {
    label: 'Wet Lab',
    children: [
      { label: 'Description', to: '/wetlab/description' },
      { label: 'Design', to: '/wetlab/design' },
      { label: 'Parts', to: '/wetlab/parts' },
      { label: 'Measurement', to: '/wetlab/measurement' },
      { label: 'Notebook', to: '/wetlab/notebook' },
      { label: 'Safety', to: '/wetlab/safety' },
    ],
  },
  {
    label: 'Data Modeling',
    children: [
      { label: 'Background', to: '/modeling/background' },
      { label: 'Assumptions', to: '/modeling/assumptions' },
      { label: 'Implementation', to: '/modeling/implementation' },
      { label: 'Results', to: '/modeling/results' },
      { label: 'Application', to: '/modeling/application' },
    ],
  },
  {
    label: 'Human Practices',
    children: [
      { label: 'iHP', to: '/human/ihp' },
      { label: 'Education', to: '/human/education' },
    ],
  },
];

export const PAGE_TITLES: Record<string, string> = {
  '/': 'Zero Carbon Fragrances',
  '/team/members': 'Team Members',
  '/team/attributions': 'Attributions',
  '/project/description': 'Project Description',
  '/project/engineering': 'Engineering',
  '/project/results': 'Key Results',
  '/project/contribution': 'Contribution',
  '/wetlab/description': 'Wet Lab Description',
  '/wetlab/design': 'Design',
  '/wetlab/parts': 'Parts',
  '/wetlab/measurement': 'Measurement',
  '/wetlab/notebook': 'Notebook',
  '/wetlab/safety': 'Safety',
  '/modeling/background': 'Modeling Background',
  '/modeling/assumptions': 'Modeling Assumptions',
  '/modeling/implementation': 'Implementation & Parameters',
  '/modeling/results': 'Modeling Results',
  '/modeling/application': 'Modeling Application',
  '/human/ihp': 'Integrated Human Practices',
  '/human/education': 'Education',
};
