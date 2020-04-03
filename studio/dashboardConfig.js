export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e86e7a18c3a5048d596c57c',
                  title: 'Sanity Studio',
                  name: 'dalen-tech-fest-2020-studio',
                  apiId: '9f1f8d08-109c-4531-a2ef-8d234b7319ca'
                },
                {
                  buildHookId: '5e86e7a13e3618c3260161af',
                  title: 'Landing pages Website',
                  name: 'dalen-tech-fest-2020',
                  apiId: '8273fcdf-6bc5-4fae-a9d2-aa2d92d7be5f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/boyum/dalen-tech-fest-2020',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://dalen-tech-fest-2020.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
