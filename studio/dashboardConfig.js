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
                  buildHookId: '5f6d263a3e020e6fd4b82883',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xa87sh33',
                  apiId: '3e44ffba-4fb5-4864-9fb2-f4cf2b15ce02'
                },
                {
                  buildHookId: '5f6d263bb6838081b094f465',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3quf9jh3',
                  apiId: 'aec23c71-08cf-402d-9a72-f1507fafaf39'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nkhlnmwt/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-3quf9jh3.netlify.app',
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
