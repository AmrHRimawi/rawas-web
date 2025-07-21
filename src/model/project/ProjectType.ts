export type ProjectTypeKey = 'office' | 'residential' | 'commercial' | 'industrial' | 'retail' | 'mixed_use';

export interface ProjectType {
    key: ProjectTypeKey;
    name: {
        ar: string;
        en: string;
    };
}

export const ProjectTypes = {
    OFFICE: {
        key: 'office',
        name: {
            ar: 'مكتبي',
            en: 'Office',
        },
    },
    RESIDENTIAL: {
        key: 'residential',
        name: {
            ar: 'سكني',
            en: 'Residential',
        },
    },
    COMMERCIAL: {
        key: 'commercial',
        name: {
            ar: 'تجاري',
            en: 'Commercial',
        },
    },
    INDUSTRIAL: {
        key: 'industrial',
        name: {
            ar: 'صناعي',
            en: 'Industrial',
        },
    },
    RETAIL: {
        key: 'retail',
        name: {
            ar: 'تجزئة',
            en: 'Retail',
        },
    },
    MIXED_USE: {
        key: 'mixed_use',
        name: {
            ar: 'استخدام مختلط',
            en: 'Mixed Use',
        },
    },
} as const;

export const PROJECT_TYPES: ProjectType[] = [
    ProjectTypes.OFFICE,
    ProjectTypes.RESIDENTIAL,
    ProjectTypes.COMMERCIAL,
    ProjectTypes.INDUSTRIAL,
    ProjectTypes.RETAIL,
    ProjectTypes.MIXED_USE,
];
