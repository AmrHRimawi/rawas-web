import { MetadataRoute } from 'next';
import { baseUrl } from '@/utils/MetadataUtil';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrlString = baseUrl;
  
  // Static pages
  const staticPages = [
    {
      url: baseUrlString,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrlString}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrlString}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrlString}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrlString}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrlString}/suppliers`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrlString}/consultants`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];

  // Dynamic project pages (based on available projects)
  const projectPages = [
    {
      url: `${baseUrlString}/projects/1`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrlString}/projects/2`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Blog pages (when implemented)
  const blogPages = [
    // Add blog pages here when they are implemented
    // {
    //   url: `${baseUrlString}/blogs/news`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly' as const,
    //   priority: 0.6,
    // },
  ];

  return [...staticPages, ...projectPages, ...blogPages];
}
