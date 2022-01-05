Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            getEmailsNumbers: 10,
            email: []
        },
        methods: {
            getEmail: function() {
                for(let i=0; i < this.getEmailsNumbers; i++) {
                    axios
                    .get(
                        'https://flynn.boolean.careers/exercises/api/random/mail',

                    ).then((response) => {
                        this.email.push(response.data.response);
                    });
                }
            }
        },
        created: function() {
            this.getEmail();
        }
    }
);