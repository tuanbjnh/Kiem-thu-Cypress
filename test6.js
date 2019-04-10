describe('Nhan tin trao doi', function() {

    context('Đăng nhập', function(){
    beforeEach(function(){
      cy.visit('https://hoclieu.sachmem.vn');
    })

    it('Test case gia tri placeholder tim kiem', function(){
      cy.contains('Đăng nhập').click();
      cy.get('#user_email').type('manhvdm@gmail.com') // type email
      cy.get('#user_password').type('12345678') // type password
      cy.get('#new_user > div:nth-child(6) > input').click();

      cy.url().should('include', 'https://hoclieu.sachmem.vn');
      cy.wait(2000);
      cy.get('#userDropdown > span').should('contain', 'Manh');
      cy.get('span > .text-dark').click();
      cy.get(':nth-child(2) > .list-group-item > .row > .col-9 > .text-dark').click();
      cy.get('.border-right > :nth-child(6)').click();
      cy.get('#sidebar-wrapper > :nth-child(1) > .input_search').should('have.attr','placeholder','Tìm kiếm')
    })
  })
  })