<template>
    <div class="container">
        <h1 class="title is-1">จัดการผู้ใช้<router-link class="button is-primary is-rounded" to="Dashboard" >
                หน้าหลัก
        </router-link></h1>
        <table class="table is-fullwidth">
            <thead>
                <th>ID</th>
                <th></th>
                <th>BOOK NAME</th>
                <th class="text-right" >ACTION</th>
            </thead>
            <tbody>
                <tr v-for="(book) in books" v-bind:key="book.bookid" v-bind:title="book.book_name">
                    <td>{{book.bookid}}</td>
                    <td></td>
                    <td>
                        <h5 @click="getbookdetail(book.bookid)">{{book.book_name}}</h5>
                    </td>
                    <td class="text-right">
                        <button  class="button is-warning is-rounded ">Edit</button>
                        <button  v-on:click="deletebook(book.bookid)" type="button"  class="button is-danger is-rounded">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>           
    </div>
</template>
<script>
export default {
    
}
</script>