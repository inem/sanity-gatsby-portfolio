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
                  buildHookId: '5d1f6329c97eb35f08a24334',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-cer2vmx9',
                  apiId: 'e6ae4acf-027c-48fe-95ff-007633fceaed'
                },
                {
                  buildHookId: '5d1f632923a098747ec4d4dc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-yeg3ofsy',
                  apiId: '39c76f4c-4def-49f6-8a60-20b6d5d19454'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/inem/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-yeg3ofsy.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
