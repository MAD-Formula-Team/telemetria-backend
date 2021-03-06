(responseManager => {
	document.addEventListener('DOMContentLoaded', event => {
		const formSignUp = document.getElementById('signup');

		formSignUp.addEventListener('submit', event => {
			event.preventDefault();

			fetch('/users/signup', {
				method: 'POST',
				body: new FormData(formSignUp)
			})
			.then(responseManager)
			.then(data => {
				window.location.href = '/login';
			})
			.catch(error => alert(error));
		});
	});
})(window.responseManager);