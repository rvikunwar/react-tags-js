export const getMarkColor = (marks: number) => {
    if (marks >= 90) {
        return '#00CC66';
    } else if (marks >= 70) {
        return '#3399FF';
    } else {
        return '#FF5733';
    }
};

export const tagExamplesForReadOnly = [
    { value: 95, label: 'Apple', readOnly: true },
    { value: 95, label: 'Apple II', readOnly: true },
    { value: 96, label: 'IBM PC', readOnly: true },
    { value: 97, label: 'Commodore 64', readOnly: true },
    { value: 98, label: 'Amiga 500', readOnly: true },
    { value: 99, label: 'Atari ST', readOnly: true },
    { value: 100, label: 'ZX Spectrum', readOnly: true },
    { value: 101, label: 'MS-DOS', readOnly: true },
    { value: 102, label: 'TRS-80', readOnly: true },
    { value: 103, label: 'C64', readOnly: true },
    { value: 104, label: 'Amstrad CPC', readOnly: true },
    { value: 105, label: 'BBC Micro', readOnly: true },
    { value: 106, label: 'Sinclair QL', readOnly: true },
    { value: 107, label: 'Atari 8-bit', readOnly: true },
    { value: 108, label: 'Acorn Electron', readOnly: true },
];

export const tagExamplesForColor = [
    { value: 95, label: 'Math', tagColor: getMarkColor(95), textColor: '#FFFFFF' },
    { value: 72, label: 'Science', tagColor: getMarkColor(72), textColor: '#FFFFFF' },
    { value: 50, label: 'History', tagColor: getMarkColor(50), textColor: '#FFFFFF' },
    { value: 82, label: 'English', tagColor: getMarkColor(82), textColor: '#FFFFFF' },
    { value: 68, label: 'Physics', tagColor: getMarkColor(68), textColor: '#FFFFFF' },
    { value: 90, label: 'Chemistry', tagColor: getMarkColor(90), textColor: '#FFFFFF' },
    { value: 40, label: 'Geography', tagColor: getMarkColor(40), textColor: '#FFFFFF' },
    { value: 76, label: 'Biology', tagColor: getMarkColor(76), textColor: '#FFFFFF' },
    { value: 88, label: 'Math II', tagColor: getMarkColor(88), textColor: '#FFFFFF' },
    { value: 62, label: 'Computer Science', tagColor: getMarkColor(62), textColor: '#FFFFFF' },
    { value: 79, label: 'Social Studies', tagColor: getMarkColor(79), textColor: '#FFFFFF' },
    { value: 57, label: 'Art', tagColor: getMarkColor(57), textColor: '#FFFFFF' },
    { value: 96, label: 'Physical Education', tagColor: getMarkColor(96), textColor: '#FFFFFF' },
    { value: 48, label: 'Music', tagColor: getMarkColor(48), textColor: '#FFFFFF' },
    { value: 70, label: 'Language', tagColor: getMarkColor(70), textColor: '#FFFFFF' },
    { value: 85, label: 'Economics', tagColor: getMarkColor(85), textColor: '#FFFFFF' },
    { value: 60, label: 'Psychology', tagColor: getMarkColor(60), textColor: '#FFFFFF' },
    { value: 94, label: 'Literature', tagColor: getMarkColor(94), textColor: '#FFFFFF' },
    { value: 74, label: 'Sociology', tagColor: getMarkColor(74), textColor: '#FFFFFF' },
    { value: 55, label: 'Political Science', tagColor: getMarkColor(55), textColor: '#FFFFFF' },
    { value: 78, label: 'Accounting', tagColor: getMarkColor(78), textColor: '#FFFFFF' },
    { value: 63, label: 'Business Studies', tagColor: getMarkColor(63), textColor: '#FFFFFF' },
    { value: 89, label: 'Environmental Science', tagColor: getMarkColor(89), textColor: '#FFFFFF' },
    { value: 42, label: 'Health Education', tagColor: getMarkColor(42), textColor: '#FFFFFF' },
    { value: 67, label: 'Drama', tagColor: getMarkColor(67), textColor: '#FFFFFF' },
    { value: 80, label: 'Statistics', tagColor: getMarkColor(80), textColor: '#FFFFFF' },
    { value: 58, label: 'Anthropology', tagColor: getMarkColor(58), textColor: '#FFFFFF' },
    { value: 92, label: 'Religious Studies', tagColor: getMarkColor(92), textColor: '#FFFFFF' },
    { value: 44, label: 'Ethics', tagColor: getMarkColor(44), textColor: '#FFFFFF' },
    { value: 75, label: 'Philosophy', tagColor: getMarkColor(75), textColor: '#FFFFFF' },
    { value: 65, label: 'Foreign Language', tagColor: getMarkColor(65), textColor: '#FFFFFF' },
]


export const tagExamplesForOption = [
    { value: 'Web Development', label: 'Web Development', readOnly: true },
    { value: 'Mobile App Development', label: 'Mobile App Development', readOnly: true },
]

export const options = [
    { value: 'Data Science', label: 'Data Science' },
    { value: 'Artificial Intelligence', label: 'Artificial Intelligence' },
    { value: 'Machine Learning', label: 'Machine Learning' },
    { value: 'Frontend Development', label: 'Frontend Development' },
    { value: 'Backend Development', label: 'Backend Development' },
    { value: 'UI/UX Design', label: 'UI/UX Design' },
    { value: 'Cloud Computing', label: 'Cloud Computing' },
    { value: 'Cybersecurity', label: 'Cybersecurity' },
    { value: 'Database Management', label: 'Database Management' },
    { value: 'Game Development', label: 'Game Development' },
    { value: 'DevOps', label: 'DevOps' },
    { value: 'Blockchain', label: 'Blockchain' },
    { value: 'Networking', label: 'Networking' },
]

export const mockTagsForCustom = [
    { value: 'intro-theory-computation', label: 'Introduction to the Theory of Computation' },
    { value: 'clean-code', label: 'Clean Code: A Handbook of Agile Software Craftsmanship' },
    { value: 'design-patterns', label: 'Design Patterns: Elements of Reusable Object-Oriented Software' },
    { value: 'intro-algorithms', label: 'Introduction to Algorithms' },
    { value: 'pragmatic-programmer', label: 'The Pragmatic Programmer: Your Journey to Mastery' },
    { value: 'ai-modern-approach', label: 'Artificial Intelligence: A Modern Approach' },
    { value: 'database-system-concepts', label: 'Database System Concepts' },
    { value: 'os-concepts', label: 'Operating System Concepts' },
    { value: 'computer-networking', label: 'Computer Networking: Principles, Protocols and Practice' },
    { value: 'intro-machine-learning', label: 'Introduction to Machine Learning' },
];