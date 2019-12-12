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
                  buildHookId: '5df1fbde76364466cc53d6a2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-afogwvy5',
                  apiId: 'b69cc84a-28ff-4106-9bd1-bb9e8d827165'
                },
                {
                  buildHookId: '5df1fbdef2d41953e01dae06',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ginzuekp',
                  apiId: '3d69deb2-4ebd-4f14-be6b-639cebb38547'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Tedorg/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ginzuekp.netlify.com',
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
