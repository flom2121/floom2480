const signupbtnlink = document.querySelector('.signupbtn-link')
const signinbtnlink = document.querySelector('.signinbtn-link')
const wrapper = document.querySelector('.wrapper')


signupbtnlink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
signinbtnlink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
})