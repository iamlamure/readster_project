<!-- eslint-disable -->
<template>
    <div class="container">
        <div class="jumbotron mt-5">
            <div class="form-group">
                <button type="button" class="btn btn-warning col-4 mb-2 float-right">เพิ่มบทความ</button>
            </div>
            <div class="col-sm-auto mx-auto">

                <form class="form-group" action="">
                    <div class="form-group">
                        <label for="name">หัวเรื่อง</label>
                        <input type="text" v-model="title" class="form-control" name="title" placeholder="ระบุหัวเรื่อง">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Article"></textarea>
                    </div>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1" placeholder="เลือกไฟล์ภาพ">
                    
                </form>
            
            </div>
            <div class="table-responsive-md">
                <table class="table">
                <thead>
                    <tr class="thead-dark">
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Date/Update</th>
                        <th scope="col">Like/Read</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>
                            <a href="#" class="">ประยุทธ์ออกไป</a>
                        </td>
                        <td>
                            04/10/62
                            ,Current
                        </td>
                        <td>1M/1.2M</td>
                        <td>
                            <button type="button" class="btn btn-info">Edit</button>
                            <button type="button" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable -->
