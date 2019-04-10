describe('Giao bai tap', function() {

    context('Đăng nhập', function(){
    beforeEach(function(){
      cy.visit('https://hoclieu.sachmem.vn');
    })

    it('Test case giao bai tap', function(){
      cy.contains('Đăng nhập').click();
      cy.get('#user_email').type('manhvdm@gmail.com') // type email
      cy.get('#user_password').type('12345678') // type password
      cy.get('#new_user > div:nth-child(6) > input').click();

      cy.url().should('include', 'https://hoclieu.sachmem.vn');
       cy.wait(2000);
      cy.get('#userDropdown > span').should('contain', 'Manh');
      cy.get(':nth-child(7) > .row > .col-9 > .text-dark').click();
     cy.wait(2000);
     cy.get(':nth-child(8) > .row > .col-9 > .text-dark').click();
     cy.get('.pull-right > .btn > .d-none').click();
     cy.get(':nth-child(2) > .form-control').should('have.value','1 Look, listen and repeat.');
    })
  })
})