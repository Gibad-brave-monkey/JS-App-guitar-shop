class Error {


    render() {
        const html = `
            <div class="error-container">
                <div class="error-message">
                    <h3>Извините, но  втекущий момент нет доступа</h3>
                    <p>Пожалуйста, попробуйте зайти попозже</p>
                </div>
            </div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();
