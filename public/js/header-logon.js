/**
 * Header Logon Form Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    const logonForm = document.querySelector('.logon-form');
    const loginBtn = document.querySelector('#loginbtn');

    if (logonForm && loginBtn) {
        logonForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = logonForm.querySelector('#userName').value;
            const password = logonForm.querySelector('#password').value;

            if (!username || !password) {
                if (typeof showToast === 'function') {
                    showToast('Please enter both username and password.', 'error');
                } else {
                    alert('Please enter both username and password.');
                }
                return;
            }

            // Loading state
            const originalText = loginBtn.innerText;
            loginBtn.innerText = 'Logging on...';
            loginBtn.disabled = true;

            // Simulate login
            setTimeout(() => {
                if (typeof showToast === 'function') {
                    showToast('Login successful! Redirecting...', 'success');
                }
                
                setTimeout(() => {
                    window.location.href = 'https://www.totaland.com/desktop';
                }, 1000);
            }, 1500);
        });
    }
});
