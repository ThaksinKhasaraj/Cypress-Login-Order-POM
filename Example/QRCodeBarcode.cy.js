describe('QR Code', () => {
    it('can read qrcode', () => {
      cy.visit('./qrcode.html');
      cy.get('[data-testid="qr-code-img"]')
        .then($el => {
          const img = $el[0];
          const image = new Image();
          image.width = img.width;
          image.height = img.height;
          image.src = img.src;
          image.crossOrigin = 'Anonymous';
          return image;
        })
        .then(image => {
          const reader = new BrowserMultiFormatReader();
          return reader.decodeFromImageElement(image[0])
        })
        .then(result => {
          expect(result.getText()).to.equal('https://www.cypress.io');
        });
    });
  });