export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ddd4c49856f95018f90e76c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-g7db72aq',
                  apiId: '4dc60aa1-b905-49a1-82c2-2db9f8c13b23'
                },
                {
                  buildHookId: '5ddd4c498e7baa0186d1bf48',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-n93fvveu',
                  apiId: '5d02b178-432c-4eaa-be5f-57519576b7cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gromschmidt/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-n93fvveu.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
