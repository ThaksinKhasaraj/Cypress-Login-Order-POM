cy.get('#upload')
  .selectFile('cypress/fixtures/logo.png')

 // input is invisible, so we need to skip Cypress UI checks
cy.get('input[type=file]')
.selectFile('cypress/fixtures/logo.png', { force: true })

// make our input visible by invoking a jQuery function to it
cy.get('input[type=file]')
.invoke('show')
.selectFile('cypress/fixtures/logo.png')

// use Cypress’ abilty to handle dropzones
cy.get('[data-cy=upload-image]')
.selectFile('cypress/fixtures/logo.png', { action: 'drag-drop' })

//Upload via API

cy.fixture('logo.png', 'binary').then( image => {
    const blob = Cypress.Blob.binaryStringToBlob(image, 'image/png');
    const formData = new FormData();
    formData.append('image', blob, 'logo.png');
  
      cy.request({
        method: 'POST', 
        url: '/api/upload',
        body: formData,
        headers: {
          'content-type': 'multipart/form-data'
        },
      })
    })
  