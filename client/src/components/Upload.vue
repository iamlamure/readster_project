<script>
    import axios from 'axios'
    import router from "../router";
export default {
    data () {
        const token = localStorage.usertoken
        return {
            user_img: req.file.filename,
            token:token,
            id:''
        }
    },
    methods: {
        uploadProfileImg(){
            axios.get('/users/profile',{
                headers: { 'Authorization': this.token }
            }).then(res => {
                this.id = res.data.id
                axios.put(`/users/update/${id}`,
                    {
                        user_img : this.user_img
                    }
                ).then((res) => {
                    this.user_img = ''
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })   
            })
        }
    },
}
</script>