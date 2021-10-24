import axios from 'axios';
class NotesResource {
    constructor() {
        if (process.env.NODE_ENV === 'production') {
            this.host = '...';
        } else {
            this.host = 'http://localhost:8080';
        }
        this.mock = (process.env.NODE_ENV !== 'production');
    }

    getNotes(token) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        };

        return axios.get(this.host + '...', config);
    }

    createNotes(text, date) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const data = {
            'text': text,
            'date': date
        };

        return axios.post(this.host + '...', data, config);
    }
}

export default NotesResource;
