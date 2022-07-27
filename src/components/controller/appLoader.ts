import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '9b76fa01398b4fe8b90b10eda302c839', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
