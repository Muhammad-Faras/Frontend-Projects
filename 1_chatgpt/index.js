const sidebarIcons = document.querySelectorAll('.sidebar-icon');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main');
const mainSidebarToggleBtn = document.querySelector('.main-sidebar-togglebtn'); // Assuming this is your toggle button

sidebarIcons.forEach((sidebarIconItem) => {
    sidebarIconItem.addEventListener('click', function () {
        if (sidebar.style.display === 'flex') {
            sidebar.style.display = 'none';
            main.style.width = '100%';
            main.style.marginLeft = '0%';
            mainSidebarToggleBtn.style.display = 'block';
        } else {
            sidebar.style.display = 'flex';
            main.style.marginLeft = '20%';
            main.style.width = '80%';
            mainSidebarToggleBtn.style.display = 'none';
        }
    });
});
