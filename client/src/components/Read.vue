<template>
    <div class="container">
        <div class="jumbotron mt-5" >
            <h2>ชื่อเรื่อง</h2>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
          
        }
    },
    methods: {
        getread (){
           axios.get('/reads/:blogid' , (req,res,) => {

           })
           .then(res => {
               
           })
        }
    }
}
</script>