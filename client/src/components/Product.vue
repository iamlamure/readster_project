<template>
     <div class="container">
        <div class="jumbotron mt-5">
            <h1>เพิ่มสินค้า</h1>
            <form v-on:submit.prevent="addbook">
                <div class="form-group">
                    <label for="book_name">ชื่อสินค้า</label>
                    <input type="text"  class="form-control" name="book_name" placeholder="โปรดระบุชื่อสินค้า">
                </div>
                <div class="form-group">
                    <label for="product_detail">รายละเอียด/เรื่องย่อ</label>
                    <input type="text" class="form-control" name="book_detail" placeholder="โปรดระบุราละเอียด/เรื่องย่อ">
                </div>
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="price">ราคา</label>
                        <input type="text" class="form-control" name="price" placeholder="ราคา">
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="qty">จำนวน</label>
                        <input type="text" class="form-control" name="qty" placeholder="จำนวน">
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="product_status">สภาพ</label>
                        <input type="text"  class="form-control" name="product_status" placeholder="สภาพของสินค้า">
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="shipping">การจัดส่ง</label>
                        <input type="text" class="form-control" name="shipping" placeholder="การจัดส่ง">
                    </div>
                </div>
                <div class="form-group">
                    <label for="book_img">รูปสินค้า</label>
                    <input type="file" name="book_img" >
                </div>
                <button type="submit" class="btn btn-lg btn-primary btn-block">Add Product Now!</button>
                <table class="table">
                    <th>ID</th>
                    <th>Cover</th>
                    <th>Book Name</th>
                    <tr>
                        <td>1</td>
                        <td>Image</td>
                        <td>Book Name</td>
                        <td class="text-right">
                            <button  class=" btn btn-info ">Edit</button>
                            <button  class=" btn btn-danger ">Delete</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>